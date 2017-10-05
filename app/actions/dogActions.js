import RNFetchBlob from 'react-native-fetch-blob'

/**
 * Sends off the dog pictures to the reducer
 * @param dogPictures
 * @returns {{type: string, dogPictures: *}}
 */
export const setDogPictures = (dogPictures) => {
    return {
        //reducer
        type: 'SET_DOG_PICTURES',
        //data
        dogPictures
    }
}

export const getDogPictures = (breed) => {
    let url = "https://dog.ceo/api/breed/"+breed+"/images";
    return dispatch =>
        //construct url

    //baic setup to make API call
    RNFetchBlob.fetch('GET', url).then((response) => {
        // on success

        //converts the response from string to JSON
        let temp = JSON.parse(response.data);
        console.log("DATA: ", temp.message);

        //stores the info in the store
        dispatch(setDogPictures(temp.message));

    }).catch((err) => {
        //on failure
        console.log(err);
    });

}