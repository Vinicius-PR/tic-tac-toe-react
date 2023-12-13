import { useContext } from 'react'
import { BodyText, HeadingMedium } from "../../../../styles/global"
import { FooterBox, FooterContainer } from "./styles"
import { GameContext } from '../../../../context/GameContext'

export default function Footer() {

  const { state } = useContext(GameContext)
  return (
    <FooterContainer>
      <FooterBox $backGroundColor={'#31C3BD'}>
        <BodyText>X {state.player1.mark === 'x' ? `(${state.player1.displayName})` : `(${state.player2.displayName})`}</BodyText>
        <HeadingMedium>{state.player1.mark === 'x' ? state.player1.points : state.player2.points}</HeadingMedium>
      </FooterBox>

      <FooterBox $backGroundColor={'#A8BFC9'}>
        <BodyText>TIES</BodyText>
        <HeadingMedium>{state.tie}</HeadingMedium>
      </FooterBox>

      <FooterBox $backGroundColor={'#F2B137'}>
        <BodyText>O {state.player1.mark === 'o' ? `(${state.player1.displayName})` : `(${state.player2.displayName})`}</BodyText>
        <HeadingMedium>{state.player1.mark === 'o' ? state.player1.points : state.player2.points}</HeadingMedium>
      </FooterBox>
    </FooterContainer>
  )
}
