import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
//Custom components

const GamePage = () => {
    return (
        <View style={styles.gamePage}>
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