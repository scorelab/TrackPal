import { StyleSheet, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width;
let deveiceHeight = Dimensions.get("window").height;

export default StyleSheet.create({

    firstContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    container2: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 30,
        marginTop: deveiceHeight/5
    },
    container3: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop:85
    },

    indicator: {
        margin: 10,
        marginTop: 50
    },
    scrollStyle: {
        flex: 1
    },
});