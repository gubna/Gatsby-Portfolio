import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Steven Agri.
        </BigTitle>
        <Subtitle>& This is my portfolio</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Joy Of Vacations"
            link="https://www.joyofvacations.com/"
            bg="#bf381a"
          >
            Travel Agency website made with Gatsby.js
          </ProjectCard>
          
          <ProjectCard
            title="Martins Pond"
            link="https://nostalgic-lovelace-eb19fb.netlify.com"
            bg="#ad5b78"
          >
            The lake I live on.
            </ProjectCard>

        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            My biggest goal is to never stop learning, and work on cool stuff. Here's a couple of things I'm good at.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I have expience with frontend work using HTML, CSS, and JavaScript. I have expiernce creating responsive web
          pages using frameworks and libraries such as Bootstrap and React. I also have expiernce with backend work
          using Node.js, Express , and GraphQL with stacks like the LAMP stack I deployed on a digital ocean server.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Contact Me</Title>
          <ContactText>
            Say <a href="mailto:stevenagri1@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/gubna">GitHub</a> and of course{' '}
            <a href="https://linkedin.com/in/steven-agri-242b0431">LinkedIn</a>
          </ContactText>
        </Inner>
      </Contact>
    </Parallax>
  </>
)

export default Index
