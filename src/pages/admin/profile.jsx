import React,{Component} from 'react';
import { Button } from 'react-bulma-components'
import {Switch,Route,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

class ProfileRoute extends Component {

    propTypes = {
        match: PropTypes.object.isRequired
    }

  render(){
    const { username } = this.props.match.params

    return(

    <Switch>
        <Route
        exact 
        path={`/admin/${username}`}
        render={()=> <div>Hello ... {username}</div>}
        />
        
    </Switch>

    )
  }

}

export default ProfileRoute
