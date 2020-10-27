import { cloneDeep } from 'lodash';
import { PLAYERS_COLORS } from '../../constants/constants';

const initialState = {
    players: [],
    timeLimit: 60,
    gameCreated: false,
};

const appReducer = (state = initialState, action) => {
    let newState = cloneDeep(state);
    switch (action.type) {
        case 'PLAYER_ADDED':
            let newPlayers = cloneDeep(newState.players);
            const id = newPlayers.length
            newPlayers.push({
                playerName: action.playerName,
                id,
                color: Object.entries(PLAYERS_COLORS)[id],
                score: 0,
            });
            newState.players = newPlayers;
            return newState;

        case 'PLAYER_REMOVED':
        case 'PLAYERS_REORDERED':
            newState.players = action.newPlayers;
            return newState;

        case 'TIME_LIMIT_UPDATED':
            newState.timeLimit = action.timeLimit;

        case 'PLAYER_COLOR_CHANGED':
            newState.players[action.index].color = action.color;
            return newState;

        case 'GAME_CREATED':
            newState.gameCreated = true
            return newState

            return newState;


        default:
            return state;
    }
}

export default appReducer;