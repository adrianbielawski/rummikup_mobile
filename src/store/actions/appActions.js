
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

