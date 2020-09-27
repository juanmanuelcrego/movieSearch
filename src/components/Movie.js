import React, { Fragment } from "react";
// Importo Emotion
import styled from "@emotion/styled";
import PropTypes from "prop-types";

// Creo el componente Contenedor con Emotion
const Contenedor = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;
  align-items: center;
`;
const ListadoDiv = styled.div`
  display: flex;
  flex-flow: row;
  max-width: 500px;
`;

const Listado = styled.ul`
  list-style: none;
  text-align: left;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Imagen = styled.img`
  max-height: 300px;
  border: 02px solid #333;
  border-radius: 02px;
`;

const Movie = ({ listMovie }) => {
  return (
    <Fragment>
      <Contenedor>
        <h4>
          {listMovie.Title}({listMovie.Year}) - {listMovie.Director}
        </h4>
        <ListadoDiv>
          <Listado>
            <li>
              <Label>Género:</Label> {listMovie.Genre}{" "}
            </li>
            <li>
              <Label>Idioma:</Label> {listMovie.Language}
            </li>
            <li>
              <Label>Reparto:</Label> {listMovie.Actors}{" "}
            </li>
            <li>
              <Label>Premios y nominaciones:</Label> {listMovie.Awards}
            </li>
            <li>
              <Label>Sinopsis:</Label> {listMovie.Plot}
            </li>
            <li>
              <Label>Puntuación IMDb:</Label> {listMovie.imdbRating}
            </li>
          </Listado>
          <Imagen src={listMovie.Poster}></Imagen>
        </ListadoDiv>
      </Contenedor>
    </Fragment>
  );
};

Movie.propTypes = {
    listMovie: PropTypes.object.isRequired
}

export default Movie;
