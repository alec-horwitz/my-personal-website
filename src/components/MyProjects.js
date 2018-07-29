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
              <Card.Content inverted>
                <Card.Header inverted>Gift.Me Crowd Funding App</Card.Header>
              </Card.Content>
              <Embed
                autoplay={true}
                color='black'
                hd={false}
                id='art1iCX_7tY'
                iframe={{
                  allowFullScreen: true,
                }}
                placeholder='./Gift.Me.Alec.png'
                source='youtube'
              />
              <Card.Content inverted>
                <Button.Group>
                  <Button size='massive' href='https://github.com/MenuDevelopment/giftmefrontend' target='_blank' color='black'>
                    <Icon name='github' >
                      Front-end
                    </Icon>
                  </ Button>
                  <Button size='massive' href='https://github.com/MenuDevelopment/giftmebackend' target='_blank' color='black'>
                    <Icon name='github' >
                      Back-end
                    </Icon>
                  </ Button>
                </Button.Group>
              <Container inverted textAlign='left'>
              <List bulleted>
                  <List.Item>Implemented full authentication and handling of new user creation</List.Item>
                  <List.Item>Implemented all styling using the React-Semantic-UI library</List.Item>
              </List>
              </Container>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content inverted>
                <Card.Header inverted>Astrology Brawl - Pokemon battle type game</Card.Header>
              </Card.Content>
              <Embed
                autoplay={true}
                color='black'
                hd={false}
                id='d3BbPrx4TdA'
                iframe={{
                  allowFullScreen: true,
                }}
                placeholder='./AstrologyBrawl.png'
                source='youtube'
              />
              <Card.Content inverted>
                <Button.Group>
                  <Button size='massive' href='https://astrology-brawl.herokuapp.com/' target='_blank' color='black'>
                    <Icon name='game' >
                      Live Site
                    </Icon>
                  </ Button>
                </Button.Group>
                <Button.Group>
                  <Button size='massive' href='https://github.com/alec-horwitz/AstrologyBrawl-Front' target='_blank' color='black'>
                    <Icon name='github' >
                      Front-end
                    </Icon>
                  </ Button>
                  <Button size='massive' href='https://github.com/alec-horwitz/AstrologyBrawl-Back' target='_blank' color='black'>
                    <Icon name='github' >
                      Back-end
                    </Icon>
                  </ Button>
                </Button.Group>
              <Container inverted textAlign='left'>
              <List bulleted>
                  <List.Item>Built a Ruby on Rails based web API to serve our data over HTTP</List.Item>
                  <List.Item>Using Javascript React with Redux, made a game with a login and a simple user interface</List.Item>
                  <List.Item>Implemented all styling using the React-Semantic-UI library</List.Item>
              </List>
              </Container>
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
