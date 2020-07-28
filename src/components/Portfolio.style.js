import styled from 'styled-components'
import { animated } from 'react-spring'
import { Card } from './Card'
import { H4, Body2, Span, H2 } from './typography'
import { colors } from '../utils'
import { RectButton } from './Buttons'

export const ExtendedButton = styled(RectButton)`
  @media (min-width: 768px) {
    margin: 0;
  }
`

export const ExtendedH4 = styled(H4)`
  font-size: 1.2rem;
  color: ${colors.gray};
  margin: 0.5rem 0;
`
export const ExtendedBody2 = styled(Body2)`
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.gray};
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 768px) {
    margin: 0.5rem 0;
  }
`
export const ExtendedSpan = styled(Span)`
  font-size: 0.9rem;
  font-weight: 400;
  color: #555555;
  margin: 0;
  line-height: 1.5rem;
  color: ${colors.gray};
`

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Title = styled(H2)`
  text-align: center;
  font-size: 3rem;
  color: ${colors.gray};
  /* margin: 0; */
`
export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
`
export const AnimatedCard = styled(animated.div)`
  width: 100%;
  min-width: 100%;
  padding: 0 1rem;
  @media (min-width: 1024px) {
    padding: 0 10vw;
  }
  @media (min-width: 1440px) {
    padding: 0 25vw;
  }
`
export const ExtendedCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`
export const CardImageContainer = styled.div`
  > img {
    width: 100%;
    min-width: 250px;
    max-width: 300px;
    margin: 0;
  }
`
export const CardContentContainer = styled.div`
  @media (min-width: 768px) {
    padding-left: 2rem;
  }
`
export const TechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin-right: 0.5rem;
  }
  > p:first-child {
    font-weight: bolder;
  }
`

export const SliderNavigatorContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-evenly;
  width: 250px;
`
export const SliderButton = styled.button`
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;
  > svg {
    fill: ${colors.primary};
    width: 15px;
    ${({ right }) => (right ? 'transform:rotateZ(180deg)' : null)}
  }
  @media (min-width: 1024px) {
    margin-top: 2rem;
    > svg {
      width: 25px;
    }
  }
`
