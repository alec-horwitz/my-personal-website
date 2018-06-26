import React, { Component } from 'react';
import {Container, Divider, Image, Button} from 'semantic-ui-react'

class MyBlog extends Component {
  render() {
    return (
        <Container inverted attached='bottom'>
          <Divider hidden />
          <Image src='./typewritter.jpg' size='big' rounded centered/>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/8/85/Arrow_top_svg.svg" size='tiny' rounded centered/>
          Click the typewritter to see my blog
          <Divider hidden />
          <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
          <Button circular size='massive' href='https://www.linkedin.com/in/alec-horwitz/' target='_blank' color='black' icon='linkedin' />
          <Button circular size='massive' href='https://alecthedeveloper.wordpress.com/' target='_blank' color='black' icon='wordpress' />
        </Container>
    );
  }
}

export default MyBlog;
