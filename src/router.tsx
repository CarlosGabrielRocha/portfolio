import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Projects from "./views/Projects";
import Stack from "./views/Stack";
import Education from "./views/Education";

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
      }
    ]
  }
])

export default router