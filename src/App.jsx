import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import SeriesPage from './pages/SeriesPage';
import SerieDetails from './components/SerieDetails';
import NoticiasPage from './pages/NoticiasPage';

function App() {
  return (
    
    <Router> {/* Aquí envolvemos toda la aplicación en el componente Router */}
      <NavBar></NavBar>
      <Routes> {/* Usamos Routes en lugar de Switch para definir rutas */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/series/:id" element={<SerieDetails />} />
        <Route path="/noticias" element={<NoticiasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
