import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Input from './Components/Input';
import Button from './Components/Button';

class App extends Component {
  state = {
    username: '',
    passWordInput: '',
  };

  onInputChange = (event, name) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { username, passWordInput } = this.state;
    const isDisabled = username.length < 4 || passWordInput.length < 4;
    console.log(username.length);
    return (
      <div className="login-form">
        <form>
          <h2>Login Form</h2>
          <Input
            value={this.state.username.value}
            type="text"
            label="Username"
            onChange={event => this.onInputChange(event, 'username')}
          />
          <Input
            value={this.state.passWordInput.value}
            type="password"
            label="Password"
            onChange={event => this.onInputChange(event, 'passWordInput')}
          />

          <Button disabled={isDisabled} />

          <div>
            <p>
              Button is disabled until username and password exceed 3 characters
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
