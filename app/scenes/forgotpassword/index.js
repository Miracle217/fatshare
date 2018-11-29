import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Thumbnail,
    Button,
    Footer,
    View,
    Label,
    Item,
    Input
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import { 
    Animated, Image, TouchableOpacity, TextInput
} from 'react-native';
import styles from './styles';

class ForgotPasswordScreen extends Component<{}> {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    forgot(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'forgotpassword'}));
    }

    render(){
        return (
            <Container style={styles.container}>
                <Thumbnail square source={require('../../assets/Rectangle.png')} style={styles.background}/>
                <Content >
                    <View style = {styles.mainContainer}>
                        <Image source = {require('../../assets/logo.png')} style = {styles.logoImg}/>
                        <Label style = {styles.forgotTxt}>Forgot your password?</Label>
                        <Label style = {styles.forgotDetailTxt}>Lorem Ipsum is simply dummy text of the{'\n'}printing and typesetting industry.</Label>
                        <View style = {styles.inputItem1}>
                            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source = {require('../../assets/ic_email.png')} style = {styles.emailImg}/>
                                <TextInput
                                    style = {styles.inputTxt}
                                    onChangeText = { text => this.setState({ email: text })}
                                    value = {this.state.email}
                                    placeholder = "Enter Email"
                                    placeholderTextColor = "rgba(0,0,0,0.5)"
                                    autoCapitalize = 'none'
                                    autoCorrect = {false}
                                    keyboardType = 'email-address'
                                    returnKeyType = "next"
                                />
                            </View>
                            
                            <View style = {styles.underLine}></View>
                        </View>




                        <Button style = {styles.loginBtn} disabled = {this.state.isLoading? true : false} transparent >
                            <Label style = {styles.loginBtnTxt}>Send</Label>
                            <Image source = {require('../../assets/right-arrow.png')} style = {styles.arrowImg}/>
                        </Button>

                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect()(ForgotPasswordScreen);
