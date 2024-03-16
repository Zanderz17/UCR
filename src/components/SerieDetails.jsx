import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TikTokEmbed } from 'react-social-media-embed';

function SerieDetails() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    fetch("/data/series.json")
      .then(response => response.json())
      .then(data => {
        const foundSerie = data.series.find(item => item.id.toString() === id);
        setSerie(foundSerie);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [id]);

  // Use a unique key to force remounting of <TikTokEmbed /> when currentVideoIndex changes
  const tikTokEmbedKey = `${serie?.id}-${currentVideoIndex}`;

  const goToPreviousVideo = () => {
    setCurrentVideoIndex(prevIndex => (prevIndex === 0 ? serie.videos.length - 1 : prevIndex - 1));
  };

  const goToNextVideo = () => {
    setCurrentVideoIndex(prevIndex => (prevIndex === serie.videos.length - 1 ? 0 : prevIndex + 1));
  };

  if (!serie) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-40">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="hidden md:flex flex-col justify-center items-center gap-5">
          <img src={serie.imagen} alt={serie.nombre} className="w-1/2 object-fill cursor-pointer" />
          <h1 className="font-semibold text-5xl text-white text-center border-b-" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>SINOPSIS</h1>
          <p className="font-semibold text-xl text-white text-center">{serie.sipnopsis}</p>
        </div>
        <h1 className="font-semibold text-xl text-white text-center border-b- mt-10 md:mt-0" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Total de Capitulos: {serie.videos.length} / Capitulo Actual: {currentVideoIndex + 1}</h1>
        <div className="flex flex-row gap-40 md:gap-60">
          <img src="/icons/back.png" alt="Back" className="object-fill cursor-pointer" onClick={goToPreviousVideo} />
          <img src="/icons/next.png" alt="Next" className="object-fill cursor-pointer" onClick={goToNextVideo} />
        </div>
      </div>
      <div>
        {/* Use the key prop to force remounting of <TikTokEmbed /> */}
        <TikTokEmbed key={tikTokEmbedKey} url={serie.videos[currentVideoIndex]} width={325} />
      </div>
    </div>
  );
  
}

export default SerieDetails;
