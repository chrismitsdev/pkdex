import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {FaWeightHanging, FaRulerVertical} from 'react-icons/fa'
import {capitalize} from '../../services/capitalize'
import {PokemonModal} from '../'
import './pokemon.css'

export const Pokemon = ({pkmn}) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  const handleOpenModal = () => setModalIsOpen(true)
  const handleCloseModal = () => setModalIsOpen(false)

  return (
    <React.Fragment>
      <div className='pokemon' onClick={handleOpenModal}>
        <div className='pokemon-info'>
          <h1 className='pokemon-name'>{capitalize(pkmn.name)}</h1>
          <div className='pokemon-types'>
            {pkmn.types.map(({type}) => (
              <p key={uuidv4()} className={`pokemon-type ${type.name}`}>
                {capitalize(type.name)}
              </p>
            ))}
          </div>
          <div className='pokemon-dimensions'>
            <div className='pokemon-dimension pokemon-weight'>
              <FaWeightHanging /><span>{pkmn.weight / 10} kg</span>
            </div>
            <div className='pokemon-dimension pokemon-height'>
              <FaRulerVertical /><span>{pkmn.height / 10} m</span>
            </div>
          </div>
        </div>
        <img 
          className='pokemon-image'
          src={pkmn.sprites.other['official-artwork'].front_default} 
          alt={pkmn.name} 
        />
        <div className='pokemon-number'>#{pkmn.id.toString().padStart(3, 0)}</div>
      </div>
      <PokemonModal pkmn={pkmn} modalIsOpen={modalIsOpen} modalCloseFn={handleCloseModal} />
    </React.Fragment>
  )
}