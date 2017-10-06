var {StyleSheet, Platform} = require('react-native');
var {MKColor} = require('react-native-material-kit');

let colors = {
    primary: '#0093D5',
    primaryLight: '#7ED7FF',
    secondary: '#D00000',
    white: '#FFFFFF',
    lighter: '#F6F6F6',
    light: '#CFCFCF',
    gray: '#7f7f7f',
    dark: '#474747',
    darker: '#241F20',
    black: '#000000',
    error: '#FF6A6A',
    green: '#07d800',
    blue: '#0645AD',
}

module.exports = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        padding: 20,
        marginTop: Platform.OS === 'android' ? 56 : 0,
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 7, marginRight: 7,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 10, marginBottom: 20,
    },
    legendLabel: {
        textAlign: 'center',
        color: '#666666',
        marginTop: 10, marginBottom: 20,
        fontSize: 12,
        fontWeight: '300',
    },

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
    fullPageWrapper: {
        backgroundColor: colors.lighter,
        flex: 1,
    },
});

module.exports.colors = colors;