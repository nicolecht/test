import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePokemon: this.props.activePokemon,
    };
  }

  render() {
    const { toggle, onSave} = this.props;

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
          <p>Captured: {(this.state.activePokemon.owned === true) ? "Yes" : "No"}</p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activePokemon)}
          >
            Return
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}