
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
