import React,{Component} from 'react';
import { Button,Card } from 'react-bulma-components'
class Logout extends Component {

  handleSignOut = ()=>{
    const { userSession } = this.props
    userSession.signUserOut()
    window.location = '/'

  }

  render(){
    return(
      <Card>
        <Card.Content>

        <Button color="primary" onClick={this.handleSignOut}>
            SignOut
        </Button>

        </Card.Content>
      </Card>
    )
  }

}

export default Logout
