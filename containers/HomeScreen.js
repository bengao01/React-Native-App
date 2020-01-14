import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>My First Home Screen</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        color: 'white',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
});

export default HomeScreen;