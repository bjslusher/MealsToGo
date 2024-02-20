import React, { useState }from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return(
        <View>
            <Searchbar 
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
                mode="bar" />
        </View>
    )
}