import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

  const [isGo, setIsGO] = useState(true);

  const Navigation = useNavigation();

  useEffect( () => {
    if(isGo == true){
      setTimeout( () => {
        Navigation.navigate('HomeStack');
        setIsGO(false);
      }, 3000);
    }
  });

  return (
    <View style={[tw`flex-1 justify-center items-center`]}>
      <Image 
        style={{
          width: '100%',
          height: 100,
          resizeMode: 'contain'
        }}
        source={require('../assets/icons/logo.png')}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

})