import { Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import  MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import  AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Navbar from '../components/Navbar';

const Library = () => {
  return (
    <View style={[tw`flex-1`]}>

      {/* Status Bar */}
      <StatusBar backgroundColor='white' barStyle='dark-content'/>

      {/* Upper Header */}
      <Navbar />
      
    </View>
  )
}

export default Library

const styles = StyleSheet.create({
  usericon: {
    width: 35,
    height: 35
  }
})