import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {

  const [mario, setMario] = useState([])

  const ApiUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    axios.get(ApiUrl)
    .then(datos => [
      setMario(datos.data.amiibo)
    ])
    .catch(() => console.error("Falla"))
  },[])

  const charactersRendered = new Set();

  return(
    <div>

      <div>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mario</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
      </div>

      {mario.map(({ character }) => {
        // Si ya hemos renderizado este 'character', no lo volvemos a renderizar
        if (charactersRendered.has(character)) {
          return null;
        }

        // Si no hemos renderizado este 'character', lo añadimos al conjunto
        // y lo renderizamos
        charactersRendered.add(character);

        return (
          <div key={character}>
            <p>{character}</p>
          </div>
        );
      })}
  </div>
  )
}

export default App