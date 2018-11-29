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
    Animated, Image, TouchableOpacity, TextInput, 
} from 'react-native';
import styles from './styles';

class SignupScreen extends Component<{}>{
        static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            isLoading: false
        }
    }

    login(){
         this.props.navigation.goBack()
    }

    render(){
        return (
            <Container style={styles.container}>
                <Thumbnail square source={require('../../assets/Rectangle.png')} style={styles.background}/>
                <Content >
                    <View style = {styles.mainContainer}>
                        <Image source = {require('../../assets/logo.png')} style = {styles.logoImg}/>
                        <View style = {styles.inputItem1}>
                            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source = {require('../../assets/ic_user.png')} style = {styles.emailImg}/>
                                <TextInput
                                    style = {styles.inputTxt}
                                    onChangeText = { text => this.setState({ name: text })}
                                    value = {this.state.name}
                                    placeholder = "Name"
                                    placeholderTextColor = "rgba(0,0,0,0.5)"
                                    autoCapitalize = 'none'
                                    autoCorrect = {false}
                                    returnKeyType = "next"
                                />
                            </View>
                            <View style = {styles.underLine}></View>
                        </View>
                        <View style = {styles.inputItem2}>
                            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source = {require('../../assets/ic_email.png')} style = {styles.emailImg}/>
                                <TextInput
                                    style = {styles.inputTxt}
                                    onChangeText = { text => this.setState({ email: text })}
                                    value = {this.state.email}
                                    placeholder = "Email"
                                    placeholderTextColor = "rgba(0,0,0,0.5)"
                                    autoCapitalize = 'none'
                                    autoCorrect = {false}
                                    keyboardType = 'email-address'
                                    returnKeyType = "next"
                                />
                            </View>
                            <View style = {styles.underLine}></View>
                        </View>
                        <View style = {styles.inputItem2}>
                            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source = {require('../../assets/ic_password.png')} style = {styles.emailImg}/>
                                <TextInput
                                    ref = 'password'
                                    style = {styles.inputTxt}
                                    onChangeText = { text => this.setState({ password: text })}
                                    secureTextEntry
                                    value = {this.state.password}
                                    placeholder = "Password"
                                    placeholderTextColor = "rgba(0,0,0,0.5)"
                                    autoCapitalize = 'none'
                                    autoCorrect = {false}
                                />
                            </View>
                            <View style = {styles.underLine}></View>
                        </View>
                        <View style = {styles.forgotView}>
                            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source = {require('../../assets/ic_remember.png')} style = {styles.checkImg}/>
                                <Label style = {styles.rememberTxt}>I accept all terms and conditions.</Label>
                            </View>
                        </View>



                        <Button style = {styles.loginBtn} disabled = {this.state.isLoading? true : false} transparent>
                            <Label style = {styles.loginBtnTxt}>SIGNUP</Label>
                            <Image source = {require('../../assets/right-arrow.png')} style = {styles.arrowImg}/>
                        </Button>

                        {/*<Label style = {styles.signupTxt}>Already have an account? <Button transparent style={{marginTop: 20}}><Label style = {styles.signupTxt1}>Log In</Label></Button></Label>*/}



                        <View style = {{flexDirection: 'row', alignItems: 'center',}}>
                            <Label style = {styles.signupTxt}>Already have an account? </Label>
                            
                            <Button transparent style = {{ marginTop: 20}} onPress = {() => this.login()}>
                                <Label style = {styles.signupTxt1}>Log In</Label>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect()(SignupScreen);