import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { formatTimecode, formatDuration } from '../utils/portfolio';

interface VideoPlayerProps {
  videoUrl: string;
  posterComponent?: React.ReactNode;
  aspectRatio?: '16:9' | '2.39:1' | '4:3' | '9:16';
  autoPlayPreview?: boolean;
  title: string;
  className?: string;
  onEnded?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  posterComponent,
  aspectRatio = '16:9',
  autoPlayPreview = false,
  title,
  className = '',
  onEnded,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(autoPlayPreview);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '2.39:1':
        return 'cinema-aspect';
      case '4:3':
        return 'aspect-[4/3]';
      case '9:16':
        return 'aspect-[9/16]';
      case '16:9':
      default:
        return 'standard-aspect';
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration || 0);
    };

    const handleWaiting = () => setIsBuffering(true);
    const handlePlaying = () => {
      setIsBuffering(false);
      setIsPlaying(true);
    };
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      if (onEnded) onEnded();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onEnded]);

  // Pause when no longer visible in viewport (IntersectionObserver)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    setHasStarted(true);

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Fallback if browser blocks sound or playback
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const targetTime = parseFloat(e.target.value);
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className={`group relative overflow-hidden bg-[#141414] text-[#FAFAFA] border border-[#262624] select-none ${getAspectClass()} ${className}`}
      aria-label={`Video player for ${title}`}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        preload="metadata"
        playsInline
        muted={isMuted}
        loop
        className="w-full h-full object-cover"
        onClick={togglePlay}
      />

      {/* Poster overlay before first playback */}
      {!hasStarted && posterComponent && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 z-10 cursor-pointer"
        >
          {posterComponent}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 text-[#141414] shadow-2xl transition-transform transform group-hover:scale-105 active:scale-95"
              aria-label={`Play video for ${title}`}
            >
              <Play className="w-7 h-7 md:w-8 md:h-8 fill-current ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* Buffering spinner */}
      {isBuffering && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Center click-to-play overlay when started but paused */}
      {hasStarted && !isPlaying && !isBuffering && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-white/90 text-[#141414] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>
      )}

      {/* Accessible Cinema Control Bar */}
      <div
        className={`absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 md:p-4 transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Progress Scrubber */}
        <div className="relative flex items-center w-full mb-2.5">
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1.5 bg-[#404040] accent-white cursor-pointer rounded-lg appearance-none transition-all hover:h-2"
            aria-label="Seek video progress"
          />
        </div>

        {/* Control Buttons & Timecode */}
        <div className="flex items-center justify-between text-xs md:text-sm">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="p-1.5 text-white/90 hover:text-white transition-colors"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
            </button>

            <button
              type="button"
              onClick={handleRestart}
              className="p-1.5 text-white/70 hover:text-white transition-colors"
              aria-label="Restart video"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="p-1.5 text-white/80 hover:text-white transition-colors"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Precision Timecode Display */}
            <div className="font-mono text-xs text-[#A3A3A0] tracking-wider ml-1">
              <span>{formatDuration(currentTime)}</span>
              <span className="mx-1 text-[#525252]">/</span>
              <span>{formatDuration(duration)}</span>
              <span className="hidden sm:inline-block ml-2 text-[#737373]">
                [{formatTimecode(currentTime, 24)}]
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-widest text-[#737373] uppercase hidden md:inline">
              {aspectRatio} SCOPE
            </span>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1.5 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
