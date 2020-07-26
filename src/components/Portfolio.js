/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
import React, { useState } from 'react'
import { useTrail, config } from 'react-spring'

import {
  Wrapper,
  SliderContainer,
  CardImageContainer,
  CardContentContainer,
  ExtendedCard,
  TechsContainer,
  ExtendedH4,
  ExtendedBody2,
  ExtendedSpan,
  AnimatedCard,
  Title,
  SliderNavigatorContainer,
  SliderButton,
} from './Portfolio.style'
import { RectButton } from './Buttons'
import exampleImage from '../images/example.jpg'
import { ButtonText } from './typography'
import ArrowIcon from '../static/ArrowIcon.svg'

const AnimatedContainer = ({ distance }) => {
  const trail = useTrail(3, {
    config,
    x: distance,
    from: { x: 0 },
  })
  return trail.map(({ x, ...rest }, index) => (
    <AnimatedCard style={{ ...rest, transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }} key={index}>
      <ExtendedCard>
        <CardImageContainer>
          <img src={exampleImage} alt="thumbnail" />
        </CardImageContainer>
        <CardContentContainer>
          <ExtendedH4>Project Title</ExtendedH4>
          <TechsContainer>
            <ExtendedSpan>Techs: </ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
          </TechsContainer>
          <ExtendedBody2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elementum, iaculis et, et. Aliquam nisl amet lorem quisque eu
            commodo leo. Neque curabitur scelerisque dignissim ornare.
          </ExtendedBody2>
          <RectButton>
            <ButtonText>View</ButtonText>
          </RectButton>
        </CardContentContainer>
      </ExtendedCard>
    </AnimatedCard>
  ))
}

const Portfolio = () => {
  const [distance, setDistance] = useState(0)
  const [disableLeft, setDisableLeft] = useState(true)
  const [disableRight, setDisableRight] = useState(false)
  const handleSlide = d => {
    if (distance === 0) {
      setDisableLeft(true)
    } else {
      setDisableLeft(false)
    }
    if (distance <= -200) {
      setDisableRight(true)
    } else {
      setDisableRight(false)
    }
    if (d > 0 && distance < 0) {
      setDistance(distance + d)
    } else if (d < 0 && distance >= -100) {
      setDistance(distance + d)
    }
  }

  return (
    <Wrapper>
      <Title>Our Portfolio</Title>
      <SliderContainer>
        <AnimatedContainer distance={distance} />
      </SliderContainer>
      <SliderNavigatorContainer>
        <SliderButton onClick={() => handleSlide(100)} left>
          {!disableLeft && <ArrowIcon />}
        </SliderButton>
        <SliderButton onClick={() => handleSlide(-100)} right>
          {!disableRight && <ArrowIcon />}
        </SliderButton>
      </SliderNavigatorContainer>
    </Wrapper>
  )
}

export default Portfolio
