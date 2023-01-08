import React from 'react'
import {IconContext} from 'react-icons'
import {v4 as uuidv4} from 'uuid'
import {PokemonContext} from '../../context'
import {FaAngleRight, FaAngleLeft, FaHome, FaSearch} from 'react-icons/fa'
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel'
import {capitalize} from '../../services/capitalize'
import {Container, Pokemon, Button, Spinner, Box} from '../'
import 'pure-react-carousel/dist/react-carousel.es.css'
import './main.css'

export const Main = () => {
  const {
    data, 
    isPending,
    windowSize, 
    endpoint, 
    offset, 
    setEndpoint, 
    setOffset
  } = React.useContext(PokemonContext)
  const searchInput = React.useRef(null)
  const pokemonIsArray = Array.isArray(data.pokemon)
  const calcSlides = windowSize.width > 600 ? 3 : 1

  const handleOffset = (e) => {
    const prev = e.currentTarget.id === 'prev'
    const next = e.currentTarget.id === 'next'

    if (prev && offset === 0) return

    if (!endpoint.includes('type')) {
      prev && setOffset(prevOffset => prevOffset - 12)
      next && setOffset(prevOffset => prevOffset + 12)
    } else {
      prev && setOffset(prevOffset => prevOffset - 1)
      next && setOffset(prevOffset => prevOffset + 1) 
    }    
  }

  const handleTypes = (e) => {
    if (offset > 0) {
      setOffset(0)
    }
    const newEndpoint = e.target.textContent.toLowerCase()
    setEndpoint(`type/${newEndpoint}`)
  }

  const handleSearch = (e) => {
    e.preventDefault()

    const searchTerm = searchInput.current.value.toLowerCase().trim()
    setEndpoint(`pokemon/${searchTerm}`)
    searchInput.current.value = ''
  }

  const handleHome = () => {
    if (offset % 12 > 0) {
      setOffset(0)
    } 
    setEndpoint('')
  }

  return (
    <main>
      <Container>
        <div className='box-controls'>
          <nav className='box-home'>
            <IconContext.Provider value={{size: 16}}>
              <Button
                className='home-btn'
                disabled={isPending || (pokemonIsArray && !endpoint)} 
                onClick={handleHome}
              >
                <FaHome />
                {windowSize.width > 600 && (
                  <span className='box-home-text'>Home</span>
                )}
              </Button>
              <Button 
                id='prev' 
                className='prev-btn'
                disabled={isPending || !pokemonIsArray || offset === 0} 
                onClick={handleOffset}
              >
                <FaAngleLeft />
              </Button>
              <Button 
                id='next' 
                className='next-btn'
                disabled={isPending || !pokemonIsArray} 
                onClick={handleOffset}
              >
                <FaAngleRight />
              </Button>
            </IconContext.Provider>
          </nav>

          <CarouselProvider 
            naturalSlideWidth={100} 
            naturalSlideHeight={40} 
            totalSlides={data.types?.length - 2}
            step={calcSlides}
            dragEnabled={false}
            visibleSlides={calcSlides}
          >
            <IconContext.Provider value={{size: 20}}>
              <ButtonBack className='carousel-btn'><FaAngleLeft /></ButtonBack>
              <Slider className='carousel-slider'>
                {data.types?.slice(0, data.types?.length - 2).map((type, i) => (
                  <Slide key={uuidv4()} index={i} innerClassName='carousel-slide'>
                    <div className={`carousel-slide-content ${type.name}`} onClick={handleTypes}>
                      {capitalize(type.name)}
                    </div>
                  </Slide>
                ))}
              </Slider>
              <ButtonNext className='carousel-btn'><FaAngleRight /></ButtonNext>
            </IconContext.Provider>
          </CarouselProvider>

          <form className='box-form' onSubmit={handleSearch}>
            <IconContext.Provider value={{size: 16}}>
              <input 
                className='box-form-input' 
                placeholder='Search Pokémon by name or number'
                ref={searchInput} 
                required
              />
              <Button className='box-form-btn' type='submit'><FaSearch /></Button>
            </IconContext.Provider>
          </form>
        </div>
      
        <Box>
          {isPending ? <Spinner /> : (
            pokemonIsArray 
              ? data.pokemon.map(pkmn => <Pokemon key={uuidv4()} pkmn={pkmn} />)
              : data.pokemon && <Pokemon pkmn={data.pokemon} />
          )}
        </Box>
      </Container>
    </main>
  )
}
