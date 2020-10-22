import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

const Main = (props) => {
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
