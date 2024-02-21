import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Spacer } from "./spacer/spacer.component";
import { Text } from "./topography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Icon,
        Info,
        Address,
        RestaurantCard,
        RestaurantCardCover,
        Rating,
        Open,
        Section,
        SectionEnd}
    from "./restaurant-info-card.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = 'Restaurant Temp Name',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ['https://media.timeout.com/images/106001846/1024/576/image.webp'],
        address = '123 random st.',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return(
        <View>
            <RestaurantCard elevation={5}>
                <RestaurantCardCover key={name}  source={{uri: photos[0]}} />
                <Info>
                    <Text varient='label'>{name}</Text>
                    <Section>
                        <Rating>{ratingArray.map(() => (<SvgXml xml={star} width={20} height={20} />))}</Rating>
                        <SectionEnd>
                            {isClosedTemporarily && (
                                <Text variant='error'>CLOSED</Text>
                            )}
                            <Spacer position='left' size='large'>
                            {isOpenNow && <Open xml={open} width={20} height={20}/>}
                            </Spacer>
                            <Spacer position='left' size='large'>
                            <Icon source={{ uri: icon }} />
                            </Spacer>
                        </SectionEnd>
                    </Section>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        </View>
    )
}

