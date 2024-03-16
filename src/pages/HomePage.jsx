
function HomePage() {

  return (
    <>
      <div className='flex md:flex-row flex-col items-center justify-between pt-10'>
        <div className="w-1/2 h-92 flex flex-col items-center justify-center">
          <img src="/Edits/Logo_0.png" alt="Imagen Funcenter" className="object-cover w-96"/>
          <h3 className="font-semibold text-xl text-gray-300 text-center mb-5">Universo Cinematográfico del Rufián</h3>
        </div>
        <div className="font-semibold text-xl text-white w-1/2 flex flex-col items-center justify-center gap-10">
          <img src="/Edits/UCR_STUDIOS.png" alt="Imagen Funcenter" className="object-fill"/>
          <p className="text-justify">En esta página web tendrás acceso a todos los TikToks del UCR de <b><a href="https://www.tiktok.com/@funcenterfc" target="_blank" rel="noopener noreferrer" >@funcenter</a></b>. 
            Este proyecto es personal y estamos abiertos a cualquier tipo de recomendación
            para mejorarlo. ¡Esperamos que disfrutes de la experiencia!
          </p>
          <div className="flex flex-row justify-end items-end gap-6 ml-auto">
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
    </>
  )
}

export default HomePage
