export const BATHTUB_STATES = {
    filling: {
        condition: (waterLevel) => waterLevel < 5,
        stateTransformer: (oldState) => oldState + 1,
        action: 'Add water'
    },
    draining: {
        condition: (waterLevel) => waterLevel > 0,
        stateTransformer: (oldState) => oldState - 1,
        action: 'Remove water'
    },
}

export const WATER_UPDATE_INTERVAL = 2000
