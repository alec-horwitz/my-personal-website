import React, { Component } from 'react';
import AboutMe from './components/AboutMe';
import MyStory from './components/MyStory';
import MyProjects from './components/MyProjects';
import MyBlog from './components/MyBlog';
import ContactMe from './components/ContactMe';
import { Menu, Segment, Divider } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  state = {activeItem: 'MyStory'}
  handleItemClick = (e, a) => {
    this.setState({activeItem: a.name})
  }
  render() {
    return (
      <Segment textAlign="center" inverted fluid >
        <Menu attached='top' inverted widths={5}>
          <Menu.Item name='MyStory' active={this.state.activeItem === 'MyStory'} onClick={this.handleItemClick} inverted/>
          <Menu.Item name='AboutMe' active={this.state.activeItem === 'AboutMe'} onClick={this.handleItemClick} inverted/>
          <Menu.Item name='MyProjects' active={this.state.activeItem === 'MyProjects'} onClick={this.handleItemClick} inverted/>
          <Menu.Item name='MyBlog' href='https://alecthedeveloper.wordpress.com/' target='_blank' inverted/>
          <Menu.Item name='ContactMe' active={this.state.activeItem === 'ContactMe'} onClick={this.handleItemClick} inverted/>
        </Menu>
        {this.state.activeItem === 'MyStory' ? <MyStory /> : null}
        {this.state.activeItem === 'AboutMe' ? <AboutMe /> : null}
        {this.state.activeItem === 'MyProjects' ? <MyProjects /> : null}
        {this.state.activeItem === 'MyBlog' ? <MyBlog /> : null}
        {this.state.activeItem === 'ContactMe' ? <ContactMe /> : null}
      </Segment>
    );
  }
}

export default App;
