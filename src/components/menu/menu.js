import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
//Custom components
import Button from '../global_components/button/button';
import TimeLimit from './time_limit/timeLimit';
import AddPlayer from './add_player/addPlayer';
import Players from './players/players';
//Redux actions
import { createGame } from '../../store/actions/appActions';

const Menu = (props) => {
    return (
        <View style={styles.menu}>
            <TimeLimit />
            <AddPlayer />
            <Players />
            <Button
                onPress={props.createGame}
                disabled={props.players.length < 2}
            >
                Start game
            </Button>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        players: state.app.players,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createGame: () => dispatch(createGame()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
        paddingHorizontal: 5,
    },
});