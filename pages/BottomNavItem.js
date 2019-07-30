import React,{Component} from 'react'
import {BottomTabBar} from 'react-navigation-tabs'

export default class BottomNavItem extends BottomTabBar{
    constructor(props){
        super(props);
        this.theme = {
            tintColor:this.props.navigation.activeTintColor,
            updateTime:new Date().getTime()
        }
    }
    render(){
        const navigation = this.props.navigation;
        const {routes,index} = navigation.state;

        if (routes[index].params){
            const {theme} = routes[index].params;

            if (theme && theme.updateTime > this.theme.updateTime){

                this.theme = theme;

            }
        }
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.theme.tintColor || navigation.activeTintColor}
        />

    }
}