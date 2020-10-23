import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
//Custom components
import TimeLimit from './time_limit/timeLimit'
//Redux actions

const Menu = (props) => {

    return (
        <View style={styles.menu}>
            <TimeLimit></TimeLimit>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        paddingTop: 24,
        paddingHorizontal: 10,
    },
});

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);