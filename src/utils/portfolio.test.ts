import test from "node:test";
import assert from "node:assert/strict";
import {
  formatTimecode,
  formatDuration,
  filterProjects,
  getAdjacentProjects,
  validateContactForm,
  type Project,
} from "./portfolio.ts";

const mockProjects: Project[] = [
  {
    id: "proj-1",
    slug: "polestar-kinetic-light",
    title: "Kinetic Light",
    client: "Polestar",
    year: 2025,
    category: "commercial",
    categoryLabel: "Commercial",
    roles: ["Commercial Director", "Art Director"],
    duration: "01:30",
    durationSeconds: 90,
    aspectRatio: "2.39:1",
    synopsis:
      "Launch campaign film highlighting aerodynamic light architecture.",
    featured: true,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    posterBg: "#1f1f1e",
    accentTone: "#e8e8e6",
    artDirectionNotes: ["Anamorphic glass", "Minimalist studio"],
    toolsUsed: ["Houdini", "Cinema 4D", "Redshift"],
    credits: [{ role: "Director", name: "xaniar ghaderpanah" }],
    stills: [{ caption: "Aero light bar pass", ratio: "2.39:1" }],
  },
  {
    id: "proj-2",
    slug: "solaris-spatial-sculpture",
    title: "Solaris 01",
    client: "Museum of Digital Art",
    year: 2024,
    category: "3d-motion",
    categoryLabel: "3D Motion",
    roles: ["3D Motion Designer", "Cinematic Artist"],
    duration: "02:15",
    durationSeconds: 135,
    aspectRatio: "16:9",
    synopsis: "Procedural algorithmic geometry exploring fluid tension.",
    featured: true,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    posterBg: "#141414",
    accentTone: "#ffffff",
    artDirectionNotes: ["Obsidian surfaces", "Subtle caustics"],
    toolsUsed: ["Unreal Engine 5", "Octane Render"],
    credits: [{ role: "Lead Artist", name: "xaniar ghaderpanah" }],
    stills: [{ caption: "Phase crystallization", ratio: "16:9" }],
  },
];

test("formatDuration formats seconds accurately to mm:ss", () => {
  assert.equal(formatDuration(90), "1:30");
  assert.equal(formatDuration(5), "0:05");
  assert.equal(formatDuration(135), "2:15");
  assert.equal(formatDuration(0), "0:00");
});

test("formatTimecode generates SMPTE-style timecode string", () => {
  assert.equal(formatTimecode(90, 24), "00:01:30:00");
  assert.equal(formatTimecode(0, 24), "00:00:00:00");
  assert.equal(formatTimecode(3665.5, 24), "01:01:05:12");
});

test("filterProjects filters by category and search keyword", () => {
  const allProjects = filterProjects(mockProjects, "all");
  assert.equal(allProjects.length, 2);

  const commercials = filterProjects(mockProjects, "commercial");
  assert.equal(commercials.length, 1);
  assert.equal(commercials[0].id, "proj-1");

  const searched = filterProjects(mockProjects, "all", "Houdini");
  assert.equal(searched.length, 1);
  assert.equal(searched[0].title, "Kinetic Light");

  const empty = filterProjects(mockProjects, "all", "NonExistentXYZ");
  assert.equal(empty.length, 0);
});

test("getAdjacentProjects resolves cyclic next and prev items", () => {
  const { prev, next } = getAdjacentProjects(mockProjects, "proj-1");
  assert.equal(prev?.id, "proj-2");
  assert.equal(next?.id, "proj-2");

  const missing = getAdjacentProjects(mockProjects, "unknown");
  assert.equal(missing.prev, null);
  assert.equal(missing.next, null);
});

test("validateContactForm checks required fields and email syntax", () => {
  const invalid = validateContactForm({
    name: "A",
    email: "bad-email",
    projectType: "",
    message: "short",
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.projectType);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: "Sarah Chen",
    email: "sarah@productionhouse.co",
    company: "Nexus Creative",
    projectType: "Commercial Directing",
    timeline: "Q3 2026",
    budgetRange: "$50k - $100k",
    message:
      "We are seeking a commercial director & 3D motion lead for our upcoming launch.",
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
