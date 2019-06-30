import React from 'react';
import {Text,View,Button} from 'react-native';

export default class StockDetails extends React.Component{
    goToStockFormScreen = () =>{
        this.props.navigation.navigate('StockForm');
    };

    render(){
        return(
            <View>
                <Text> Stock Details Screen </Text>
                <Button
                    onPress={this.goToStockFormScreen}
                    title="Go To Stock Form Screen"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}