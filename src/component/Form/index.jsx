import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import {
  Control,
  Field,
  Input,
  Label,
  Textarea,
} from 'react-bulma-components/lib/components/form'
import {
  Button,
  Card,
  Content,
} from 'react-bulma-components'
import { POST_FILENAME } from '../../utils/constants'
import generateUUID from '../../utils/generateUUID'

class PostForm extends Component {
  constructor(props) {
    super(props)

  }



  state = {
    title:'',
    description:''
  }

  
 
  render() {
    return (
      <Card>
        <Card.Content>
          <Content>
            <form  className="post-form">
              <Field>
                <Label>Title</Label>
                <Control>
                  <Input
                    name="title"
                    placeholder="Title of the Post"
                  
                  />
                </Control>
              </Field>
              <Field>
                <Label>Post Description</Label>
                <Control>
                  <Textarea
                    name="description"
                    
                    placeholder="Create Posts here!"
                    rows={20}
                    
                  />
                </Control>
              </Field>
              <Field kind="group">
                 <Control>
                   <Button>Cancel</Button>
                 </Control>
                 <Control>
                   <Button
                     color="link"
                     type="submit"
                    >
                      Submit
                  </Button>
                 </Control>
               </Field>
            </form>
          </Content>
        </Card.Content>
      </Card>
    )
  }
}

export default withRouter(PostForm)