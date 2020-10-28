import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
//Constants
import { COLORS } from '../../../constants/constants';
//Components
import PlayersSummary from './players_summary/playersSummary';
import Button from '../../../components/global_components/button/button';
//Redux Actions
import { exitGame } from '../../../store/actions/appActions';

const GameSummary = (props) => {
    return (
        <View style={styles.gameSummary}>
            <Text style={styles.title}>Game results</Text>
            <PlayersSummary />
            <Button style={styles.button} onPress={props.exitGame}>Exit</Button>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        exitGame: () => dispatch(exitGame()),
    }
}

export default connect(null, mapDispatchToProps)(GameSummary);

const styles = StyleSheet.create({
    gameSummary: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 40,
        fontFamily: 'nunito-bold',
        textAlign: 'center',
        width: '100%',
        paddingTop: 25,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey,
    },
    button: {
        marginVertical: 10,
    },
});