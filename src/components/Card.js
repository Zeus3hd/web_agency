/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { colors } from '../utils'

export const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
`

export const TeamCard = styled.div`
  width: 300px;
  padding: 50px 60px;
  /* margin-right: 2rem; */
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`
export const ServiceCard = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
  align-items: center;
  position: relative;
  width: 100%;
  flex: 1 1 29%;
  flex-direction: column;
  cursor: pointer;

  @media (min-width: 900px) {
    margin: 0.8rem;
    min-height: 37vh;
    cursor: default;
  }
  @media (max-width: 900px) {
    flex: 1 1 25%;
    height: 25vh;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  ::after {
    content: '>';
    font-size: 1.5rem;
    color: ${colors.gray};
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
    @media (min-width: 900px) {
      display: none;
    }
  }
`
