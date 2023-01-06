import React from 'react'
import Modal from 'react-modal'
import {IconContext} from 'react-icons'
import {FaTimes, FaInfoCircle} from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'
import {capitalize} from '../../services/capitalize'
import {Button} from '../'
import './pokemonmodal.css'

export const PokemonModal = ({pkmn, modalIsOpen, modalCloseFn}) => {
  return (
    <Modal 
      htmlOpenClassName='pokemon-modal-active'
      overlayClassName='pokemon-modal-overlay'
      className='pokemon-modal-content'
      isOpen={modalIsOpen}
      onRequestClose={modalCloseFn}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      closeTimeoutMS={450}
    >
      <div className='pokemon-modal-left'>
        <img 
          className='pokemon-modal-image' 
          src={pkmn.sprites.other.home.front_default} 
          alt={pkmn.name} 
        />
        <div className='pokemon-modal-number'>
          No. {pkmn.id.toString().padStart(3, 0)}
        </div>
        <h1 className='pokemon-modal-name'>{capitalize(pkmn.name)}</h1>
        <div className='pokemon-modal-types'>
          {pkmn.types.map(({type}) => (
            <p key={uuidv4()} className={`pokemon-modal-type ${type.name}`}>
              {capitalize(type.name)}
            </p>
          ))}
        </div>
        <div className='pokemon-modal-dimensions'>
          <div className='pokemon-modal-dimension pokemon-weight'>
            <span>WT {pkmn.weight / 10} kg</span>
          </div>
          <div className='pokemon-modal-dimension pokemon-height'>
            <span>HT {pkmn.height / 10} m</span>
          </div>
        </div>
      </div>
      <div className='pokemon-modal-right'>
        <h2 className='pokemon-modal-stats-title'>
          Base Stats <span className='pokemon-modal-stats-info'><FaInfoCircle /></span>
        </h2>
        <div className='pokemon-modal-stats'>
          {pkmn.stats.map(stat => {
            let statName = stat.stat.name
            statName === 'hp' && (statName = statName.toUpperCase())
            statName === 'special-attack' && (statName = 'sp.-atk')
            statName === 'special-defense' && (statName = 'sp.-def')

            return (
              <div key={uuidv4()} className='pokemon-modal-stat'>
                <span className='pokemon-modal-stat-name'>{capitalize(statName)}</span>
                <span className='pokemon-modal-stat-number'>{stat.base_stat}</span>
                <div className='pokemon-modal-progress-bar-container'>
                  <div 
                    style={{width: modalIsOpen ? stat.base_stat + 'px' : 0}} 
                    className='pokemon-modal-progress-bar' 
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Button onClick={modalCloseFn} className='pokemon-modal-close-btn'>
        <IconContext.Provider value={{size: 16}}>
          <FaTimes />
        </IconContext.Provider>
      </Button>
    </Modal>
  )
}