import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicon from 'react-native-vector-icons/Ionicons';

// md-compass-outline

const LowerNavbar = () => {

  const [categories, setCategories] = useState([
        {
          id: 1,
          name: 'All'
        },
        {
          id: 2,
          name: 'New to you'
        },
        {
          id: 3,
          name: 'Mixes'
        },
        {
          id: 4,
          name: 'Music'
        },
        {
          id: 5,
          name: 'Live'
        },
        {
          id: 6,
          name: 'Gaming'
        },
        {
          id: 7,
          name: 'React router'
        },
        {
          id: 8,
          name: 'Comedy'
        },
        {
          id: 9,
          name: 'Computer Application'
        },
        {
          id: 10,
          name: 'Wildlife'
        },
  ]);

  return (
    <View style={[tw`w-full h-12 flex-row p-2 bg-white`]}>
      <View style={[tw`flex-0.6 items-center justify-center bg-slate-200 rounded`]}>
        <Ionicon 
          name='md-compass-outline'
          size={30}
          color='black'
        />
      </View>
      <View style={[tw`bg-black mx-2 bg-slate-200`, styles.separator]}></View>
      <View style={[tw`flex-5`]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {
              categories.map( (category) => {
                  return(
                      <TouchableOpacity key={category.id}>
                          <View style={[tw`h-full bg-slate-200 items-center justify-center px-3 ml-2.5 rounded-lg border-black`]}>
                              <Text>{category.name}</Text>
                          </View>
                      </TouchableOpacity>
                  )
              })
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default LowerNavbar

const styles = StyleSheet.create({
  separator: {
    width: 2,
    height: '100%'
  }
})