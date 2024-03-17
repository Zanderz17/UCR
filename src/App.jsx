import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import SeriesPage from './pages/SeriesPage';
import NoticiasPage from './pages/NoticiasPage';
import SerieDetails from './components/SerieDetails';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/series/:id" element={<SerieDetails />} />
        <Route path="/noticias" element={<NoticiasPage></NoticiasPage>} />
      </Routes>
    </Router>
  );
}

export default App;
