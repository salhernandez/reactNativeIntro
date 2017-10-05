import RNFetchBlob from 'react-native-fetch-blob'

export const setUser = (user,userData,persisted) => {
    return {
        type: 'SET_USER',
        user,
        userData,
        persisted
    }
}

export const getDogPictures = (userData,rememberMe) => {

    let url = "https://dog.ceo/api/breed/"+aValue+"/images";
    let temp = null;

    return dispatch =>
        //construct url

    //baic setup to make API call
    RNFetchBlob.fetch('GET', url).then((response) => {
        // on success

        //converts the response from string to JSON
        let temp = JSON.parse(response.data);
        console.log("DATA: ", temp.message);

    }).catch((err) => {
        //on failure
        console.log(err);
    });

}