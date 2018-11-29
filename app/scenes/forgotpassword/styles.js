import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

export default{
    container: {
        backgroundColor: 'transparent',
        flex: 1,
    },

    background: {
        width, width,
        height: height,
        position: 'absolute',
        left: 0,
        top: 0
    },

    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
         height: Platform.OS == 'ios'? height : height - 25
    },
    logoImg: {
        width: width*40/64,
        height: 55,
        resizeMode: 'contain',
        marginTop: -40
    },
    inputItem1: {
        width: width - 100,
        height: 40,
        marginTop: 60,
        backgroundColor: 'transparent'
    },
    underLine: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginTop: 15,
        width: width - 100,
        height: 1,
    },
    inputTxt: {
        backgroundColor: 'transparent',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        flex: 1,
    },
    loginBtn: {
        width: width - 100,
        height: 50,
        backgroundColor: 'black',
        marginTop: 50,
        justifyContent: 'center',
        marginLeft: 50,
        marginBottom: 60
    },
    loginBtnTxt: {
        color: '#9fce8d',
    },
    
    emailImg: {
        width: 22,
        height: 17,
        resizeMode: 'contain'
    },


    arrowImg: {
        width: 20,
        height: 10,
        resizeMode: 'contain',
        position: 'absolute',
        right: 10
    },
    forgotTxt: {
        color: 'black',
        fontSize: 20,
        marginTop: 75
    },
    forgotDetailTxt: {
        color: 'black',
        fontSize: 13,
        textAlign:'center',
        marginTop: 20
    }

}