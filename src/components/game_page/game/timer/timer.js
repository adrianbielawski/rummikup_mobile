import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment-duration-format';
import { Audio } from 'expo-av';
//Redux Actions
import { timerUpdated, updateTimeEnd } from '../../../../store/actions/appActions';

const BEEP = require('../../../../../assets/audio/beep.mp3');
const LONG_BEEP = require('../../../../../assets/audio/long-beep.mp3');

const Timer = (props) => {
    const timerInterval = useRef(null);
    const beep = new Audio.Sound();

    const playSound = async (sound) => {
        try {
            await beep.loadAsync(sound);
            await beep.playAsync();
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const timeLeft = props.timeLeft;
        const timeLimit = props.timeLimit;
        if ((timeLeft % 30 === 0 && timeLeft !== timeLimit || timeLeft <= 10) && timeLeft !== 0) {
            playSound(BEEP);
        }

        if (timeLeft !== null && timeLeft <= 0) {
            playSound(LONG_BEEP);
            if (timerInterval.current) {
                clearInterval(timerInterval.current);
            }
        }
    }, [props.timeLeft])

    useEffect(() => {
        props.updateTimeEnd(getTimeEnd());
    }, [])

    useEffect(() => {
        props.timerUpdated();
        timerInterval.current = setInterval(props.timerUpdated, 1000);
        return () => {
            if (timerInterval.current) {
                clearInterval(timerInterval.current);
            }
        }
    }, [props.timeEnd.valueOf(), props.roundCount])

    useEffect(() => {
        if (props.timeLeft !== null && props.timeLeft <= 0) {
            if (timerInterval.current) {
                clearInterval(timerInterval.current);
            }
        }
    }, [props.timeLeft])

    const getTimeEnd = () => {
        return moment().add(props.timeLimit, 'seconds');
    }

    const getTimer = () => {
        const duration = moment.duration(props.timeLeft, 'seconds');
        let timer = duration.format('mm:ss', { trim: false });
        return timer;
    }

    return (
        <View style={styles.timerWrapper}>
            <Text style={[styles.timer, { color: props.color }]}>
                {getTimer()}
            </Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        timeLeft: state.app.timeLeft,
        timeLimit: state.app.timeLimit,
        timeEnd: state.app.timeEnd,
        roundCount: state.app.roundCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        timerUpdated: () => dispatch(timerUpdated()),
        updateTimeEnd: (timeEnd) => dispatch(updateTimeEnd(timeEnd)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

const styles = StyleSheet.create({
    timerWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer: {
        fontSize: 80,
        fontFamily: 'nunito-extraBold',
    }
});