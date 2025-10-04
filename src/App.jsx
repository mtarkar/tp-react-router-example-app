import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

// PascalCase - components
// camelCase - functions, helpers

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/our-projects" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
