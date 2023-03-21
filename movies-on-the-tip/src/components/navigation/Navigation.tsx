import React, { useState, useEffect } from "react";
import { Container, Tab, Form, Nav, InputGroup } from "react-bootstrap";
import MovieList from "../movies/MovieList";
import { MOVIE_API } from "../../GlobalConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './Navigation.css';

type Props = {
  contextHandler: Function;
};

const Navigation = ({ contextHandler }: Props) => {
  const [key, setKey] = useState<MOVIE_API>("movies-in-theaters");
  const [searchValue, setSearchValue] = useState("");

  const onSelectedTabChange = (eventKey: any) => {
    setKey(eventKey);
    contextHandler(eventKey);
  };

  const searchMovie = (evnt: any) => {
    const searchVal = evnt.target.value;
    setSearchValue(searchVal);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <Container fluid >
      <Tab.Container
        defaultActiveKey="movies-in-theaters"
        onSelect={onSelectedTabChange}
      >
        <Nav variant="tabs" className="navItems" style={{backgroundColor:'rgb(10, 180, 230)'}}>
          <Nav.Item >
            <Nav.Link eventKey="movies-in-theaters" className="navigation-tab" style={{color:'black'}}>
              <b>Movies in Theaters</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="movies-coming" className="navigation-tab" style={{color:'black'}}>
              <b>Coming Soon</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="top-rated-movies" className="navigation-tab" style={{color:'black'}}>
              <b>Top Rated Movies</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="top-rated-india" className="navigation-tab" style={{color:'black'}}>
              <b>Top Rated Indian Movies</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="favourit" className="navigation-tab" style={{color:'black'}}>
              <b>Favourites</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Form
              className="d-flex searchStyle"
              style={{ position: "absolute", right: "1%", width: "20vw", top:'0.3%' }}
            >
              <InputGroup className="mb-3">
                <Form.Control
                  type="search"
                  id="search-box"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchValue}
                  onChange={searchMovie}
                />
                <InputGroup.Text
                  id="search-icon"
                  className="bg-primary text-white"
                >
                  <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Nav.Item>
        </Nav>

        <Tab.Content className="">
          {
            <>
              <Tab.Pane eventKey="movies-in-theaters">
                {key === "movies-in-theaters" && (
                  <MovieList showRemove={false} searchValue={searchValue} />
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="movies-coming">
                {key.toString() === "movies-coming" && (
                  <MovieList showRemove={false} searchValue={searchValue} />
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="top-rated-movies">
                {key.toString() === "top-rated-movies" && (
                  <MovieList showRemove={false} searchValue={searchValue} />
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="top-rated-india">
                {key.toString() === "top-rated-india" && (
                  <MovieList showRemove={false} searchValue={searchValue} />
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="favourit">
                {key.toString() === "favourit" && (
                  <MovieList showRemove={true} searchValue={searchValue} />
                )}
              </Tab.Pane>
            </>
          }
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Navigation;
