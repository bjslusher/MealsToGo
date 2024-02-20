import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';

const Title = styled.Text`
    padding: 16px;
    color: red;
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
            <Card elevation={5} style={styles.card}>
                <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
                <Title>{name}</Title>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {backgroundColor: "white"},
    cover: {padding: 20,
            backgroundColor: "white" },
    
})