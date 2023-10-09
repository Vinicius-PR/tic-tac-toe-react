import { BodyText, HeadingMedium } from "../../../../styles/global";
import { FooterBox, FooterContainer } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterBox $backGroundColor={'#31C3BD'}>
        <BodyText>X (YOU)</BodyText>
        <HeadingMedium>14</HeadingMedium>
      </FooterBox>

      <FooterBox $backGroundColor={'#A8BFC9'}>
        <BodyText>TIES</BodyText>
        <HeadingMedium>32</HeadingMedium>
      </FooterBox>

      <FooterBox $backGroundColor={'#F2B137'}>
        <BodyText>O (CPU)</BodyText>
        <HeadingMedium>11</HeadingMedium>
      </FooterBox>
    </FooterContainer>
  )
}
