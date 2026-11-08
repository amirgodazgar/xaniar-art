import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExpertisePage } from "./pages/ExpertisePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { WorkPage } from "./pages/WorkPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/project" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
