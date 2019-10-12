import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
    Heading,
    Button,
    Card,
    Content
    
} from 'react-bulma-components'
import PropTypes from 'prop-types'

class AdminUserName extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired
    }

    handleCreatePost = ()=>{
        const {history,username}=this.props
        history.push(`/admin/${username}/posts/create`)
    }

    render() {
       const {username} = this.props
       
        return (
            <Card>
                <Card.Content>
                    <Content>
                        <Heading>
                            Hello {username}
                        </Heading>
                        <Button color="info" onClick={this.handleCreatePost}>
                            Create Post
                        </Button>

                    </Content>
                </Card.Content>
            </Card>

        )
    }

}

export default withRouter(AdminUserName)