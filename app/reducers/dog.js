// Don't mutate the state, return new one

const initialState = {
    allDogInfo: "STORE PLACEHOLDER VALUE",
    dogPictures: null,
    isWaitingForPics: null
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
                dogPictures: null,
                isWaitingForPics:null
            }
        case 'SET_WAITING_FOR_PICS_TRUE':
            return {
                ...state,
                isWaitingForPics: true
            }
        case 'SET_WAITING_FOR_PICS_FALSE':
            return {
                ...state,
                isWaitingForPics: false
            }
        default:
            return state
    }
}
export default dog
