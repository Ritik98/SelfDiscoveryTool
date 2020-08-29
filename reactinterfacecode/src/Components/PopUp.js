import React,{Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class PopUp extends Component{
    render(){
        return (
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalHeader><img src={this.props.logo} alt={this.props.title} height="70" width="70" />{this.props.title}</ModalHeader>
          <ModalBody>{this.props.msg}</ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.props.toggle}>OK</Button>
          </ModalFooter>
        </Modal>
        );
    }
}

export default PopUp;