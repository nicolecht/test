import React, { Component } from "react";
import CustomModal from "./components/Modal";
import CatchPokemon from "./components/catchPokemon";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOwned: false,
      pokemonList: [],
      modal: false,
      catch: false,
      activePokemon: {
        pokemonId: "",
        name: "",
        level: "",
        hp: "",
        attack: "",
        defense: "",
        element: "",
        owned: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/pokemons/")
      .then((res) => this.setState({ pokemonList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  catchToggle = () => {
    this.setState({ catch: !this.state.catch });
  };

  handleSubmit = (pokemon) => {
    this.catchToggle();
    pokemon.owned = true;

    axios
      .post("http://localhost:8000/api/pokemons/", pokemon)
      .then((res) => this.refreshList());
  };

  handleDelete = (pokemon) => {
    axios
      .delete(`http://localhost:8000/api/pokemons/${pokemon.id}/`)
      .then((res) => this.refreshList());
  };

  createPokemon = () => {
    const randomID = Math.floor(Math.random() * 16) + 1;
    let randomPokemon = this.state.pokemonList.filter(
      (x) => x.pokemonId === randomID
    );

    randomPokemon[0].level = Math.floor(Math.random() * 100) + 1;

    this.setState({
      activePokemon: randomPokemon[0],
      catch: !this.state.catch,
    });
  };

  viewPokemon = (pokemon) => {
    this.setState({ activePokemon: pokemon, modal: !this.state.modal });
  };

  displayOwned = (status) => {
    if (status) {
      return this.setState({ viewOwned: true });
    }

    return this.setState({ viewOwned: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          onClick={() => this.displayOwned(true)}
          className={this.state.viewOwned ? "nav-link active" : "nav-link"}
        >
          My Pokemons
        </span>
        <span
          onClick={() => this.displayOwned(false)}
          className={this.state.viewOwned ? "nav-link" : "nav-link active"}
        >
          Unowned Pokemons
        </span>
      </div>
    );
  };

  renderPokemons = () => {
    const { viewOwned } = this.state;
    const newPokemons = this.state.pokemonList.filter(
      (pokemon) => pokemon.owned === viewOwned
    );

    return newPokemons.map((pokemon) => (
      <li
        key={pokemon.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`pokemon-name mr-2 ${
            this.state.viewOwned ? "owned-pokemon" : "unowned-pokemon"
          }`}
          name={pokemon.name}
        >
          {pokemon.name}
        </span>
        {this.state.viewOwned ? (
          <span>
            <button
              className="btn btn-info me-2"
              onClick={() => this.viewPokemon(pokemon)}
            >
              Stats
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(pokemon)}
            >
              Release
            </button>
          </span>
        ) : null}
      </li>
    ));
  };

  renderAllPokemons = () => {
    const allPokemons = this.state.pokemonList;

    return allPokemons.map((pokemon) => (
      <li
        key={pokemon.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className="pokemon-name mr-2" name={pokemon.name}>
          {pokemon.name}
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-black text-uppercase text-center my-4">
          My Pokemons
        </h1>
        <div className="row">
          {/* all pokemon */}
          <div className="col-2 mx-auto p-0">
            <div className="card p-3">
              <p className="mx-auto">All Pokemons</p>
              <ul className="list-group list-group-flush border-top-0 mx-auto">
                {this.renderAllPokemons()}
              </ul>
            </div>
          </div>
          {/* filtered pokemon */}
          <div className="col-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-warning"
                  onClick={this.createPokemon}
                >
                  Catch Pokemon
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderPokemons()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <CustomModal
            activePokemon={this.state.activePokemon}
            toggle={this.toggle}
            onSave={this.toggle}
          />
        ) : null}
        {this.state.catch ? (
          <CatchPokemon
            activePokemon={this.state.activePokemon}
            toggle={this.catchToggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
