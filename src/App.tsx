import { SiteShell, type SitePage } from "./components/SiteShell";
import { HomePage } from "./pages/HomePage";
import { LabPage } from "./pages/LabPage";
import { ProjectsPage } from "./pages/ProjectsPage";

interface AppProps {
  page: string;
}

function pageContent(page: SitePage) {
  if (page === "projects") return <ProjectsPage />;
  if (page === "lab") return <LabPage />;
  return <HomePage />;
}

export function App({ page }: AppProps) {
  const currentPage: SitePage = page === "projects" || page === "lab" ? page : "home";

  return <SiteShell page={currentPage}>{pageContent(currentPage)}</SiteShell>;
}
