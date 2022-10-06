import * as React from 'react';

import { View, Text, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../sacreen/Home';
import { About } from '../sacreen/About';
import RnCamera from '../sacreen/RnCamera';

import { Contect } from '../sacreen/contant';
import Cemera from '../sacreen/camera';
import { Gellery } from '../sacreen/gallery';
import Map from '../../Map';
const Stack = createNativeStackNavigator();

function Navigatuon() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        height: 140,
                        title: 'My Home',
                        // headerRight: () => (
                        //     <Button
                        //         onPress={() => alert('This is a button!')}
                        //         title='Info'
                        //         color='red'
                        //     />
                        // ),
                        // headerTitle: (props) => (
                        //     <Image
                        //         source={{
                        //             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwDpwH9iUblEH7e6bKJK_Z8neX-M_q8WR4A&usqp=CAU',
                        //         }}
                        //         style={{
                        //             height: 50,
                        //             width: 100,
                        //             // borderRadius: 50,
                        //             resizeMode: 'contain',
                        //         }}
                        //     />
                        // ),
                        headerStyle: {
                            // backgroundColor: '#f4511e',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name='About'
                    component={About}
                    options={{
                        height: 140,
                        title: 'About',

                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title='Info'
                                color='red'
                            />
                        ),

                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name='Contect' component={Contect} />
                <Stack.Screen name='Cemera' component={Cemera} />
                <Stack.Screen name='Gellery' component={Gellery} />
                <Stack.Screen name='Map' component={Map} />
                <Stack.Screen name='RnCamera' component={RnCamera} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { Navigatuon };
