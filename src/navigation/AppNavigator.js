import { createStackNavigator, createAppContainer } from "react-navigation";
import StockDetails from "../screens/StockDetails";
import StockForm from "../screens/StockForm";

//app navigation goes here
const AppNavigator = createStackNavigator({
    StockDetails: {
        screen: StockDetails
    },
    StockForm:{
        screen: StockForm
    }
});

export default createAppContainer(AppNavigator);