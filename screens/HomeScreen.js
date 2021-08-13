import React from 'react'
import { StyleSheet,Platform,StatusBar , Text, View, SafeAreaView,Image} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea }>
            {/* <Text style={tw`text-red-500`,styles.text,{color:'purple',}}>I am the screen</Text> */}
            <View style={tw`p-5`}>
                
                <Image
            style={{
                width:100,
                height:100,
                resizeMode:"contain"
            }}
            source={require('../assets/Uber_logo.png')}
            />
            
            <GooglePlacesAutocomplete 
            styles={{
                container:{
                    flex:0,
                },
                textInput:{
                    fontSize:18,
                },
            }}
            placeholder="where from"
            query={{
                key:'AIzaSyBCTsFItHMmcYCS3PxRTn8gMphutzfI89E',
                language:'en'
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            />
            <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
    color:"blue",
    },
    AndroidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        height:'100%',
        backgroundColor:'white'
      },
})
