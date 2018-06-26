import React, { Component } from 'react';
import {Image, Container, Divider, Icon, Header, Button} from 'semantic-ui-react'

class AboutMe extends Component {
  render() {
    return (
      <Container inverted attached='bottom' textAlign="center">
        <Divider hidden />
        <Image src='./alecwordcloudinvisable1-1.png' size='large' rounded centered/>
        <Divider hidden />
        <Header as='h1' inverted>
        Who Am I?
        </Header>
        <Divider hidden />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lectus ante. Maecenas vitae tellus non lorem elementum vehicula. Cras ut enim et sem ultricies interdum faucibus in sem. Mauris efficitur leo et diam gravida venenatis. Curabitur velit felis, egestas sed dignissim sed, ornare a libero. Donec nec pulvinar massa. Vivamus elementum metus nec nisi tincidunt porta. Fusce et ullamcorper enim, non gravida diam. Suspendisse sit amet pretium justo. Sed ultrices et eros id porttitor. Cras ac lorem quis nunc molestie gravida.
        <Divider hidden />
        Ut vestibulum mauris sit amet est sodales, vel sodales orci congue. Nulla lacus risus, elementum sed nunc vel, porta dapibus risus. Ut at dui fringilla, vestibulum turpis nec, placerat nulla. Quisque quis diam suscipit, aliquam sem vel, pulvinar felis. Nulla dapibus turpis vel massa pharetra, in finibus massa maximus. Aliquam sed metus semper, blandit massa ac, venenatis purus. Sed maximus, velit non pretium hendrerit, metus nisl efficitur ante, aliquam fringilla ligula sem at elit. Quisque semper blandit leo id dapibus. Proin eu tortor nunc. Duis lacinia bibendum mauris nec ultrices. Duis iaculis molestie magna eget iaculis.
        <Divider hidden />
        <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
        <Button circular size='massive' href='https://www.linkedin.com/in/alec-horwitz/' target='_blank' color='black' icon='linkedin' />
        <Button circular size='massive' href='https://alecthedeveloper.wordpress.com/' target='_blank' color='black' icon='wordpress' />
      </Container>
    );
  }
}

export default AboutMe;
