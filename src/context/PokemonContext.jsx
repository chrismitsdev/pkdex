import React from 'react'
import {usePokeApi} from '../hooks/usePokeApi'
import {useWindowSize} from '../hooks/useWindowSize'

export const PokemonContext = React.createContext(null)

export const PokemonProvider = ({children}) => {
  const [endpoint, setEndpoint] = React.useState('')
  const [offset, setOffset] = React.useState(0)
  const {data, isPending} = usePokeApi(endpoint, offset)
  const windowSize = useWindowSize()

  return (
    <PokemonContext.Provider value={{
      data,
      isPending,
      windowSize,
      endpoint,
      offset,
      setEndpoint,
      setOffset
    }}>
      {children}
    </PokemonContext.Provider>
  )
}