import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Page3 extends Component {
    render() {
        return <View style={styles.container}>
            <Text>Page3</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
});