import React from 'react'
import {usePokeApi} from '../hooks/usePokeApi'

export const PokemonContext = React.createContext(null)

export const PokemonProvider = ({children}) => {
  const [endpoint, setEndpoint] = React.useState('')
  const [offset, setOffset] = React.useState(0)
  const {data, isPending} = usePokeApi(endpoint, offset)

  return (
    <PokemonContext.Provider value={{
      data,
      isPending,
      endpoint,
      offset,
      setEndpoint,
      setOffset
    }}>
      {children}
    </PokemonContext.Provider>
  )
}