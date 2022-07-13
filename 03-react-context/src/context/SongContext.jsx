import { createContext, useState, useEffect, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'
// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir LA MISMA información entre diferentes niveles de componentes.

// Para usar CONTEXT necesitamos seguir una serie de pasos:

// #1 Creación del Contexto Vacio
// const SongContext = React.createContext()
const SongContext = createContext()

// #2 Creación del Proveedor del Contexto
// Es decir, maneja de donde se obtiene y como se pasa la información
function SongProvider (props) {
  const [list, setList] = useState([]) // data de la API.
  const [loading, setLoading] = useState(true) // Nos indica cuando los datos esten disponibles.
  const [selectedSong, setSelectedSong] = useState({}) // Nos dira que canción esta seleccionada
  // Simulo la llamada a la API de la lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, [2000])
  }, [])

  // Tenemos que indicar al Provider, que datos debe proveer. Estos datos son públicos para todos los componentes
  const value = {
    list,
    selectedSong,
    setSelectedSong,
    loading
  }

  // Siempre se llamava value el prop del Provider con la data.
  // value es un objeto que indica que datos son globales.
  return (
    <SongContext.Provider value={value} {...props} />
  )
}

// #3 Consumidor del contexto
// Brinda el acceso a la data a los componentes.

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// #4 Exportar las funciones del Provider y el Consumir
// para que puedan ser invocadas en nuestros componentes.
export {
  SongProvider,
  useSongContext
}

/* USO DE CONTEXT */

// #5 Ahora debemos ir a un componente de orden superior (por ejemplo App/Home y envolver a los componentes que necesiten la información con la etiqueta del Provider, en este caso <SongProvider />). De esta forma podrá utilizarse en todos los componentes descendientes.