import React,{Component} from 'react';
import { Button } from 'react-bulma-components'
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
      <div>
          {
            loading ? <div> Loading ... </div>
          : <Button color="info" onClick={this.handleSignIn}>
            SignIn by Blockstack
          </Button>
        }
        </div>
        
    )
  }

}

export default Login
