import React, { Component } from 'react';
import {Image, Container, Divider, Icon, Header, Button} from 'semantic-ui-react'

class AboutMe extends Component {
  render() {
    return (
      <Container inverted attached='bottom' textAlign="center">
        <Divider hidden />
        <Image src='./AlecH.png' size='large' rounded centered/>
        <Divider hidden />
        <Header as='h1' inverted>
        Who Am I?
        </Header>
        <Divider hidden />
        <Container textAlign="left">
          In my 6 years as a student of code, I have dabbled in machine learning with R, I’ve been exposed to the wonders of machine code, written an abstracted SQLite database and basic flask server using Python objects, written multithreaded programs with various sorting algorithms and data structures in C++, written a professional grade back-end using SQL and Ruby On Rails and a similar quality front-end using Javascript with the React Redux libraries. I’ve even written machine code. I spent 5 years as a student of computer science, 4 months as a student of full-stack web development and  have been an apprentice to a senior developer for 6 months. I am fluent in 9 computer languages and use at least 3 of them at any given moment.
          <Divider hidden />
          I am and have always been interested in Natural language processing (NLP), video game development, machine learning, and Augmented Reality (AR). As many in my generation, I am an avid gamer. Ever since playing my first Sonic game when I was 6 years old, I have been in awe of how they can transport you to another world. I see games as a means to tell stories -- but not the kind of stories were used to. Video games tell stories in such a way that it becomes the reader’s story, and every read can be just as new and exciting as the last. In a way, I see it as the ultimate storytelling medium and with AR these stories could be even more excessible. Moreover, video games have, in my experience, proven to be an excellent tool for learning. I could argue that, as an individual with dyslexia, video games taught me to read because they inspired me to read more than any physical book ever could.
          <Divider hidden />
          While my experience with augmented reality is limited, it’s definitely a topic I am excited about. If you were to ask me what the computer interface of tomorrow is, I’d say, hands down, it’s augmented reality. In fact, with the way technology is growing, I don’t see the conventional laptop having a place in the future. The computer of tomorrow would be your smartwatch, and its speakers would be your true wireless headphones with hear-through technology. Its display would be smart contact lenses. With improvements in battery technology and emerging wireless technologies, I could see this being a reality in 20-30yrs. To some, it might seem like speculation, but I see these changes happening now, and I want to be part a part of them.
          <Divider hidden />
          My first encounter with Machine Learning was in college when I was using an R library to compare works of Edgar Allan Poe to a work many scholars believe was written by him, but have not been able to prove through conventional means. The project was not as conclusive as I had hoped, but it offered me my first glimpse into the power of Machine Learning. It’s not hard to envision a world where Machine Learning is used for almost anything. If I learned anything from that project, it’s that Machine Learning is not just something I want to play with, but an invaluable tool I’m determined to master.
          <Divider hidden />
          I’ve been interested in Natural language processing (NLP) for a long time. My first encounter with NLP was when I was about 9yrs old. At the time, I was struggling to read and write due to my dyslexia. My school had me try Dragon Naturally Speaking (a well-regarded consumer grade NLP software at the time). It changed my life. I was suddenly able to read and write to my heart's content. I eventually learned to write on my own, but NLP has never stopped being a tremendously useful software to me. Like me, NLP has grown and evolved, and so has my use of it. To this day, I often use Siri to check spelling, look up definitions of words, set timers, and create calendar events. I feel this is just the beginning of its use in daily life. NLP is yet another technology helping us blur the lines between the real and the digital. By removing the need for motor skills and mechanical input it levels the playing field for people who are not  normally abled and brings us one step closer to making it possible for everyone to perform on the same level. It’s a beautiful technology.
        </Container>
        <Divider hidden />
        <Button circular size='massive' onClick={this.props.handleLearnMore}> Learn More </Button>
        <Divider hidden />
        <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
        <Button circular size='massive' href='https://www.linkedin.com/in/alec-horwitz/' target='_blank' color='black' icon='linkedin' />
        <Button circular size='massive' href='https://alecthedeveloper.wordpress.com/' target='_blank' color='black' icon='wordpress' />
      </Container>
    );
  }
}

export default AboutMe;
