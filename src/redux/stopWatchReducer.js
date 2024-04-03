const initialState = {
    elapsedTime: 0,
    isRunning: false,
};

function stopwatchReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_STOPWATCH':
            return { ...state, isRunning: true };
        case 'STOP_STOPWATCH':
            return { ...state, isRunning: false };
        case 'RESET_STOPWATCH':
            return { ...initialState };
        case 'TICK':
            return { ...state, elapsedTime: state.elapsedTime + 1 };
        default:
            return state;
    }
}

export default stopwatchReducer;
