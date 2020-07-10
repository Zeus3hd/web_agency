/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react'
import { useSprings, animated, useSpring, config } from 'react-spring'
import { useWheel, useGesture } from 'react-use-gesture'
import styled from 'styled-components'
import clamp from 'lodash-es/clamp'

import Layout from '../components/layout'
// import Image from '../components/Zaat_logo'
import SEO from '../components/seo'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Chat from '../components/Chat'

const FixedContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const AnimatedContainer = styled(animated.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ChatButton = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
`

const IndexPage = () => {
  const [toggleChat, setToggleChat] = useState(false)
  const [y, setY] = useState(window.innerHeight)
  const scrollEffect = useSpring({
    from: {
      transform: `translateY(${y}px)`,
    },
    to: {
      transform: `translateY(${y - window.innerHeight}px)`,
    },
    config: { mass: 1, tension: 210, friction: 20 },
  })

  const scrollBind = useGesture({
    onWheel: ({ direction, first }) => {
      if (direction[1] > 0 && first && y - window.innerHeight >= 0) {
        // scroll down
        setY(y - window.innerHeight)
      } else if (direction[1] < 0 && first && y <= 0) {
        // scroll up
        setY(y + window.innerHeight)
      }
    },
    onDrag: ({ direction }) => {
      if (direction[1] < 0 && y - window.innerHeight >= 0) {
        // scroll down
        setY(y - window.innerHeight)
      } else if (direction[1] > 0 && y <= 0) {
        // scroll up
        setY(y + window.innerHeight)
      }
    },
  })

  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <FixedContainer {...scrollBind()}>
          <AnimatedContainer style={scrollEffect}>
            <Header />
            <Contact />
          </AnimatedContainer>
        </FixedContainer>
        <ChatButton onClick={() => setToggleChat(!toggleChat)}>
          Toggle Chat
        </ChatButton>
        {toggleChat && <Chat />}
      </Layout>
    </div>
  )
}

export default IndexPage
