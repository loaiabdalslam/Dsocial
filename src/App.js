import React,{Component} from 'react';
import './stylesheet/main.scss';
import { appConfig } from './utils/constants'
import { UserSession } from 'blockstack'
import { Button,Container } from 'react-bulma-components'
import Login from './component/Login'
import Logout from './component/Logout'
import NavbarTop from './component/Navbar'  
import  Routes from './pages/routes'

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


render(){
  const { userSession } = this.state

  return (
      <div className="App">

      <NavbarTop />

      {
        userSession.isUserSignedIn() ?
        <Routes userSession={userSession}/> :
        <Container>
        <Login userSession={userSession} />
        </Container>
      }
      </div>
    )
  }
}

export default App;
