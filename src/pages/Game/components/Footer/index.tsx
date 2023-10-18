import { PlayerProps } from "../../../../App";
import { BodyText, HeadingMedium } from "../../../../styles/global";
import { FooterBox, FooterContainer } from "./styles";

interface FooterProps {
  player1: PlayerProps
  player2: PlayerProps
  tie: number
}

export default function Footer({ player1, player2, tie }: FooterProps) {
  return (
    <FooterContainer>
      <FooterBox $backGroundColor={'#31C3BD'}>
        <BodyText>X {player1.mark === 'X' ? `(${player1.displayName})` : `(${player2.displayName})`}</BodyText>
        <HeadingMedium>{player1.mark === 'X' ? player1.points : player2.points}</HeadingMedium>
      </FooterBox>

      <FooterBox $backGroundColor={'#A8BFC9'}>
        <BodyText>TIES</BodyText>
        <HeadingMedium>{tie}</HeadingMedium>
      </FooterBox>

      <FooterBox $backGroundColor={'#F2B137'}>
        <BodyText>O {player1.mark === 'O' ? `(${player1.displayName})` : `(${player2.displayName})`}</BodyText>
        <HeadingMedium>{player1.mark === 'O' ? player1.points : player2.points}</HeadingMedium>
      </FooterBox>
    </FooterContainer>
  )
}
