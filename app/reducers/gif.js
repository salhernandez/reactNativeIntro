// Don't mutate the state, return new one

const initialState = {
    giphynfo: "woot woot",
    gif: null
}

const gif = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_GIFS':
            return {
                ...state,
                giphInfo: {},
                gifPics: null
            }
        case 'SET_GIFS':
            return {
              //TODO:Find the downloadable link
                ...state,
                gifPics: action.gifPics
            }
        case 'CLEAR_GIFS':
            return {
                ...state,
                gifPics: null
            }
        default:
            return state
    }
}
export default gif
