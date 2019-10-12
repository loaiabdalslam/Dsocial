import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import AdminUsernamePostsRoutes from './posts/routes'
class ProfileRoute extends Component {

    staticpropTypes = {
        match: PropTypes.object.isRequired
    }

  render(){
    const { username } = this.props.match.params
    console.log('From Profile Route:',username)
    return(

    <Switch>
        <Route
        exact 
        path={this.props.match.url}
        render={()=> <div>Hello ... {username}</div>}
        />

        <Route
        exact
        path={`${this.props.match.url}/posts`}
        render={({ match })=> <AdminUsernamePostsRoutes match={match} username={this.props.match.params.username}/>}
        />
        
    </Switch>

    )
  }

}

export default ProfileRoute
