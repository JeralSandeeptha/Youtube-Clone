import {Image, StyleSheet, Text, View} from 'react-native'
import React, {useRef, useMemo, useState} from 'react'
import tw from "twrnc";
import {Video} from "expo-av";

const VedioScreen = ( {route} ) => {

  const { id, title, views, channelImage, channelName, thumbnail, date, time, vedioURL } = route.params;

  return (
    <View style={styles.context}>
      <Text>VedioScreen</Text>
        <Text>{ id }</Text>
        <Image
            style={[tw`rounded-full`, styles.channelLogo]}
            source={{uri: channelImage }} />
        <Text>{ title }</Text>
        <Text>{ views }</Text>
        <Text>{ channelName }</Text>
        <Text>{ date }</Text>
        <Text>{ time }</Text>
        <Text>{ vedioURL }</Text>
        <Video
            style={tw`w-full h-55`}
            source={{
                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
        />

    </View>
  )
}

export default VedioScreen

const styles = StyleSheet.create({
  context: {
    backgroundColor: 'red'
  },
  channelLogo: {
    width: 40,
    height: 40,
  },
})