import React, { Component } from 'react';
import {Container, Icon, Image, Divider, Header, Card, Button, Embed, List} from 'semantic-ui-react'

class MyProjects extends Component {
  render() {
    // <Image
    //   inverted
    //   size='medium'
    //   centered
    //   src='https://1.bp.blogspot.com/-vRML1Dg9ECg/UWg6fAv0EcI/AAAAAAAAFFo/3WaNG6V8j9s/s1600/zodiac1+capricorn.jpg'
    //   href='https://github.com/alec-horwitz'
    //   target='_blank'
    // />
    return (
        <Container inverted attached='bottom'>
          <Divider hidden />
          <Divider hidden />
          <Image src="https://c.pxhere.com/photos/b4/fd/tools_construct_craft_repair_equipment_create_construction_build-868966.jpg!d" size='big' rounded centered/>
          <Divider hidden />
          <Divider hidden />
          <Header as='h1' inverted>
          Here's what's in the works:
          </Header>
          <Divider hidden />
          <Card.Group centered>
            <Card >
              <Card.Content inverted>
                <Card.Header inverted>Asite/Bim Mapping Tool for New Line Structures</Card.Header>
              </Card.Content>
              <Embed
                autoplay={true}
                color='black'
                hd={false}
                id='dwQdbCcztbU'
                iframe={{
                  allowFullScreen: true,
                }}
                placeholder='./AsiteBimMappingTool.png'
                source='youtube'
              />
              <Card.Content inverted>
              <Button size='massive' href='https://github.com/alec-horwitz/AsiteBimMappingTool' target='_blank' color='black'>
                <Icon name='github' >
                  Git Repo
                </Icon>
              </ Button>
              <Container inverted textAlign='left'>
              <List bulleted>
                  <List.Item>Implemented a python script that produces a report on the differences between two CSVs</List.Item>
                  <List.Item>Compiled the tool into an executable file to run on any machine with Windows 8.1 or 10</List.Item>
                  <List.Item>Provided easy manipulation of the program’s parameters through a settings file</List.Item>
                  <List.Item>Simplified script into a one click solution and wrote a detailed ReadMe and User Manual</List.Item>
              </List>
              </Container>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content inverted>
                <Card.Header inverted>Backend server/login for a Cookie Clicker type game</Card.Header>
              </Card.Content>
              <Embed
                autoplay={true}
                color='black'
                hd={false}
                id='DH9R7XZGpZg'
                iframe={{
                  allowFullScreen: true,
                }}
                placeholder='./ClickerApp.png'
                source='youtube'
              />
              <Card.Content inverted>
              <Button size='massive' href='https://github.com/alec-horwitz/kanyeClickerPlus' target='_blank' color='black'>
                <Icon name='github' >
                  Git Repo
                </Icon>
              </ Button>
              <Container inverted textAlign='left'>
              <List bulleted>
                  <List.Item>Abstractly implemented an SQL database using Ruby Activerecord</List.Item>
                  <List.Item>Built a Ruby on Rails based web API to serve data over HTTP</List.Item>
                  <List.Item>Using Javascript and React, made a simple and mostly aesthetic login page</List.Item>
              </List>
              </Container>
              </Card.Content>

            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Project</Card.Header>
              </Card.Content>
              <Image
              size='medium'
              centered
              src='https://1.bp.blogspot.com/-vRML1Dg9ECg/UWg6fAv0EcI/AAAAAAAAFFo/3WaNG6V8j9s/s1600/zodiac1+capricorn.jpg'
              href='https://github.com/alec-horwitz'
              target='_blank'
              />
              <Card.Content inverted>
                Something About The Project Backend
                <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
                <br/>
                Something About The Project Frontend
                <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
                <br/>
                Something About The Project Video
                <Button circular size='massive' href='https://youtube.com' target='_blank' color='black' icon='youtube' />
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Project</Card.Header>
              </Card.Content>
              <Image
              size='medium'
              centered
              src='https://1.bp.blogspot.com/-vRML1Dg9ECg/UWg6fAv0EcI/AAAAAAAAFFo/3WaNG6V8j9s/s1600/zodiac1+capricorn.jpg'
              href='https://github.com/alec-horwitz'
              target='_blank'
              />
              <Card.Content inverted>
                Something About The Project Backend
                <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
                <br/>
                Something About The Project Frontend
                <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
                <br/>
                Something About The Project Video
                <Button circular size='massive' href='https://youtube.com' target='_blank' color='black' icon='youtube' />
              </Card.Content>
            </Card>
          </Card.Group>
          <Divider hidden />
          <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
          <Button circular size='massive' href='https://www.linkedin.com/in/alec-horwitz/' target='_blank' color='black' icon='linkedin' />
          <Button circular size='massive' href='https://alecthedeveloper.wordpress.com/' target='_blank' color='black' icon='wordpress' />
        </Container>
    );
  }
}

export default MyProjects;
