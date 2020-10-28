import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { StyleSheet, View, Text } from 'react-native';
//Custom components
import StartRoundModal from './start_round_modal/startRoundModal';
import Timer from './timer/timer';
import Button from '../../global_components/button/button';
//Redux
import { switchPlayer, finishRound } from '../../../store/actions/appActions';

const Game = (props) => {
    const pressInterval = useRef(null);
    const [pressTimeStamp, setPressTimeStamp] = useState(null);
    const currentPlayer = props.players[props.currentPlayer];

    useEffect(() => {
        if (pressTimeStamp !== null) {
            pressInterval.current = setTimeout(() => setPressTimeStamp(null), 300);
        }
        return () => {
            if (pressInterval.current) {
                clearTimeout(pressInterval.current);
            }
        }
    }, [pressTimeStamp])

    const handlePress = () => {
        if (pressTimeStamp !== null) {
            const timeDiff = moment(pressTimeStamp).diff(moment());
            if (timeDiff < 300) {
                props.switchPlayer();
                setPressTimeStamp(null);
            }
        } else {
            setPressTimeStamp(moment());
        }
    }

    const textColor = currentPlayer.color[1];
    const backgroundColor = currentPlayer.color[0];
    const playerNameStyle = [styles.playerName, { color: textColor }];

    return (
        <View
            style={[styles.game, { backgroundColor: backgroundColor }]}
            onTouchStart={handlePress}    
        >
            {props.gameStarted && <Timer color={textColor} />}
            <Text
                style={playerNameStyle}>
                {currentPlayer.playerName}
            </Text>
            <Button style={styles.finishButton} onPress={props.finishRound}>
                Finish round
            </Button>
            <StartRoundModal visible={!props.gameStarted} />
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
        currentPlayer: state.app.currentPlayer,
        gameStarted: state.app.gameStarted,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchPlayer: () => dispatch(switchPlayer()),
        finishRound: () => dispatch(finishRound()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

const styles = StyleSheet.create({
    game: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 25,
    },
    playerName: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'nunito-extraBold',
    },
    finishButton: {
        borderWidth: 2,
        borderColor: '#fff',
    },
});