import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Card } from 'react-native-paper';

const Title = styled.Text`
    padding: 16px;
    color: blue;
`
const ResterauntCard = styled(Card)`
    background-color: white;
`
const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
    padding: 16px;
`

export const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = 'Restaurant Tempo',
        icon,
        photos = ['https://media.timeout.com/images/106001846/1024/576/image.webp'],
        address = '123 random st.',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
    } = restaurant;

    return(
        <View>
            <ResterauntCard elevation={5}>
                <RestaurantCardCover key={name}  source={{uri: photos[0]}} />
                <Title>{name}</Title>
            </ResterauntCard>
        </View>
    )
}

