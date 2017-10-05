// Don't mutate the state, return new one

const initialState = {
    allDogInfo: {}
}

const dogs = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_DOGS':
            return {
                ...state,
                allDogInfo: {}
            }
        default:
            return state
    }
}
export default dogs
