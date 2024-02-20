import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { Search } from "../../../components/Searchbar"; 
import { RestaurantInfo } from "../components/restaurants-info.component";


const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
const SearchArea = styled.View`
  padding: 16px;
  background-color: green;
  justifyContent: center;
`
const List = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`

export const RestaurantsScreen = () => {

    return(
        <SafeArea >
      <SearchArea>
        <Search />
      </SearchArea>
      <List>
        <RestaurantInfo />
      </List>
    </SafeArea>
    )
}

