
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Card } from 'react-native-paper';

export const Icon = styled.Image`
  height: 15px;
  width: 15px;
`
export const Info = styled.View`
    padding: ${(props) => props.theme.space.md};
`
export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: ${(props) => props.theme.colors.ui.primary};
`
export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`
export const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`
export const Rating = styled.View`
  padding-top: ${(props) => props.theme.space.sm};
  padding-bottom: ${(props) => props.theme.space.sm};
  flex-direction: row;
`
export const Open = styled(SvgXml)`
  align-content: center;
`
export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const SectionEnd = styled.View`
  flex-direction: row;
`