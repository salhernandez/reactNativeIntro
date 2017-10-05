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
    Button,
    TouchableHighlight,
    Image
} from 'react-native';

import RNFetchBlob from 'react-native-fetch-blob'
import {connect} from 'react-redux'

export class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            language: 'poodle',
            textValue: '1',
            dogInfo: null
        }
    }
    onPressLearnMore(aValue){
        console.log("THE VALUE PASSED IN: ", aValue);
    }

    render() {

        console.log("DATA FROM THE STORE: ", this.props.dogs);
        return (
            <View>
                <ScrollView>
                    <Text>
                        Make Selection
                    </Text>

                    <Picker
                        selectedValue={this.state.language}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="poodle" value="poodle" />
                        <Picker.Item label="boxer" value="boxer" />
                        <Picker.Item label="akita" value="akita" />
                        <Picker.Item label="beagle" value="beagle" />
                        <Picker.Item label="doberman" value="doberman" />
                        <Picker.Item label="husky" value="husky" />
                        <Picker.Item label="pug" value="pug" />
                    </Picker>

                    <TouchableHighlight onPress={() => this.onPressLearnMore(this.state.language)}>
                        <View>
                            <Text>
                                SHOW DOGS
                            </Text>
                        </View>
                    </TouchableHighlight>

                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({textValue: text})}
                        value={this.state.textValue}
                    />

                    <TouchableHighlight onPress={() => this.onPressLearnMore(this.state.textValue)}>
                        <View>
                            <Text>
                                SHOW DOGS
                            </Text>
                        </View>
                    </TouchableHighlight>


                    <ScrollView
                    horizontal={true}>

                        {/*conditional rendering: if there is dogInfo, it shows all the images, otherwise if dogInfo
                        is null or false, it shows that there is no info*/}
                    {this.state.dogInfo ?
                        this.state.dogInfo.map((item, index) => {
                            return(
                                <View key={"dogInfo_"+index}>
                                    <Image
                                        style={{width: 300, height: 300}}
                                        source={{uri: item}}
                                    />
                                </View>
                            )
                        })
                        :
                        <Text>
                            THERE'S NO INFO FOR {this.state.language}
                        </Text>}
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state,component) {
    return {
        dogs: state.dogs,
    }
}

export default connect(mapStateToProps)(App);