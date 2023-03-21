import axios from "axios";
import MovieDetail from "../models/MovieDetail";

const getUpComingMovies = () => {
  return axios
    .get<MovieDetail[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-coming`)
    .then((response) => response.data);
};

const getMovies = (movieApi: string) => {
  return axios
    .get<MovieDetail[]>(`${process.env.REACT_APP_API_BASE_URL}/${movieApi}`)
    .then((response) => response.data);
};

const getMovieById = (movieApi: string, id: string) => {
  return axios
    .get<MovieDetail>(`${process.env.REACT_APP_API_BASE_URL}/${movieApi}/${id}`)
    .then((response) => response.data);
};

const getMovieByTitle = (movieApi: string, title: string) => {
  return axios
    .get<MovieDetail[]>(`${process.env.REACT_APP_API_BASE_URL}/${movieApi}`)
    .then((response) => response.data.find((x) => x.title === title));
};

const searchMovieByTitle = (movieApi: string, title: string) => {
  return axios
    .get<MovieDetail[]>(`${process.env.REACT_APP_API_BASE_URL}/${movieApi}`)
    .then((response) =>
      response.data.filter((x) =>
        x.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      )
    );
};

const addFavouriteMovie = (favMovie: Omit<MovieDetail, "id">) => {
  return axios
    .post<MovieDetail[]>(
      `${process.env.REACT_APP_API_BASE_URL}/favourit`,
      favMovie,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response.data);
};

const removeFavouriteMovie = (id: string) => {
  return axios
    .delete<MovieDetail>(
      `${process.env.REACT_APP_API_BASE_URL}/favourit/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response.data);
};

export {
  getUpComingMovies,
  getMovies,
  addFavouriteMovie,
  getMovieById,
  removeFavouriteMovie,
  getMovieByTitle,
  searchMovieByTitle,
};
