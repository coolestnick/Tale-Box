import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { IdentityProvider } from "./context/AppContext";
import Story from "./pages/Story";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "stories",
      element: <Stories />,
    },
    {
      path: "stories/:id",
      element: <Story />,
    },
    {
      path: "create",
      element: <Create />,
    },
  ]);

  return (
    <div className="bg-[#0B011D] h-full">
      <IdentityProvider>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </IdentityProvider>
    </div>
  );
}

export default App;
