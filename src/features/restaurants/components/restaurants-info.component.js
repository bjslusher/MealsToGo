import React from "react";
import styled from "styled-components/native";
import {Image, View} from "react-native";
import { Card } from 'react-native-paper';
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Info = styled.View`
    padding: ${(props) => props.theme.space.md};
`
const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.title};
    color: ${(props) => props.theme.colors.ui.primary};
`
const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: ${(props) => props.theme.colors.ui.primary};
`
const RestarauntCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`
const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    
`
const Rating = styled.View`
  padding-top: ${(props) => props.theme.space.sm};
  padding-bottom: ${(props) => props.theme.space.sm};
  flex-direction: row;
`
const Open = styled(SvgXml)`
  align-content: center;
`
const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const SectionEnd = styled.View`
  flex: 0.35;
  flex-direction: row;
  justify-content: space-between;
`
const Closed = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
`
export const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = 'Restaurant Temp Name',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ['https://media.timeout.com/images/106001846/1024/576/image.webp'],
        address = '123 random st.',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return(
        <View>
            <RestarauntCard elevation={5}>
                <RestaurantCardCover key={name}  source={{uri: photos[0]}} />
                <Info>
                    <Title>{name}</Title>
                    <Section>
                        <Rating>{ratingArray.map(() => (<SvgXml xml={star} width={20} height={20} />))}</Rating>
                        <SectionEnd>
                            {isClosedTemporarily && (
                                <Closed>CLOSED</Closed>
                            )}
                            {isOpenNow && <Open xml={open} width={20} height={20}/>}
                            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                        </SectionEnd>
                    </Section>
                    <Address>{address}</Address>
                </Info>
            </RestarauntCard>
        </View>
    )
}

