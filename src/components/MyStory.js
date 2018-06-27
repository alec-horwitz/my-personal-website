import React, { Component } from 'react';
import {Container, Image, Divider, Header, Button} from 'semantic-ui-react'

class MyStory extends Component {
  render() {
    return (
        <Container inverted attached='bottom'>
          <Divider hidden />
          <Image src='./AlecH.png' size='large' rounded centered/>
          <Divider hidden />
          <Header as='h1' inverted>
          This is my Story
          </Header>
          <Divider hidden />
          <Container textAlign="left">
            Growing up with language based learning disabilities(LD) compelled me to learn creative and effective ways of communicating. Bouncing around to several different schools exposed my to unique perspectives on learning and taught me that there are a lot of different ways to solve problems. My learning experiences put me in touch with who I am and what I needed to do to better myself and be my own best advocate. Often, I find myself in leadership roles because I’m not afraid to vocalize my questions and concerns and take on major challenges. I believe that my greatest strengths evolved from my learning struggles. For example in college, my professor remarked on my ability to write in comparison to my peers. My fellow students have told me I should be a teacher because I am so good at explaining things. These things may seem at odds with my LDs but from a young age, I worked hard to make sure that where I lacked in speed I more than made up for in quality.
            <Divider hidden />
            Though my LD played a role in shaping who I am, my passions have also made a major contribution. Some interests of mine include traveling, kayaking, hiking, running, walking, playing video games, painting, making sculptures and learning new things within any and every discipline. Some of the challenges I have faced during my adventures include getting lost on a kayak trip in Vermont, camping under extreme conditions in Greenland and arduous treks on the Appalachian trail.
            <Divider hidden />
            Although I am proud of my artwork, I see it more as a vehicle for learning about myself and expanding my mind than something I want to display. In high school I explored multimedia art that included painting, sculpture, audio and video in the same piece. I love the meditative element of making art and just getting lost in the process. When I’m creating a work, the most thrilling moment for me is when I blend together elements from multiple worlds into a cohesive narrative. In those moments, I find that I’ve told not just one, but sometimes dozens of stories at once.
            <Divider hidden />
            Code has structure and logic and, yes, a creative aspect. These have always been strengths for me. However my experiences have given me a perspective on coding that i believe  sets me apart from my peers. I understand the importance of learning something thoroughly and well before building on that foundation. I have also honed an ability to think outside of the box which allows me to be responsive to the needs and concerns of my future clients. I am excited to pursue a career in coding in which I can apply my skills, experiences and passions.
          </Container>
          <Divider hidden />
          <Button circular size='massive' href='https://github.com/alec-horwitz' target='_blank' color='black' icon='github' />
          <Button circular size='massive' href='https://www.linkedin.com/in/alec-horwitz/' target='_blank' color='black' icon='linkedin' />
          <Button circular size='massive' href='https://alecthedeveloper.wordpress.com/' target='_blank' color='black' icon='wordpress' />
        </Container>
    );
  }
}

export default MyStory;
