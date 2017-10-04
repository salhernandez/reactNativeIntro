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
        let task = RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/posts/');

        task.then((response) => {
            // .. success
            console.log("data", response.data);
        })
            .catch((err) => {
                console.log(err)
            });


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
                        <Picker.Item label="posts" value="posts" />
                        <Picker.Item label="comments" value="comments" />
                        <Picker.Item label="albums" value="albums" />
                        <Picker.Item label="photos" value="photos" />
                        <Picker.Item label="todos" value="todos" />
                        <Picker.Item label="users" value="users" />
                    </Picker>

                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({textValue: text})}
                        value={this.state.textValue}
                    />
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state,component) {
    return {
        user: state.user,
    }
}

export default App