import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            num1: '',
            num2: '',
            result: '0' 
        };

        this.calcular = this.calcular.bind(this);
    }

    calcular(){
        Alert.alert('Soma Realizada');
        let result = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        this.setState({ result: result.toString()});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Hello There!</Text>

                <View>
                    <TextInput placeholder="Valor 1" style={styles.inputs} onChangeText={(text) => this.setState({ num1: text})} keyboardType="numeric"></TextInput>
                    <TextInput placeholder="Valor 2" style={styles.inputs} onChangeText={(text) => this.setState({ num2: text})} keyboardType="numeric"></TextInput>
                </View>

                <View style={styles.button}>
                    <Button onPress={this.calcular} title="Press Me" color="#f77"/>
                </View>

                <Text style={styles.textButton}>{this.state.result}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },

    header: {
        margin: 30,
        alignSelf: 'center',
        fontSize: 40,
    },

    inputs: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 20,
        fontSize: 20,
    },

    button: {
        marginHorizontal: 20,
        marginVertical: 20,
    },

    textButton: {
        alignSelf: 'center',
        fontSize: 30,
        padding: 20,
    },
});
