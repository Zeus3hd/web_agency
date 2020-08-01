import styled from 'styled-components'
import { colors } from '../../utils'

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`
export const TitleContainer = styled.div`
  @media (min-width: 1280px) {
    flex: 1;
  }
`
export const Title = styled.h2`
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  text-align: center;
  max-width: 20ch;
  @media (min-width: 1280px) {
    font-size: 6vw;
    text-align: left;
  }
`
export const TeamContainer = styled.div`
  @media (min-width: 1280px) {
    flex: 2;
    padding: 0 3vw;
  }
`

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  }
`
export const MemberImage = styled.img`
  width: 100%;
  max-width: 250px;
`
export const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
    text-align: ${({ reverse }) => (reverse ? 'right' : 'left')};
    padding: 0 2rem;
  }
`
export const MemberName = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
`
export const MemberDesc = styled.p`
  color: ${colors.grey};
  max-width: 30ch;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  margin: 0;
  margin-bottom: 0.7rem;
  @media (min-width: 1024px) {
    max-width: 60ch;
  }
`
export const MemberLinksContainer = styled.div`
  display: flex;
`
export const MemberLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  padding: 0 0.5rem;
  > svg {
    width: 1.5rem;
    fill: ${colors.black};
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    margin-right: 0.3rem;
  }
`
