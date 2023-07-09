import { Image, StatusBar, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Navbar from '../components/Navbar';
import LowerNavbar from '../components/LowerNavbar';
import VedioList from '../components/VedioList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {

    return (
        <View style={[tw`flex-1`]}>

            <ScrollView>

                {/* Status Bar */}
                <StatusBar backgroundColor='white' barStyle='dark-content'/>

                {/* Upper Header */}
                <Navbar />

                {/* Lower Header */}
                <LowerNavbar />

                {/* Render List */}
                <VedioList />

            </ScrollView>

        </View>
    )

}

export default SearchScreen

const styles = StyleSheet.create({})