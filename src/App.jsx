import { useState } from 'react'
import {frasesArray} from './data.jsx'

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex((prevIndex) => (prevIndex + 1) % frasesArray.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let frases = frasesArray[index];
  return (
    <>
      <p className='lead'>({index + 1} de {frasesArray.length})</p>
      <blockquote className="blockquote mb-0">
          <p>{frases.frase}</p>
        <footer className="blockquote-footer">
          {frases.autor} <cite title="Source Title">{frases.fuente}</cite>
        </footer>
      </blockquote>

      <p className="lead">
        <button onClick={handleMoreClick} href="#" className="button-3 fw-bold text-center">
          {showMore ? 'Ocultar' : 'Mostrar'} detalles
        </button>
        {showMore && (
          <div>
            <p>Categoría: {frases.categoria}</p>
            <p>Año: {frases.año}</p>
            <p>País: {frases.pais}</p>
            <p>Idioma original: {frases.idiomaOriginal}</p>
          </div>
        )}
      </p>
      
      <button onClick={handleNextClick} href="#" className="button-3 fw-bold float-right" disabled={index === frasesArray.length - 1}>
        Siguiente
      </button>
  </>
  );
}

export default App
