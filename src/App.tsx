import { RouterProvider } from "react-router-dom";
import router from "./router";
import MyParticles from "./components/MyParticles";

function App() {
  return (
    <>
      <MyParticles />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
