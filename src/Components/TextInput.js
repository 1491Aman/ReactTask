//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const TextInput = () => {
    return (
        <View style={styles.container}>
            <Text>TextInput</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
});

//make this component available to the app
export default TextInput;
