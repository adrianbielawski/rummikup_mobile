import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { AppLoading } from 'expo';
import thunk from 'redux-thunk';
import rootReducer from './src/store/reducers/index';
import { useFonts } from '@use-expo/font';
import { StyleSheet } from 'react-native';
import Main from './src/main';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

function App() {
    let [fontsLoaded] = useFonts({
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'nunito-extraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
    });

    return (
        <Provider store={store}>
            {fontsLoaded ?
                <Main style={styles.container} />
                :
                <AppLoading />
            }
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
