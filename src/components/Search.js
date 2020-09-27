import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'
import {Alert} from 'react-bootstrap'
import PropTypes from 'prop-types'


const Input = styled.input`
    border: 01px solid #ddd;
    border-radius: 03px;
    border-bottom: 01px solid #ccc;
    padding: 05px;
    color: #333;
    margin: 03px;
`

// Creo el componente Boton con Emotion
const Boton = styled.button`
  background: #f7971e;
  background: -webkit-linear-gradient(to top, #f7971e, #ffd200);
  background: linear-gradient(to top, #f7971e, #ffd200);
  color: #fff;
  padding: 08px;
  border: 0;
  border-radius: 03px;
`;

const Search = ({movie, setMovie, setSearch, setList}) => {

      const {pelicula} = movie

      const handleChange = e => {
          setMovie({
              ...movie,
              [e.target.name] : e.target.value
          })
      }

    //   Error para la validación
    const [error, setError] = useState(false)

      const handleSubmit = e => {
          e.preventDefault()

        //   Validación
        if(pelicula.trim() === '') {
            setError(true)
            return
        }

        setError(false)

        // Lo paso al componente App
        setSearch(true)

        // Coloco setList como true para que se vea en pantalla
        setList(true)
      }

    return(
        <Fragment>
            <form
                onSubmit={handleSubmit}
            >
            <Input 
            placeholder='Nombre de la peli...'
            value={pelicula}
            name='pelicula'
            id='name'
            onChange={handleChange}
            />

            {error ? <Alert variant='warning'>Completa el campo de búsqueda</Alert> : null }

            <Boton type='submit'>Buscar</Boton>
            </form>
        </Fragment>
    )

}

Search.propTypes = {
    movie: PropTypes.object.isRequired,
    setMovie: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired,
    setList: PropTypes.func.isRequired
}

export default Search