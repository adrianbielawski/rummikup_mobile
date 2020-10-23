import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { cloneDeep } from 'lodash';
//Constants
import { COLORS, SIZE } from './constants';
//Custom components
import Button from './button';
import NumberPicker from './numberPicker';

const NumbersPicker = (props) => {
    const [values, setValues] = useState(null);

    const size = props.size || SIZE;
    const color = props.themeColor || COLORS.themeColor;

    useEffect(() => {
        let vals = [];
        props.pickers.forEach(val => {
            vals.push(val.initial);
        });
        setValues(vals);
    }, [])

    const handleConfirm = () => {
        props.onConfirm(values)
    }

    const getPickers = () => {
        return props.pickers.map((picker, i) => {
            const handleChange = (val) => {
                let newValues = cloneDeep(values);
                newValues[i] = val;
                setValues(newValues);
            }

            const colonPropsStyles = {
                fontSize: size,
                lineHeight: size * 1.1,
                color: color,
            }

            return (
                <Fragment key={i}>
                    <NumberPicker
                        styles={props.pickerStyles}
                        size={props.size}
                        themeColor={props.themeColor}
                        numFrom={picker.from}
                        numTo={picker.to}
                        initial={picker.initial - picker.from}
                        onChange={handleChange}
                    ></NumberPicker>
                    {i < props.pickers.length - 1 && 
                        <Text style={[styles.colon, colonPropsStyles, props.colonStyle]}>
                            :
                        </Text>
                    }
                </Fragment>
            );
        });
    }

    return (
        <View style={[styles.numbersPicker, props.style]}>
            <View style={styles.picker}>
                {getPickers()}
            </View>
            <View style={styles.buttons}>
                <Button
                    style={props.buttonsStyles}
                    themeColor={props.themeColor}
                    onPress={handleConfirm}
                >
                    Ok
                </Button>
                <Button
                    style={props.buttonsStyles}
                    themeColor={props.themeColor}
                    onPress={props.onCancel}
                >
                    Cancel
                </Button>
            </View>
        </View>
    )
}

export default NumbersPicker;

const styles = StyleSheet.create({
    numbersPicker: {
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.grey,
        padding: 10,
        elevation: 20,
    },
    picker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colon: {
        fontWeight: '700',
    },
    buttons: {
        marginTop: 10,
    },
});
