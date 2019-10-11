import React,{Component} from 'react';
import { Switch,Route } from 'react-router-dom'
import PropTypes from 'prop-types'

class AdminUsernamePostsRoutes extends Component {

    propTypes = {
        match: PropTypes.object.isRequired
    }

  render(){
    const { username } = this.props.match.params
    console.log(this.props.match.url)
    console.log(this.props.match)
    return(

    <Switch>

          <Route
           
          path={`${this.props.match.url}`}
          render={()=> <div> Add posts from here </div>}
          />
        <Route
         
        path={`${this.props.match.url}/create`}
        render={()=> <div> Add posts from here </div>}
        />

        <Route
        
        path={`${this.props.match.url}/:post_id`}
        render={()=> <div>edit posts from here</div>}
        />

        <Route
         
        path={`${this.props.match.url}/post_id/edit`}
        render={()=> <div>remove posts from here</div>}
        />


  
        
    </Switch>

    )
  }

}

export default AdminUsernamePostsRoutes
