import React, { Component } from 'react';
import { Button } from 'react-bulma-components'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserProvider from '../providers/UserProvider';
import ProfileRoute from './admin/profile'
import _ from 'lodash'
class Rotues extends Component {

  state = { user: {} }

  componentDidMount() {
    const { userSession } = this.props
    const user = userSession.loadUserData()
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    const { userSession } = this.props

    if (_.isEmpty(user)) return <div>There is No User Data Please Login ...</div>

    return (
      <UserProvider userSession={userSession}>
        <Switch>

          <Route
            exact
            path="/"
            render={() => <div>Root Route</div>}>

          </Route>

          <Route
            
            path="/admin/:username"
            render={({ match }) => <ProfileRoute match={match} />}>

          </Route>

          
        </Switch>
      </UserProvider>

    )
  }

}

export default Rotues
