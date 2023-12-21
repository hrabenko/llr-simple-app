import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import MenuItems from "./components/MenuItems";

export default function App() {
    const Drawer = createDrawerNavigator();

    return (
        <>
            <NavigationContainer>
                <View style={styles.container}>
                    <LittleLemonHeader/>
                    <Drawer.Navigator
                        screenOptions={({route}) => ({
                            tabBarIcon: ({size}) => {
                                let iconName;
                                if (route.name === 'Welcome') {
                                    iconName = 'ios-home';
                                } else if (route.name === 'Login') {
                                    iconName = 'ios-enter';
                                }
                                return <Ionicons name={iconName} size={size}/>;
                            },
                        })}
                        initialRouteName="Login">
                        <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
                        <Drawer.Screen name="Login" component={LoginScreen}/>
                        <Drawer.Screen name="Menu" component={MenuItems}/>
                    </Drawer.Navigator>
                </View>
                <View style={styles.footerContainer}>
                    <LittleLemonFooter/>
                </View>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    footerContainer: {backgroundColor: '#333333'},
});

