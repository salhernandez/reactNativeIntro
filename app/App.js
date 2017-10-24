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
    Image,
    ListView
} from 'react-native';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as gifActions from './actions/gifActions'

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textValue: 'rock'
        }
    }
    onPressShow(aValue){
      console.log("THE VALUE PASSED IN: ", aValue);
      this.props.actions.getGifs(aValue);
    }

    render() {
        console.log("DATA FROM THE STORE: ", this.props.gifPics);
        return (
            <View>
                <ScrollView>

                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({textValue: text})}
                        value={this.state.textValue}
                    />

                    <TouchableHighlight onPress={() => this.onPressShow(this.state.textValue)}>
                        <View>
                            <Text>
                                SHOW GIFS
                            </Text>
                        </View>
                    </TouchableHighlight>


                    <ScrollView
                    horizontal={false}>

                        {/*conditional rendering: if there is gifImages, it shows all the images, otherwise if gifImages
                        is null or false, it shows that there is no info*/}
                    {this.props.gifPics ?
                        this.props.gifPics.map((item, index) => {
                            return(

                                <View key={"gifPics_"+index}>
                                    <Image
                                        style={{ flex: 1,width: 300,height: 300,resizeMode: 'contain',borderColor: 'black'}}
                                        source={{uri: item}}
                                    />
                                </View>
                            )
                        })
                        :
                        <Text>
                            NO INFO TO SHOW
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
        gifs: state.gifs,
        gifPics: state.gifs.gifPics

    }
}

export default connect(mapStateToProps,
    (dispatch) => ({
        actions: bindActionCreators({...gifActions}, dispatch)
    })
)(App)
