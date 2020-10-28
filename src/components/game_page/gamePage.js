import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
//Custom components
import Game from './game/game';
import SubtractPoints from './subtract_points/subtractPoints';
import GameSummary from './game_summary/gameSummary';

const GamePage = (props) => {
    const getContent = () => {
        if (props.gameFinished) {
            return <GameSummary />;
        } else if (props.roundFinished) {
            return <SubtractPoints />;
        } else if (props.gameCreated) {
            return <Game />;
        }
    }

    return (
        <View style={styles.gamePage}>
            {getContent()}
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        gameCreated: state.app.gameCreated,
        roundFinished: state.app.roundFinished,
        gameFinished: state.app.gameFinished,
    };
}

export default connect(mapStateToProps)(GamePage);

const styles = StyleSheet.create({
    gamePage: {
        flex: 1,
    },
});