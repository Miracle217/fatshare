import { Dimensions, Platform} from 'react-native';
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
        height: Platform.OS == 'ios'? height : height - 25
    },
    logoImg: {
        width: width*40/64,
        height: 55,
        resizeMode: 'contain',
        marginTop: 0
    },
    inputItem1: {
        width: width - 100,
        height: 40,
        marginTop: 90,
        backgroundColor: 'transparent'
    },
    underLine: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginTop: 15,
        width: width - 100,
        height: 1,
    },
    inputItem2: {
        width: width - 100,
        height: 40,
        marginTop: 50,
        backgroundColor: 'transparent'
    },
    inputTxt: {
        backgroundColor:'transparent',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        flex: 1
    },
    loginBtn: {
        width: width - 100,
        height: 50,
        backgroundColor: 'black',
        marginTop: 20,
        justifyContent: 'center',
        marginLeft: 50,
    },
    loginBtnTxt: {
        color: '#9fce8d',
    },
    forgotBtn: {
        marginLeft: width-140,
        marginTop: 0
    },
    forgortTxt: {
        color:'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    emailImg: {
        width: 22,
        height: 17,
        resizeMode: 'contain',
        backgroundColor: 'transparent'
    },
    forgotView: {
        flexDirection: 'row',
        width: width - 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:  10,
    },
    checkImg: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    },
    rememberTxt: {
        color: 'black',
        fontSize: 14,
        marginLeft: 10
    },
    arrowImg: {
        width: 20,
        height: 10,
        resizeMode: 'contain',
        position: 'absolute',
        right: 10
    },
    signupTxt: {
        marginTop: 20,
        color: 'black',
        fontSize: 14,
    },
    signupTxt1: {
        
        color: 'black',
        fontSize: 14,
        textDecorationLine:'underline'
    },

    detailTxt:{
        position:'absolute',
        bottom: 25,
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    }
}