import React from 'react'
import {toast} from 'react-toastify'
import {paginate} from '../services/paginate'

export const usePokeApi = (endpoint, offset, showing = 12) => {
  const [isPending, setIsPending] = React.useState(false)
  const [data, setData] = React.useState({
    pokemon: null,
    types: null
  })
  const baseURL = 'https://pokeapi.co/api/v2'
  let promises = []
  let response, json

  React.useEffect(() => {
    (async () => {
      setIsPending(true)

      try {
        if (data.types === null) {
          response = await fetch(`${baseURL}/type`)
          !response.ok && toast.error(`Types: Bad Response`)
          json = await response.json()
          setData({types: json.results})
        }

        if (endpoint) {
          response = await fetch(`${baseURL}/${endpoint}`)
          if (!response.ok && endpoint.includes('pokemon')) {
            toast.error(`Pokemon not Found`)
          }
          json = await response.json()

          if (endpoint.includes('pokemon')) {
            setData(prevData => {
              return {...prevData, pokemon: json}
            })
          }

          if (endpoint.includes('type')) {
            const {array} = paginate(json.pokemon, offset + 1, showing)

            for (const {pokemon} of array) {
              response = await fetch(pokemon.url)
              json = await response.json()
              promises.push(json)
            }

            Promise.all(promises).then(data => setData(prevData => {
              return {...prevData, pokemon: data}
            }))
          }

          setTimeout(() => setIsPending(false), 350)
          return
        }

        response = await fetch(`${baseURL}/pokemon/?limit=${showing}&offset=${offset}`)
        !response.ok && toast.error(`Pokemon: Bad Response`)
        json = await response.json()

        for (const pokemon of json.results) {
          response = await fetch(pokemon.url)
          json = await response.json()
          promises.push(json)
        }
    
        Promise.all(promises).then(data => setData(prevData => {
          return {...prevData, pokemon: data}
        }))
        
        setTimeout(() => setIsPending(false), 350)
      } catch (error) {
        if (error instanceof SyntaxError) {
          console.error('There was a SyntaxError. Check your spelling')
        } else {
          console.error('There was an error', error)
        }
        toast.error('Catch block error')
        setIsPending(false)
      }
    })()
  }, [endpoint, offset, showing])

  return {data, isPending}
}
