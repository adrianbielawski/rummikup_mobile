import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
//Custom components
import AddPlayer from './add_player/addPlayer';
//Redux actions

const Menu = (props) => {

    return (
        <View style={styles.menu}>
            <TimeLimit></TimeLimit>
            <AddPlayer ></AddPlayer>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
        paddingHorizontal: 10,
    },
});