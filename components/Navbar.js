import { Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import  MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import  AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Navbar = () => {
  return (
    <View style={[tw`w-full h-12 flex-row p-1 bg-white`]}>
        <View style={[tw`flex-1`]}>
          <Image 
            style={[tw`h-full w-28`]}
            source={{uri: 'https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'}}
          />
        </View>
        <View style={[tw`flex-1 flex-row`]}>
          <View style={[tw`flex-1 items-center justify-center rounded-full`]}>
            <MaterialIcon 
              size={20}
              name='cast'
              color='black'
            />
          </View>
          <View style={[tw`flex-1 items-center justify-center rounded-full`]}>
            <AntDesignIcon 
              size={20}
              name='bells'
              color='black'
            />
          </View>
          <View style={[tw`flex-1 items-center justify-center rounded-full`]}>
            <AntDesignIcon 
              size={20}
              name='search1'
              color='black'
            />
          </View>
          <View style={[tw`flex-1 items-center justify-center`]}>
            <TouchableOpacity>
              <View style={[tw`items-center justify-center rounded-full bg-cyan-800 rounded-full`, styles.usericon]}>
                <Text style={[tw`text-white font-bold`]}>M</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </View> 
  )
}

export default Navbar

const styles = StyleSheet.create({
    usericon: {
        width: 35,
        height: 35
    }
})