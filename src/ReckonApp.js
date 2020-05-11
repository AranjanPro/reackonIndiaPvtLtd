import React, { Component } from 'react';
import './App.css';
import LoginScreen from './Loginscreen';
import logo from './reckonlogo.png';
import backgroundImage from './Reckon.png';
import RegisterScreen from './Register.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegisterClick=this.handleRegisterClick.bind(this);
    this.state={isRegister:false};
    this.state = {isGoToLogin: false};
  }

  handleLoginClick() {
    this.setState({isGoToLogin: true});
  }
  handleRegisterClick(){
    this.setState({isRegister: true});
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this} key={"login-screen"}/>);
    loginPage.push(<RegisterScreen appContext={this} key={"register-screen"}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }

  render() {

    const isGoToLogin = this.state.isGoToLogin;
    const isRegister = this.state.isRegister;
    // const divStyle = {
    //   width: '100vw',
    //     height: '99vh',
    //   backgroundSize: 'cover'  
    // };
    if (isGoToLogin) {
      return (
        <div className="App">
          {this.state.loginscreen}
          <div>
            {this.state.loginPage} 
            {this.state.uploadScreen}
          </div>
        </div>
      );
    }else{
    return (
           <div className="App">

           <img className="App-bg" src={backgroundImage}/>  
           

                 
          <img src={logo} className="App-logo" alt="logo" />
                   
             <a
            className="App-btn btn1"
            href="https://www.linkedin.com/in/rajan-kumar-a5a61b107/"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>         
          <a 
            className="App-btn btn2"
            href="#" onClick={(event) => this.handleLoginClick(event)}>Login</a>
          
          <div>
      <a className="App-btn btn3"
       href="#" onClick={(event) => this.handleRegisterClick(event)}
      >Hire a Detective</a>

        </div>
        </div>
       
        
    );
    }
  }
}

export default App;