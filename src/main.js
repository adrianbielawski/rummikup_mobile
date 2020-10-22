import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './components/menu/menu'

const Main = (props) => {
    const getContent = () => {
            return <Menu />
    }

    return (
        <View style={styles.container}>
            {getContent()}
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(mapStateToProps)(Main);
