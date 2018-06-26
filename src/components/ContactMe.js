import React, { Component } from 'react';
import {Container, Image, Divider, Header, Button} from 'semantic-ui-react'

class Contact extends Component {
  render() {
    return (
        <Container inverted attached='bottom'>
          <Divider hidden />
          <Image src="./Contact.png" size='large' rounded centered />
          <Divider hidden />
          <Header as='h1' inverted>
          How to contact me:
          </Header>
          contactme@alec.4witz.net
          <Divider hidden />
          <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
          <Button circular size='massive' href='https://www.linkedin.com/in/alec-horwitz/' target='_blank' color='black' icon='linkedin' />
          <Button circular size='massive' href='https://alecthedeveloper.wordpress.com/' target='_blank' color='black' icon='wordpress' />
        </Container>
    );
  }
}

export default Contact;
