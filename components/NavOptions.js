import React from 'react'
import { FlatList, StyleSheet, Image,Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import {Icon} from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

const data =[
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"HomeScreen",
    
    },
    {
        id:"456",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen:"MapScreen",
    
    },
];

const NavOptions = () => {
    const navigation=useNavigation();    
    
    return (
        <View>
            <View>
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
         <TouchableOpacity 
         onPress={()=>navigation.navigate(item.screen)}
         style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 mt-8 w-40`}>
            <View>
              
                <Image
                style={{width: 120,height:120,resizeMode:"contain"}}
                source={{uri:item.image}}
                />
                <Text style={tw`mt-2 text-lg font-semibold `}>{item.title}</Text>
                <Icon 
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright" color="white" type="antdesign" />
            </View>
         </TouchableOpacity>
        )}
        />
        </View>
        <View style={tw`h-2/4`}> 

        <Text style={tw`absolute bottom-0 text-center items-center w-full font-bold`}>Dev By-Dheeraj Singh</Text>
        </View>
        
        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({})
