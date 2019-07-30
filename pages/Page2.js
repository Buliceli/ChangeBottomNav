import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
export default class Page2 extends Component{
    render(){
        const navigation = this.props.navigation;
     return    <View style={styles.container}>
            <Text>Page2</Text>
         <Button
             title='改变主题色'
             onPress={() => {
                 navigation.setParams({
                     theme: {
                         tintColor: 'cyan',
                         updateTime: new Date().getTime()
                     }
                 });
             }}
         >
         </Button>
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        marginTop:50
    }
});