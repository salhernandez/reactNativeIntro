'use strict'
import React, {
    Component,
} from 'react';

import {
    Alert,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Picker,
    TouchableHighlight,
    Image
} from 'react-native';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as dogActions from './actions/dogActions'

import styles from './styles.js'

import {
    MKTextField,
    MKSpinner,
    MKButton,
    getTheme
} from 'react-native-material-kit';

const theme = getTheme();

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
        this.props.actions.setWaitingForPicsTrue();
        this.props.actions.getDogPictures(aValue);
    }

    onMoreInfo(){
        // Works on both iOS and Android
        Alert.alert(
            'Alert',
            'Do you like dogs?',
            [
                {text: 'no', style: 'cancel'},
                {text: 'yes'},
            ],
            { cancelable: false }
        )
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


                    <MKButton
                        backgroundColor={styles.colors.primary}
                        shadowRadius={2}
                        shadowOffset={{width:0, height:2}}
                        shadowOpacity={.7}
                        shadowColor="black"
                        onPress={() => {
                            this.onPressLearnMore(this.state.dropDownValue)
                        }}
                    >
                        <Text pointerEvents="none"
                              style={{color: 'white', fontWeight: 'bold',}}>
                            RAISED BUTTON
                        </Text>
                    </MKButton>

                    <MKTextField
                        textInputStyle={{flex: 1}}
                        placeholder='Text…'
                        style={styles.textfield}
                        onTextChange={(value)=> this.setState({
                            textValue: value
                        })}
                    />

                    <TouchableHighlight onPress={() => this.onPressLearnMore(this.state.textValue)}>
                        <View>
                            <Text>
                                SHOW DOGS
                            </Text>
                        </View>
                    </TouchableHighlight>


                    <ScrollView
                    horizontal={true}
                    justifyContent={"center"}>

                        {/*conditional rendering: if there is dogInfo, it shows all the images, otherwise if dogInfo
                        is null or false, it shows that there is no info*/}
                    {this.props.dogPictures ?
                        this.props.dogPictures.map((item, index) => {
                            return(
                                    <View key={"dogPictures_"+index} style={[theme.cardStyle, {width: 300, height: 300}]}>
                                        <Image source={{uri : item}} style={theme.cardImageStyle}/>
                                        <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
                                            style={{
                                                padding : 15,
                                            }}>
                                            <Text style={[theme.cardContentStyle, {padding:0}]}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Mauris sagittis pellentesque lacus eleifend lacinia...
                                            </Text>
                                        </View>

                                        <TouchableHighlight onPress={() => this.onMoreInfo()}>
                                            <View style={theme.cardActionStyle}>
                                                <Text>More</Text>
                                            </View>
                                        </TouchableHighlight>

                                    </View>
                            )
                        })

                        :

                        this.props.isWaitingForPics ? <MKSpinner/>:
                            <Text>
                            THERE ARE NO PICTURES
                        </Text>

                        }
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state,component) {
    return {
        dogs: state.dogs,
        dogPictures: state.dogs.dogPictures,
        isWaitingForPics: state.dogs.isWaitingForPics
    }
}

export default connect(mapStateToProps,
    (dispatch) => ({
        actions: bindActionCreators({...dogActions}, dispatch)
    })
)(App)