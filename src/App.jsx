import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import { routes } from "./utils/routes";
import Home from "./Home";
import Contacto from "./Contacto";
import Beer from "./Beer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contacto />} />
        <Route path="/beer/:id" element={<Beer />} />
        <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App
