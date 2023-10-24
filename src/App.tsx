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
    <div className="bg-gray-900">
      <div className="grid grid-cols-2 gap-4 container mx-auto">
        {mario.map(({tail, character, image }) => {
          
          if (charactersRendered.has(character)) {
            return null;
          }

          charactersRendered.add(character);

          return (
            <div key={tail}>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="w-60 h-60 object-cover object-center rounded-t-lg md:rounded-none md:rounded-l-lg" 
                src={image} alt=""/>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                        {character}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App