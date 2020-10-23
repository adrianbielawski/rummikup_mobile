
export const addPlayer = (playerName) => ({
    type: 'PLAYER_ADDED',
    playerName,
});

export const updateTimeLimit = (timeLimit) => ({
    type: 'TIME_LIMIT_UPDATED',
    timeLimit,
});

