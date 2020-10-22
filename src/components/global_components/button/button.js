import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { colors } from '../../../constants/constants';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.button, props.style]}>
                <Text style={[styles.buttonText, props.textStyle]}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    button: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        backgroundColor: colors.themeColor,
        height: 35,
        paddingHorizontal: 20,
        borderRadius: 17.5,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'nunito-extraBold',
        fontSize: 22,
    }
});

export default Button;