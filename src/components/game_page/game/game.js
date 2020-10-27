import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { StyleSheet, View, Text } from 'react-native';
//Custom components
import StartRoundModal from './start_round_modal/startRoundModal';
import Timer from './timer/timer';
//Redux
import { switchPlayer } from '../../../store/actions/appActions';

const Game = (props) => {
    const [pressTimeStamp, setPressTimeStamp] = useState(null);
    const currentPlayer = props.players[props.currentPlayer];

    const handlePress = () => {
        if (pressTimeStamp !== null) {
            const timeDiff = moment(pressTimeStamp).diff(moment());
            if (timeDiff < 300) {
                props.switchPlayer();
                setPressTimeStamp(null);
            }
        } else {
            setPressTimeStamp(moment());
            setTimeout(() => setPressTimeStamp(null), 300)
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
            <StartRoundModal visible={!props.gameStarted} />
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
        currentPlayer: state.app.currentPlayer,
        gameStarted: state.app.gameStarted,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchPlayer: () => dispatch(switchPlayer()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

const styles = StyleSheet.create({
    game: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 30,
    },
    playerName: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'nunito-extraBold',
    }
});