import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'
import React,{Component} from 'react'
import BottomItem from './BottomNavItem'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Ionicons from 'react-native-vector-icons/AntDesign'
const Tabs = {
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Ionicons
                    name={'pluscircle'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: '搜索',
            tabBarIcon: ({tintColor}) => (
                <Ionicons
                    name={'plus'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor}) => (
                <Ionicons
                    name={'creditcard'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Ionicons
                    name={'mail'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
};
export default class Bottom extends Component{
    _getTabs(){
        const {Page1,Page2,Page3} = Tabs;
        const TabC = {Page1,Page2,Page3};
        const Bottom = createBottomTabNavigator(TabC,{
            tabBarComponent:BottomItem
        });
        return createAppContainer(Bottom);
    }
    render(){
        const TabNav = this._getTabs();
        return <TabNav/>
    }
}

