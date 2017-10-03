'use strict'
import React, {
    Component,
} from 'react';

import {
    Text,
    View
} from 'react-native';

export class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>
                    Landing Page for IOS and Android
                </Text>
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