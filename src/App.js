import React,{Component} from 'react';
import './stylesheet/main.scss';
import { appConfig } from './utils/constants'
import { UserSession } from 'blockstack'
import { Button } from 'react-bulma-components'
class App extends Component {
  state = {
    userSession : new UserSession({appConfig})
  }

  handleSignOut = ()=>{
    console.log('Signout')
  }

  handleSignIn = ()=>{
    console.log('Sign in')
    const { userSession } = this.state
    userSession.redirectToSignIn()
  }
render(){
  const { userSession } = this.state

  return (
      <div className="App">
      {
        userSession.isUserSignedIn() ?
        <Button color="primary" onClick={this.handleSignOut}>
          Signout
        </Button>
        :
        <Button color="primary" onClick={this.handleSignIn}>
          Sign In
        </Button>
      }

      </div>
    )
  }
}

export default App;
