import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
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
        element: <Experience />
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