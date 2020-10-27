import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
//Custom components
import Menu from './components/menu/menu'
import GamePage from './components/game_page/gamePage';

const Main = (props) => {
    const getContent = () => {
        if (props.gameCreated) {
            return <GamePage />
        } else {
            return <Menu />
        }
    }

    return (
        <View style={styles.container}>
            {getContent()}
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        gameCreated: state.app.gameCreated,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(mapStateToProps)(Main);
