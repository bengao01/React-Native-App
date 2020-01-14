import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, layout } from '../constants/Constants';

class LoginScreen extends Component {

    handlePress = () => {
        this.props.navigation.navigate('HomeScreen', {});
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/mit-logo.png')} style={styles.logoStyle}/>
                <TouchableOpacity
                    title='Login'
                    onPress={this.handlePress}
                    style={styles.loginButtonStyle}
                >
                    <Text style={styles.loginTextStyle}> LOGIN </Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mitBlue,
        justifyContent: 'center',
        width: layout.width,
        height: layout.height,
        alignItems: 'center',
    },
    logoStyle: {
        flex: 2,
        resizeMode: 'contain',
        width: '100%',
    },
    loginButtonStyle: {
        flex: 1,
    },
    loginTextStyle: {
        backgroundColor: 'white',
        padding: 20
    }
});

export default LoginScreen;