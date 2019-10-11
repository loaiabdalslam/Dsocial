import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import AdminUsernamePostsRoutes from './posts/routes'
class ProfileRoute extends Component {

    propTypes = {
        match: PropTypes.object.isRequired
    }

  render(){
    const { username } = this.props.match.params
    console.log(this.props.match)
    return(

    <Switch>
        <Route
        exact 
        path={this.props.match.url}
        render={()=> <div>Hello ... {username}</div>}
        />

        <Route
        
        path={`${this.props.match.url}/posts`}
        render={({ match })=> <AdminUsernamePostsRoutes match={match} />}
        />
        
    </Switch>

    )
  }

}

export default ProfileRoute
