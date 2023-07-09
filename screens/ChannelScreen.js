import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import tw from "twrnc";

const ChannelScreen = ( {route} ) => {

    const { channelImage, channelName } = route.params;

    return (
        <View style={styles.context}>
            <Text>Channel Screen</Text>
            <Image
                style={[tw`rounded-full`, styles.channelLogo]}
                source={{uri: channelImage }} />
            <Text>{ channelName }</Text>
        </View>
    )
}

export default ChannelScreen;

const styles = StyleSheet.create({
    context: {
        backgroundColor: 'lightblue'
    },
    channelLogo: {
        width: 40,
        height: 40,
    },
})