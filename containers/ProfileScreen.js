
import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';

import { colors } from '../constants/Constants';

class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        // initialize state
    }

    // getPermissionsAsync

    // handleProfilePicPress

    // handleRemovePicPress

    render(){
        return (
            <View style={styles.container}>
                {/* TODO: show profile pic */}
                {/* TODO: button to upload profile pic */}
                {/* TODO: button to remove profile pic */}
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#86a7ff',
        marginBottom: 32,
    },
    button: {
        borderRadius: 3,
        padding: 15,
        width: 180,
        marginBottom: 10,
    },
});

export default ProfileScreen;