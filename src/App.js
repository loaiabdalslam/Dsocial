import React,{Component} from 'react';
import './stylesheet/main.scss';
import { appConfig } from './utils/constants'
import { UserSession } from 'blockstack'
import { Button } from 'react-bulma-components'
class App extends Component {
  state = {
    userSession : new UserSession({appConfig})
  }

  componentDidMount = async ()=>{
    const { userSession } = this.state
    if(!userSession.isUserSignedIn() && userSession.isSignInPending()){
      const userData = await userSession.handlePendingSignIn()

      if(!userData.username){
        throw new Error('This App Require a Username !')
      }

      window.location = '/'

      console.log(userData)
    }
  }

  handleSignOut = ()=>{
    const { userSession } = this.state
    userSession.signUserOut()
    window.location = '/'

  }

  handleSignIn = ()=>{
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
