import React,{Component} from 'react';
import { Button,Card } from 'react-bulma-components'
class Login extends Component {
  state = {
    loading:false
  }

  handleSignIn = (e)=>{
    const { userSession } = this.props
    e.preventDefault()
    userSession.redirectToSignIn()
    this.setState({loading:true})

  }

  render(){
    const { loading } = this.state
    console.log(loading)
    return(
      <Card>
        <Card.Content>
        {
          loading ? <div> Loading ... </div>
          : <Button color="primary" onClick={this.handleSignIn}>
            SignIn by Blockstack
          </Button>
        }
        </Card.Content>
      </Card>
    )
  }

}

export default Login
