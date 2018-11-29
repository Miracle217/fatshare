import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Input,
    Label,
    Item,
    View
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import {
    Animated
} from 'react-native';

class AnimatedInput extends Component<{}>{
    constructor(props){
        super(props);

        this.state = {
            x: new Animated.Value(-25),
            scale: new Animated.Value(0),
            width: 0,
            isFocused: false
        }
    }

    onFocus(){
        this.setState({
            isFocused: true
        });

        Animated.sequence([
            Animated.timing(
                this.state.scale,
                {
                    toValue: 1,
                    duration: 500
                }
            ),
            Animated.timing(
                this.state.x,
                {
                    toValue: this.state.width - 50,
                    duration: 500
                }
            ),
            Animated.timing(
                this.state.scale,
                {
                    toValue: this.state.width / 25,
                    duration: 500
                }
            )
        ]).start();
    }

    onLayout(event){
        this.setState({
            width: event.nativeEvent.layout.width
        });
    }

    onBlur(){
        this.setState({
            isFocused: false,
            x: new Animated.Value(-25),
            scale: new Animated.Value(0)
        });
    }

    render(){
        return (
            <Item stackedLabel style={styles.item} onLayout={(event) => this.onLayout(event)}>
                {!this.state.isFocused?
                <Label style={styles.inputLabel}>{this.props.label}</Label>:
                <Label style={styles.inputActiveLabel}>{this.props.label}</Label>
                }
                <Input placeholder={this.props.label} placeholderTextColor="rgba(255,255,255,0.5)" style={styles.input} onFocus={() => this.onFocus()} onBlur={() => this.onBlur()}/>
                <View style={[styles.itemDivider, {width: this.state.width}]}>
                    {this.state.isFocused?
                    <Animated.View style={[styles.itemIndicator, {transform: [{translateX: this.state.x}, {scaleX: this.state.scale}]}]}/>: null}
                </View> 
            </Item>
        );
    }
}

export default connect()(AnimatedInput);