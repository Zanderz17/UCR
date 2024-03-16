import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SeriesPage() {
  const [series, setSeries] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('/data/series.json')
      .then(response => response.json())
      .then(data => setSeries(data.series))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSerieClick = (id) => {
    navigate(`/series/${id}`); 
  };

  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {series.map((serie, index) => (
          <div key={index} className="mb-4" onClick={() => handleSerieClick(serie.id)}>
            <div className="flex justify-center items-center mb-2">
              <img src={serie.imagen} alt={serie.nombre} className="w-full h-48 object-fill cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center">
        <h3 className="hidden md:block font-semibold text-xl text-gray-300 text-center mb-5">Universo Cinematográfico del Rufián</h3>
        <div className="flex flex-row justify-center items-center gap-6 ml-auto">
              <a href="https://www.youtube.com/c/FUNCENTERPRODUCTIONSPERU/videos" target="_blank" rel="noopener noreferrer">
                <img src="/icons/youtube.png" alt="Youtube Funcenter" className="object-fill"/>
              </a>
              <a href="https://www.tiktok.com/@funcenterfc" target="_blank" rel="noopener noreferrer">
                <img src="/icons/tiktok.png" alt="TikTok Funcenter" className="object-fill"/>
              </a>
              <a href="https://www.facebook.com/FuncenterFC" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.png" alt="FaceBook Funcenter" className="object-fill" />
              </a>
        </div>
      </div>
    </div>
  );
}

export default SeriesPage;
