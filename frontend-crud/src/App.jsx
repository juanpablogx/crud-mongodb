import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReservasPage from "./pages/ReservasPage";
import ReservaForm from "./pages/ReservaForm";
import NotFound from "./pages/NotFound";
import { ReservasContextProvider } from "./context/ResevasProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4">
        <ReservasContextProvider>
          <Routes>
            <Route path="/" element={<ReservasPage />} />
            <Route path="/nueva" element={<ReservaForm />} />
            <Route path="/editar/:id" element={<ReservaForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ReservasContextProvider>
      </div>
    </div>
  );
}

export default App;
