import "./App.css";
import About from "./component/about/About";
import Footer from "./component/footer/Footer";
import Master from "./component/master/Master";
import Navbar from "./component/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./component/protfolio/Portfolio";
import Contact from "./component/contact/Contact";

const router = createBrowserRouter([
  {
    path: "",
    element: <Master />,
    children: [
      { path: "", element: <About /> },
      { path: "about", element: <About /> },
      { path: "port", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
