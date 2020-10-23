import React,{  Component } from 'react';
import { Text, 
         View, 
         TouchableOpacity, 
         TextInput, 
         StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'

export default class homeScreen extends Component {
    constructor(){
        super();
        this.state = {
            text: '',
            word : '',
            type : '',
            def : ''
        }
    }

    getWord = (text)=>{
        text.toLowerCase()
        var apiLink = 'https://whitehat-dictionary.glitch.me/?word='+text
        console.log(apiLink)
        fetch(apiLink)
        .then((response)=>response.json())
        .then(type, definition =>{
            this.setState({
                type : type,
                def : definition
            })
        })
    }

    render(){
        return(
            <View>
                <View>
                <Header
                backgroundColor = {'#00edb1'}
                centerComponent = {{text : 'Dictionary App', 
                style : {color : '#fff' , fontSize : 20}}}
                />
                </View>

                <View>
                    <TextInput
                    onChangeText = {(text)=>{
                    this.setState({
                    text : text
                    })
                    }}
                    value = {this.state.text}
                    />
                    <TouchableOpacity
                    onPress = {() => {
                        this.getWord(this.state.text)
                    }}
                    >
                        <Text>Search</Text>
                    </TouchableOpacity>
                <Text>Word : {this.state.text}</Text>
                <Text>Type : {this.state.type}</Text>
                <Text>Definition : {this.state.def}</Text>
                </View>
            </View>
        )
    }
} 