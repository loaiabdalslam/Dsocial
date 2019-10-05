import React, { Component } from 'react';
import { Button, Card, Navbar } from 'react-bulma-components'
import Login from './Login'
import Logout from './Logout'
import { appConfig } from '../utils/constants'
import { UserSession } from 'blockstack'

class NavbarTop extends Component {
  state = {
    userSession: new UserSession({ appConfig })
  }

  componentDidMount = async () => {
    const { userSession } = this.state
    if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      const userData = await userSession.handlePendingSignIn()

      if (!userData.username) {
        throw new Error('This App Require a Username !')
      }

      window.location = '/'

      console.log(userData)
    }
  }



  render() {
    const { userSession } = this.state

    return (
      <Navbar
        color='info'
        active={true}
      >
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />

        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item>Second</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">

            {
              userSession.isUserSignedIn() ?
                <React.Fragment>
                  <Navbar.Item>
                    Posts
               </Navbar.Item>
                  <Navbar.Item>
                    Profile
           </Navbar.Item>


                  <Navbar.Item>
                    <Logout userSession={userSession} />
                  </Navbar.Item>

                </React.Fragment>
                :
                <React.Fragment>

                  <Navbar.Item>

                    <Login userSession={userSession} />
                  </Navbar.Item>

                </React.Fragment>




            }
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )

  }

}

export default NavbarTop;
