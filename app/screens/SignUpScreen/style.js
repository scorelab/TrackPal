import { StyleSheet, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get("window").width;
let deveiceHeight = Dimensions.get("window").height;

export default StyleSheet.create({

    firstContainer: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.7)"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    scrollStyle: {
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: deveiceHeight / 15,
        marginBottom: 30,
        height: 100,
    },
    logo: {
        width: 100,
        height: 100,
    },
    formContainer: {
        paddingTop: 20,
        borderRadius: 50,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 40,
        paddingTop:50,
        marginBottom: 10
    },
    input: {
        height: 45,
        width: deviceWidth * 0.8,
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 15,
        color: 'black',
        paddingHorizontal: 10
    },
    loginButton: {
        width: deviceWidth * 0.8,
        height: 45,
        borderRadius: 5,
        borderWidth: 0,
        backgroundColor: '#3c5898',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    },
    logo: {
        width: 250,
        height: 100,
  
    },
    text: {
        color: 'black',
        marginBottom: 5
    },
    signInTextArea: {
        alignItems: 'center',
        marginTop: 25
    }
});