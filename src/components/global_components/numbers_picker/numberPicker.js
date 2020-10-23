import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import cn from 'react-native-classnames';
//Constants
import { COLORS, SIZE } from './constants';

const NumberPicker = (props) => {
    const numScroll = useRef(null);
    const [numInView, setNumInView] = useState(props.initial);

    const size = props.size || SIZE;
    const color = props.themeColor || COLORS.themeColor;

    useEffect(() => {
        window.requestAnimationFrame(() => doScroll(false));
    }, [])

    const doScroll = (animated) => {
        numScroll.current.scrollTo({ x: 0, y: numInView * size, animated: animated });
    }

    const getNumbers = () => {
        const nums = [];
        for (let i = props.numFrom; i <= props.numTo; i++) {
            let num = i;
            if (i < 10) {
                num = `0${i}`;
            }
            nums.push(num);
        }
        return nums;
    }

    const getContent = () => {
        const numbers = getNumbers();

        const numPropsStyles = {
            fontSize: size,
            lineHeight: size * 1.1,
            height: size,
        }
        const numSelectedPropsStyles = {
            color: color,
        }
        const numSelectedStyles = cn(styles, 'num', 'selectedNum');

        const numsToRender = numbers.map((num, i) => {
            return (
                <Text
                    key={i}
                    style={
                        numInView == i ?
                        [numSelectedStyles, numPropsStyles, numSelectedPropsStyles]
                        : [styles.num, numPropsStyles]
                    }
                >
                    {num}
                </Text>
            );
        });

        numsToRender.unshift(<Text key={'before'} style={[styles.num, numPropsStyles]}></Text>);
        numsToRender.push(<Text key={'after'} style={[styles.num, numPropsStyles]}></Text>);

        return numsToRender;
    }

    const handleScroll = (event) => {
        let inView = Math.round(event.nativeEvent.contentOffset.y / size);
        setNumInView(inView);
        props.onChange(inView);
    }

    const handleScrollEnd = () => {
        doScroll(true);
    }

    return (
        <ScrollView
            ref={numScroll}
            onScroll={handleScroll}
            onMomentumScrollEnd={handleScrollEnd}
            style={[styles.picker, props.styles, {height: size * 3}]}
            showsVerticalScrollIndicator={false}
        >
            {getContent()}
        </ScrollView>
    )
}

export default NumberPicker;

const styles = StyleSheet.create({
    picker: {
        flex: 0,
        alignContent: 'center',
        flexDirection: 'column',
        marginHorizontal: 5,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRightColor: COLORS.grey,
        borderLeftColor: COLORS.grey,
        backgroundColor: COLORS.lightGrey,
    },
    num: {
        alignSelf: 'center',
        alignItems: 'center',
        color: COLORS.grey,
        fontWeight: '900',
        paddingHorizontal: 5,
    },
    selectedNum: {
        fontWeight: '700'
    },
});
