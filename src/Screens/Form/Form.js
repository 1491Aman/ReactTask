//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';

// create a component
class Form extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <Text>back</Text>
                    <Text>Home</Text>
                    
                    
                    
                </View>
                <View style={{
                    borderWidth:.3,
                    borderColor:'black',
                    marginTop:8
                   
                }}></View>
                    <View style={{marginTop:32}}>
                    <TextInput style={{backgroundColor:'grey',paddingHorizontal:8,borderRadius:8}}
                    placeholder='Enter your first name'/>

                </View>
                <TouchableOpacity style={{backgroundColor:'green',height:48,alignItems:'center',justifyContent:'center'}}>
                    <Text>Done</Text>
                </TouchableOpacity>
                
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:16,
        paddingVertical:24

    },
});

//make this component available to the app
export default Form;
