import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { WalkStyle } from "../styles/WalkStyle";
import theme, { WHITE } from "../constant/theme";


const DashboradScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={WalkStyle.dashboardContainer}>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <Text>hdhhd</Text>
        </SafeAreaView>
    )
};
export default DashboradScreen;