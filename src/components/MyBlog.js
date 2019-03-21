import React, { Component } from 'react';
import {Container, Divider, Image, Button} from 'semantic-ui-react'

class MyBlog extends Component {
  render() {
    return (
      <div>
        <iframe width="100%" height="600vh" src='https://alecthedeveloper.wordpress.com/'/>
        <Divider hidden />
        <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
        <Button circular size='massive' href='https://www.linkedin.com/in/alec-horwitz/' target='_blank' color='black' icon='linkedin' />
        <Button circular size='massive' href='https://alecthedeveloper.wordpress.com/' target='_blank' color='black' icon='wordpress' />
      </div>
    );
  }
}

export default MyBlog;
