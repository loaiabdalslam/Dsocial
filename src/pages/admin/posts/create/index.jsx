import React, { Component } from 'react';
import { Switch, Route,withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MyContext } from '../../../../providers/UserProvider'
import PostForm from './form/index'
class AdminCreatePost extends Component {


  render() {
    const { userSession,username} = this.context.state.currentUser
    return (

        <PostForm 
        userSession={userSession}
        username={username}
        
        />

    )
  }

}

export default withRouter(AdminCreatePost)
AdminCreatePost.contextType = MyContext