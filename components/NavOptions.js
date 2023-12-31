import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
const data=[
    {
        id:"987",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"654",
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen"   // not yet done
    }
]

const NavOptions = () => {
const navigation =useNavigation();

  return (
    <FlatList
     data={data}
     horizontal   // to make it horizontal by default is vertical
    keyExtractor={(item)=>item.id}
     renderItem={({item})=>(
        <TouchableOpacity
        onPress={()=>navigation.navigate(item.screen)}
        style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
            {/* <Text>{item.title}</Text> */}
            <View>
                <Image
                style={{
                width:120,
                height:120,
                resizeMode:"contain"
            }}
                source={{uri:item.image}}
                />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>  
            <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            type='antdesign'
            name='arrowright'
            color='white'
             theme="outlined"/>
            </View>
        </TouchableOpacity>
  )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})