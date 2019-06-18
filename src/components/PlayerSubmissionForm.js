import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  constructor(props) {
   super(props);
   this.state = {
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
   };
  }
 ​
  onChangeHandler = (event) => {
   const field = {}
   field[event.target.name] = event.target.value;
 ​
   this.setState(field);
  }
 ​
  handleSubmit = (event) => {
   event.preventDefault();
    
   this.props.addLineCallback({
    adj1: this.state.adj1,
    noun1: this.state.noun1,
    adv: this.state.adv,
    verb: this.state.verb,
    adj2: this.state.adj2,
    noun2: this.state.noun2,
   });
 ​
   this.setState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
   });
  };
}

export default PlayerSubmissionForm;
