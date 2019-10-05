import React,{Component} from 'react';
import { Button } from 'react-bulma-components'
class Logout extends Component {

  handleSignOut = ()=>{
    const { userSession } = this.props
    userSession.signUserOut()
    window.location = '/'

  }

  render(){

    return(

        <Button color="info" onClick={this.handleSignOut}>
            SignOut
        </Button>

    )
  }

}

export default Logout
