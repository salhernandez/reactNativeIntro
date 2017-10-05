// Don't mutate the state, return new one

const initialState = {
    allDogInfo: "STORE PLACEHOLDER VALUE",
    dogPictures: {}
}

const dog = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_DOGS':
            return {
                ...state,
                allDogInfo: {},
                dogPictures: {}
            }
        case 'SET_DOG_PICTURES':
            return {
                ...state,
                dogPictures: action.dogPictures
            }
        case 'CLEAR_DOG_PICTURES':
            return {
                ...state,
                dogPictures: {}
            }
        default:
            return state
    }
}
export default dog
