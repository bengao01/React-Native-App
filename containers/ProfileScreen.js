import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/Constants';

class ProfileScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>My Profile Screen</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mitBlue,
        color: 'white',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
});

export default ProfileScreen;