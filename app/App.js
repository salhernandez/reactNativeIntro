'use strict'
import React, {
    Component,
} from 'react';

import {
    Text,
    TextInput,
    View,
    ScrollView,
    Picker,
    Button
} from 'react-native';

import RNFetchBlob from 'react-native-fetch-blob'

export class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            language: 'java',
            textValue: '1'
        }
    }

    render() {
        // let task = RNFetchBlob.fetch('GET', 'https://dog.ceo/api/breeds/list/all');
        //
        // task.then((response) => {
        //     // .. success
        //     console.log("data", response.data);
        // })
        //     .catch((err) => {
        //         console.log(err)
        //     });


        return (
            <View>
                <ScrollView>
                    <Text>
                        Landing Page for IOS and Android
                    </Text>

                    <Text>
                        Make Selection
                    </Text>
                    <Picker
                        selectedValue={this.state.language}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="boxer" value="boxer" />
                        <Picker.Item label="akita" value="akita" />
                        <Picker.Item label="beagle" value="beagle" />
                        <Picker.Item label="doberman" value="doberman" />
                        <Picker.Item label="husky" value="husky" />
                        <Picker.Item label="pug" value="pug" />
                    </Picker>
                    <Button
                        onPress={this.onPressLearnMore}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({textValue: text})}
                        value={this.state.textValue}
                    />
                </ScrollView>
            </View>
        );
    }

    onPressLearnMore(){
        console.log("look");
    }
}

function mapStateToProps(state,component) {
    return {
        user: state.user,
    }
}

export default App