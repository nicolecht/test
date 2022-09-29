import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";

export default class CatchPokemon extends Component {
  static defaultProps = {
    secret: Math.floor(Math.random() * 10) + 1,
  };
  constructor(props) {
    super(props);
    this.state = {
      activePokemon: this.props.activePokemon,
      term: "",
      correct: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  Result = () => {
    let result;
    let term = this.state.term;
    let secretNum = this.props.secret;

    if (term) {
      if (secretNum > term) {
        result = "You guessed too low";
      } else if (secretNum < term) {
        result = "You guessed too high";
      } else {
        result = "Correct! Pokemon Captured";
      }
    }
    return <p>{result}</p>;
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Pokemon</ModalHeader>
        <ModalBody>
          <p>Name: {this.state.activePokemon.name}</p>
          <p>Level: {this.state.activePokemon.level}</p>
          <p>Hp: {this.state.activePokemon.hp}</p>
          <p>Attack: {this.state.activePokemon.attack}</p>
          <p>Defense: {this.state.activePokemon.defense}</p>
          <p>Element: {this.state.activePokemon.element}</p>
          <p>
            Captured before:{" "}
            {this.state.activePokemon.owned === true ? "Yes" : "No"}
          </p>
          <Label htmlFor="term">Guess the number to (1-10)</Label>
          <Input
            type="text"
            id="term"
            name="term"
            value={this.state.term}
            onChange={this.handleChange}
          />
          {this.Result()}
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activePokemon)}
          >
            Catch
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
