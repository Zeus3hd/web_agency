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
import { RoundButton } from '../components/Buttons'
import CallIcon from '../static/CallIcon.svg'

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

const ChatButton = styled(RoundButton)`
  position: fixed;
  right: 0;
  bottom: 0;
`

const IndexPage = () => {
  let defaultHeight
  if (typeof window !== `undefined`) {
    defaultHeight = window.innerHeight
  }
  const useWindowSize = () => {
    const [dimensions, setDimensions] = useState({
      windowHeight: defaultHeight,
    })

    useEffect(() => {
      const handler = () =>
        setDimensions({
          windowHeight: window.innerHeight,
        })

      window.addEventListener(`resize`, handler)
      return () => window.removeEventListener(`resize`, handler)
    }, [])

    return dimensions
  }
  const [toggleChat, setToggleChat] = useState(false)
  const [y, setY] = useState(defaultHeight)
  const scrollEffect = useSpring({
    from: {
      transform: `translateY(${y}px)`,
    },
    to: {
      transform: `translateY(${y - defaultHeight}px)`,
    },
    config: { mass: 1, tension: 210, friction: 20 },
  })

  const scrollBind = useGesture({
    onWheel: ({ direction, first }) => {
      if (direction[1] > 0 && first && y - defaultHeight >= 0) {
        // scroll down
        setY(y - defaultHeight)
      } else if (direction[1] < 0 && first && y <= 0) {
        // scroll up
        setY(y + defaultHeight)
      }
    },
    onDrag: ({ direction }) => {
      if (direction[1] < 0 && y - defaultHeight >= 0) {
        // scroll down
        setY(y - defaultHeight)
      } else if (direction[1] > 0 && y <= 0) {
        // scroll up
        setY(y + defaultHeight)
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
        <ChatButton
          width="50"
          iconColor="#ffffff"
          onClick={() => setToggleChat(!toggleChat)}
        >
          <CallIcon />
        </ChatButton>
        {toggleChat && <Chat />}
      </Layout>
    </div>
  )
}

export default IndexPage
