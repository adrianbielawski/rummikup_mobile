import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import cn from 'react-native-classnames';
import { COLORS } from '../../../constants/constants';

const Button = (props) => {
    const buttonStyles = cn(styles, 'button', { round: props.round });
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[buttonStyles, props.style]}>
                <Text style={[styles.buttonText, props.textStyle]}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    button: {
        flex: 0,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.themeColor,
        height: 35,
        paddingHorizontal: 20,
        borderRadius: 17.5,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'nunito-extraBold',
        fontSize: 22,
    },
    round: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        paddingHorizontal: 0,
    }
});

export default Button;