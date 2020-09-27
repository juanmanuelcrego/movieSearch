import React, { Fragment, useState, useEffect } from "react";
// Importo Bootstrap
import { Container, Row, Col } from "react-bootstrap";
// Importo Emotion
import styled from "@emotion/styled";
// Importo el componente Search
import Search from "./components/Search";
// Importo el componente Movie
import Movie from "./components/Movie";
// Importo Alert de Bootstrap
import { Alert } from "react-bootstrap";

import LogoMovie from './assets/logo.png'

const Logo = styled.img`
  max-width: 250px;
`

function App() {
  // State de busqueda de peliculas
  const [movie, setMovie] = useState({
    pelicula: "",
  });

  // Extraigo con destructuring pelicula
  const { pelicula } = movie;

  // State del estado de la busqueda
  const [search, setSearch] = useState(false);

  // State para el listado
  const [listMovie, setListMovie] = useState({});

  // State para controlar los errores de busqueda
  const [error, setError] = useState(false);

  // State para controlar la visualización del listado
  const [list, setList] = useState(false);

  // useEffect para controlar cambios en el componente
  useEffect(() => {
    const handleApi = async () => {
      if (search) {
        const apiKey = "apikey=dc1f5564";
        const url = `http://www.omdbapi.com/?t=${pelicula}&${apiKey}`;

        const api = await fetch(url);
        const movies = await api.json();
        setSearch(false);
        setListMovie(movies);
        console.log(movies.Response);
        if (movies.Response === "False") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    handleApi();
  }, [search]);

  return (
    <Fragment>
      <Container className="text-center" fluid>
        <Row>
          <Col>
            <Logo src={LogoMovie}></Logo>
            <h3>Buscador de películas</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Search movie={movie} setMovie={setMovie} setList={setList} setSearch={setSearch} />
            {error ? (
              <Alert variant="warning">La película que buscas no existe</Alert>
            ) : null}
            {list ? <Movie listMovie={listMovie} /> : null}
          </Col>
        </Row>
        <Row>
          <Col>
              Powered By <a href='https://linktr.ee/jcrego' target='_blank' rel="noopener noreferrer">jCrego</a>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
