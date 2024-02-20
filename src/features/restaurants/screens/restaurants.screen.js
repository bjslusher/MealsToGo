import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { Search } from "../../../components/Searchbar"; 
import { RestaurantInfo } from "../components/restaurants-info.component";


export const RestaurantsScreen = () => {

    return(
        <SafeAreaView style={styles.container}>
      <View style={ styles.search }>
        <Search />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    search: {
      padding: 16,
      backgroundColor: "green",
      justifyContent: "center",
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "blue",
    },
  });