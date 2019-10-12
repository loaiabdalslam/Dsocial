import React, { Component } from 'react';
import { Switch, Route,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import AdminUserName from './create/AdminUserName'
import { MyContext } from '../../../providers/UserProvider'

class AdminUsernamePostsRoutes extends Component {

  propTypes = {
    match: PropTypes.object.isRequired,
    username:PropTypes.string.isRequired
  }

  render() {
    console.log(this.props.username)
    const username = this.props.username
    console.log('That From AdminUsernamePostsRoute as Username :', username)
    return (

      <Switch>

        <Route
          
          path={`${this.props.match.url}`}
          render={() =>
            <AdminUserName username={username} />
          }
        />
        <Route

          path={`${this.props.match.url}/create`}
          render={() => <div> Add posts from here </div>}
        />

        <Route

          path={`${this.props.match.url}/:post_id`}
          render={() => <div>edit posts from here</div>}
        />

        <Route

          path={`${this.props.match.url}/post_id/edit`}
          render={() => <div>remove posts from here</div>}
        />




      </Switch>

    )
  }

}

export default withRouter(AdminUsernamePostsRoutes)
AdminUsernamePostsRoutes.contextType = MyContext