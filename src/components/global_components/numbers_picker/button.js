import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
//Constants
import { COLORS } from './constants';

const Button = (props) => {
    const color = props.themeColor || COLORS.themeColor;
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View 
                style={
                    [
                        styles.button,
                        props.style,
                        { backgroundColor: color }
                    ]
                }
            >
                <Text
                    style={[styles.buttonText, props.textStyle]}
                >
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )    
}

export default Button;

const styles = StyleSheet.create({
    button: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center',
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