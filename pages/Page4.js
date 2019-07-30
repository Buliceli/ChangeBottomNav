import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Page4 extends Component {
    render() {
        return <View style={styles.container}>
            <Text>Page4</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop:50
    }
});