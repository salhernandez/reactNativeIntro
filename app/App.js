'use strict'
import React, {
    Component,
} from 'react';

import {
    Text,
    View,
    ScrollView,
    Picker
} from 'react-native';

export class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            language: 'java'
        }
    }

    render() {
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