import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Projects from "./views/Projects";
import Stack from "./views/Stack";
import Education from "./views/Education";
import Experience from "./views/Experience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Projects />
      },
      {
        path: 'stack',
        element: <Stack />
      },
      {
        path: 'education',
        element: <Education />
      },
      {
        path: 'experience',
        element: <Experience />
      }
    ]
  }
])

export default router