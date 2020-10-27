import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
//Custom components
import Game from './game/game';

const GamePage = (props) => {
    const getContent = () => {
        if (props.gameCreated) {
          return <Game />
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
    }
}

export default connect(mapStateToProps)(GamePage);

const styles = StyleSheet.create({
    gamePage: {
        flex: 1,
    },
});