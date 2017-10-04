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
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
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