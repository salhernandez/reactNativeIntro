import RNFetchBlob from 'react-native-fetch-blob'
import giphy_key from './keys'
/**
 * Sends off the gif to the reducer
 * @param gif
 * @returns {{type: string, gifs *}}
 */
export const setGifs = (gifPics) => {
    return {
        //reducer
        type: 'SET_GIFS',
        //data
        gifPics
    }
}


/**
 * Clears the gifs from the store
 * @returns {{type: string}}
 */
export const clearGifs= () => {
    return {
        //reducer
        type: 'CLEAR_GIFS'
    }
}

export const getGifs = (search_item) => {
    let url = "https://api.giphy.com/v1/gifs/search?api_key="+giphy_key+"&q="+search_item+"&limit=25&offset=0&rating=PG-13&lang=en"
    return dispatch =>
        //construct url

    //baic setup to make API call
    RNFetchBlob.fetch('GET', url).then((response) => {
        // on success
        try {
            //converts the response from string to JSON
            let temp = JSON.parse(response.data);
            //find the correct gif to show
            let data = temp.data
            var dataLength = data.length
            let other =[]
            for (var i=0 ; i <dataLength; i++){
             other.push(data[i].images.original.url)
            }
            console.log("DATA: ", other);

            //stores the info in the store
            dispatch(setGifs(other));
        }
        catch(e){
            dispatch(clearGifs());
        }

    }).catch((err) => {
        //on fail
        console.log(err);
        dispatch(clearGifs());
    });

}
