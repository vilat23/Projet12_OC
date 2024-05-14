import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import Apropos from './pages/apropos/Apropos.jsx'
import Details from './components/details/Details.jsx'
import Error from './pages/error/Error.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;