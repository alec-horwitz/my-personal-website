import React, { Component } from 'react';
import AboutMe from './components/AboutMe';
import MyStory from './components/MyStory';
import MyProjects from './components/MyProjects';
import MyBlog from './components/MyBlog';
import ContactMe from './components/ContactMe';
import { Menu, Segment, Divider } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  state = {activeItem: 'MyProjects'}
  handleItemClick = (e, a) => {
    this.setState({activeItem: a.name})
  }
  handleLearnMore = () => {
    this.setState({activeItem: 'MyStory'})
  }
  render() {
    return (
      <Segment textAlign="center" inverted fluid >
        <Menu attached='top' inverted widths={4}>
          <Menu.Item name='AboutMe' active={this.state.activeItem === 'AboutMe'} onClick={this.handleItemClick} inverted/>
          <Menu.Item name='MyProjects' active={this.state.activeItem === 'MyProjects'} onClick={this.handleItemClick} inverted/>
          <Menu.Item name='MyBlog' active={this.state.activeItem === 'MyBlog'} onClick={this.handleItemClick} inverted/>
          <Menu.Item name='ContactMe' active={this.state.activeItem === 'ContactMe'} onClick={this.handleItemClick} inverted/>
        </Menu>
        {this.state.activeItem === 'AboutMe' ? <AboutMe handleLearnMore={this.handleLearnMore} /> : null}
        {this.state.activeItem === 'MyProjects' ? <MyProjects /> : null}
        {this.state.activeItem === 'MyBlog' ? <MyBlog /> : null}
        {this.state.activeItem === 'ContactMe' ? <ContactMe /> : null}
        {this.state.activeItem === 'MyStory' ? <MyStory /> : null}
      </Segment>
    );
  }
}

export default App;
