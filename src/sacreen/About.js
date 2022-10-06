import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    FlatList,
    Dimensions,
    ImageBackground,
    ActivityIndicator,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from '../sacreen/Home';
// import { About } from '../sacreen/About';

import { Contect } from '../sacreen/contant';
const Tab = createBottomTabNavigator();
function About({ navigation, route }) {
    const { image, Name } = route.params;
    const value = 7;
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'settings') {
                        iconName = focused ? 'ios-list-circle' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{ tabBarBadge: 3 }}
            />
            <Tab.Screen name='settings' component={Contect} />
            {/* <Stack.Screen name='Cemera' component={Cemera} /> */}
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { About };
