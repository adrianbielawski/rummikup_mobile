import { cloneDeep } from 'lodash';
import moment from 'moment';
import { PLAYERS_COLORS } from '../../constants/constants';

const initialState = {
    players: [],
    timeLimit: 60,
    timeLeft: 60,
    timeEnd: 0,
    currentPlayer: 0,
    roundCount: 1,
    gameCreated: true,
    gameStarted: false,
    roundFinished: false,
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
            newState.timeLeft = action.timeLimit;
            return newState;

        case 'PLAYER_COLOR_CHANGED':
            newState.players[action.index].color = action.color;
            return newState;

        case 'GAME_CREATED':
            newState.gameCreated = true
            return newState

        case 'GAME_STARTED':
            newState.gameStarted = true;
            return newState;

        case 'PLAYER_SWITCHED':
            let nextPlayer = newState.currentPlayer + 1;

            if (nextPlayer === newState.players.length) {
                nextPlayer = 0;
            }

            newState.currentPlayer = nextPlayer;
            newState.timeEnd = moment().add(newState.timeLimit, 'seconds');
            return newState;

        case 'TIME_END_UPDATED':
            newState.timeEnd = action.timeEnd;
            return newState;

        case 'TIMER_UPDATED':
            let timeLeft = moment(newState.timeEnd).diff(moment(), 'seconds', true);
            timeLeft = Math.ceil(Math.max(0, timeLeft));
            newState.timeLeft = timeLeft;
            return newState;

        case 'ROUND_FINISHED':
            newState.roundFinished = true;
            return newState;

        default:
            return state;
    }
}

export default appReducer;