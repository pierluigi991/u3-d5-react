import { Component } from "react";
import Genres from "./Genres";
import Films from "./Films";
import { Alert, Spinner } from "react-bootstrap";

class Home extends Component {
  state = {
    HarryPotter: [],
    StarWars: [],
    LordOfTheRing: [],
    error: false,
    errorMsg: "",
    isLoading: true,
  };

  request = async (endpoint, stato) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        this.setState({ [stato]: data.Search, isLoading: false });
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message, isLoading: false });
    }
  };

  componentDidMount() {
    this.request("http://www.omdbapi.com/?i=tt3896198&apikey=4e17b102&s=harry%20potter&type=movie", "HarryPotter");
    this.request("http://www.omdbapi.com/?i=tt3896198&apikey=4e17b102&s=star%20wars&type=movie", "StarWars");
    this.request(
      "http://www.omdbapi.com/?i=tt3896198&apikey=4e17b102&s=lord%20of%20the%20rings&type=movie",
      "LordOfTheRing"
    );
  }
  render() {
    return (
      <div className="container-fluid">
        <Genres />
        <div className="movie-riga mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Harry Potter</h5>
          <div id="trending-now">
            <div className="movie-row">
              {this.state.isLoading && !this.state.error && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              {this.state.error && !this.state.isLoading && (
                <Alert variant="danger">
                  {this.state.errorMsg ? this.state.errorMsg : "Errore nel reperire i dati"}
                </Alert>
              )}

              <div className="row g-1 flex-nowrap films py-2">
                {this.state.HarryPotter.map((movie) => (
                  <Films key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-riga mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Star wars</h5>
          <div id="trending-now">
            {this.state.isLoading && !this.state.error && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {this.state.error && !this.state.isLoading && (
              <Alert variant="danger">{this.state.errorMsg ? this.state.errorMsg : "Errore nel reperire i dati"}</Alert>
            )}
            <div className="movie-row">
              <div className="row g-1 flex-nowrap films py-2">
                {this.state.StarWars.map((movie) => (
                  <Films key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-riga mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Lord of the rings</h5>
          <div id="trending-now">
            <div className="movie-row">
              {this.state.isLoading && !this.state.error && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              {this.state.error && !this.state.isLoading && (
                <Alert variant="danger">
                  {this.state.errorMsg ? this.state.errorMsg : "Errore nel reperire i dati"}
                </Alert>
              )}
              <div className="row g-1 flex-nowrap films py-2">
                {this.state.LordOfTheRing.map((movie) => (
                  <Films key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
