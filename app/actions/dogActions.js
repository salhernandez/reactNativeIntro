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


/**
 * Clears the dog pictures from the store
 * @returns {{type: string}}
 */
export const clearDogPictures = () => {
    return {
        //reducer
        type: 'CLEAR_DOG_PICTURES'
    }
}

export const setWaitingForPicsTrue = () => {
    return {
        //reducer
        type: 'SET_WAITING_FOR_PICS_TRUE'
    }
}

export const setWaitingForPicsFalse = () => {
    return {
        //reducer
        type: 'SET_WAITING_FOR_PICS_FALSE'
    }
}

export const getDogPictures = (breed) => {
    let url = "https://dog.ceo/api/breed/"+breed+"/images";
    return dispatch =>
        //construct url

    //baic setup to make API call
    RNFetchBlob.fetch('GET', url).then((response) => {
        // on success
        try {
            //converts the response from string to JSON
            let temp = JSON.parse(response.data);
            console.log("DATA: ", temp.message);

            //stores the info in the store
            dispatch(setDogPictures(temp.message));

            //set it to false only if the call was successful
            dispatch(setWaitingForPicsFalse());
        }
        catch(e){
            dispatch(clearDogPictures());
        }

    }).catch((err) => {
        //on fail
        console.log(err);
        dispatch(clearDogPictures());
    });

}