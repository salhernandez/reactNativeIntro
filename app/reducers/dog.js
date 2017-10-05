// Don't mutate the state, return new one

const initialState = {
    allDogInfo: "STORE PLACEHOLDER VALUE",
    dogPictures: null
}

const dog = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_DOGS':
            return {
                ...state,
                allDogInfo: {},
                dogPictures: null
            }
        case 'SET_DOG_PICTURES':
            return {
                ...state,
                dogPictures: action.dogPictures
            }
        case 'CLEAR_DOG_PICTURES':
            return {
                ...state,
                dogPictures: null
            }
        default:
            return state
    }
}
export default dog
