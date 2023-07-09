import {Button, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Shorts = () => {

  return (
    <View style={[tw`flex-1 justify-center items-center`]}>

      {/* Status Bar */}
      <StatusBar backgroundColor='white' barStyle='dark-content'/>

    </View>
  )
}

export default Shorts

const styles = StyleSheet.create({
  
})