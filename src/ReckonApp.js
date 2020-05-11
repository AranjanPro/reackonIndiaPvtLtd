import React, { Component } from 'react';
import './App.css';
import LoginScreen from './Loginscreen';
import logo from './reckonlogo.png';
import backgroundImage from './Reckon.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isGoToLogin: false};
  }

  handleLoginClick() {
    this.setState({isGoToLogin: true});
  }

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this} key={"login-screen"}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }

  render() {

    const isGoToLogin = this.state.isGoToLogin;
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
          
       
        </div>
        
    );
    }
  }
}

export default App;