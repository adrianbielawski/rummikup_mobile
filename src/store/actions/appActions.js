import { cloneDeep } from 'lodash';

export const addPlayer = (playerName) => ({
    type: 'PLAYER_ADDED',
    playerName,
});

export const playersReordered = (newPlayers) => ({
    type: 'PLAYERS_REORDERED',
    newPlayers,
});

export const playerRemoved = (newPlayers) => ({
    type: 'PLAYER_REMOVED',
    newPlayers,
});

export const updateTimeLimit = (timeLimit) => ({
    type: 'TIME_LIMIT_UPDATED',
    timeLimit,
});

export const changePlayerColor = (index, color) => ({
    type: 'PLAYER_COLOR_CHANGED',
    index,
    color,
});

export const createGame = () => ({
    type: 'GAME_CREATED',
})

export const startGame = () => ({
    type: 'GAME_STARTED',
});

export const finishRound = () => ({
    type: 'ROUND_FINISHED',
});

export const updateTimeEnd = (timeEnd) => ({
    type: 'TIME_END_UPDATED',
    timeEnd,
});

export const timerUpdated = (timeEnd) => ({
    type: 'TIMER_UPDATED',
    timeEnd,
});

export const switchPlayer = () => ({
    type: 'PLAYER_SWITCHED',
});

const subPoints = (players, points) => {
    let subPlayers = cloneDeep(players);
    let pointsSum = 0;
    let winner;

    for (let i = 0; i < subPlayers.length; i++) {
        const p = parseInt(points[i]) || 0
        subPlayers[i].score -= p;
        pointsSum += p;
        if (p === 0) {
            winner = i;
        }
    };

    subPlayers[winner].score += pointsSum;
    return subPlayers;
};

export const handleNextRound = (players, points) => dispatch => {
    const subPlayers = subPoints(players, points);
    dispatch(nextRound(subPlayers));
}

const nextRound = (subPlayers) => ({
    type: 'NEXT_ROUND',
    subPlayers,
});

export const handleFinishGame = (players, points) => dispatch => {
    const subPlayers = subPoints(players, points);
    dispatch(finishGame(subPlayers));
}

const finishGame = (subPlayers) => ({
    type: 'GAME_FINISHED',
    subPlayers,
});

export const exitGame = () => ({
    type: 'GAME_CLOSED',
});