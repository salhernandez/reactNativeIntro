'use strict'
import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Picker,
    Button,
    TouchableHighlight,
    Image
} from 'react-native';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as dogActions from './actions/dogActions'

const appStyles = require('./styles');

import {
    MKTextField
} from 'react-native-material-kit';

const styles = Object.assign({}, appStyles, StyleSheet.create({
    col: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center', // this will prevent TFs from stretching horizontal
        marginLeft: 7, marginRight: 7,
        // backgroundColor: MKColor.Lime,
    },
    textfield: {
        height: 28,  // have to do it on iOS
        marginTop: 32,
    },
    textfieldWithFloatingLabel: {
        height: 48,  // have to do it on iOS
        marginTop: 10,
    },
}));

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropDownValue: 'poodle',
            textValue: 'boxer'
        }
    }
    onPressLearnMore(aValue){
        console.log("THE VALUE PASSED IN: ", aValue);
        this.props.actions.getDogPictures(aValue);
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
                        selectedValue={this.state.dropDownValue}
                        onValueChange={(itemValue, itemIndex) => this.setState({dropDownValue: itemValue})}>
                        <Picker.Item label="poodle" value="poodle" />
                        <Picker.Item label="boxer" value="boxer" />
                        <Picker.Item label="akita" value="akita" />
                        <Picker.Item label="beagle" value="beagle" />
                        <Picker.Item label="doberman" value="doberman" />
                        <Picker.Item label="husky" value="husky" />
                        <Picker.Item label="pug" value="pug" />
                    </Picker>

                    <TouchableHighlight onPress={() => this.onPressLearnMore(this.state.dropDownValue)}>
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
                    {this.props.dogPictures ?
                        this.props.dogPictures.map((item, index) => {
                            return(
                                <View key={"dogPictures_"+index}>
                                    <Image
                                        style={{width: 300, height: 300}}
                                        source={{uri: item}}
                                    />
                                </View>
                            )
                        })
                        :
                        <Text>
                            THERE'S NO INFO FOR {this.state.dropDownValue}
                        </Text>}
                    </ScrollView>

                    <MKTextField
                        textInputStyle={{flex: 1}}
                        placeholder='Text…'
                        style={styles.textfield}
                    />
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state,component) {
    return {
        dogs: state.dogs,
        dogPictures: state.dogs.dogPictures
    }
}

export default connect(mapStateToProps,
    (dispatch) => ({
        actions: bindActionCreators({...dogActions}, dispatch)
    })
)(App)