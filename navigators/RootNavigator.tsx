import * as React from 'react';
import Home from '@/screens/Home';
import Profile from '@/screens/Profile';
import { type NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile2Screen from '@/screens/Profile2Screen';
import Profile3Screen from '@/screens/Profile3Screen';
import Profile4Screen from '@/screens/Profile4Screen';
import Profile5Screen from '@/screens/Profile5Screen';

export type ScreenNames = [
    'Home', 
    'Home2', 
    'Home3', 
    'Home4', 
    'Home5', 
    'Home6', 
    'Home7', 
    'Home8', 
    'Home9', 
    'Home10', 
    'Home11', 
    'Home12',
    'Home13',
    'Home14',
    'Home15',
    'Home16',
    'Profile',
    'Profile2',
    'Profile3',
    'Profile4',
    'Profile5',
];

export type RootStackParamList = {
    Home: undefined;
    Home2: undefined;
    Home3: undefined;
    Home4: undefined;
    Home5: undefined;
    Home6: undefined;
    Home7: undefined;
    Home8: undefined;
    Home9: undefined;
    Home10: undefined;
    Home11: undefined;
    Home12: undefined;
    Home13: undefined;
    Home14: undefined;
    Home15: undefined;

    Profile: undefined;
    Profile2: undefined;
    Profile3: undefined;
    Profile4: undefined;
    Profile5: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                autoHideHomeIndicator: true,
                gestureEnabled: false
            }}
            initialRouteName="Home"
        >
            <Stack.Group>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home2"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home3"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home4"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home5"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home6"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home7"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home8"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home9"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home10"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home11"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
                <Stack.Screen
                    name="Home12"
                    component={Home}
                    options={{
                        animation: "none",
                    }}
                />
            </Stack.Group>

            <Stack.Group
                screenOptions={{
                    presentation: "transparentModal",
                }}
            >
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        animation: "none",
                        animationDuration: 1500
                    }}
                />
                <Stack.Screen
                    name="Profile2"
                    component={Profile2Screen}
                    options={{
                        animation: "slide_from_bottom",
                        animationDuration: 150,
                    }}
                />
                <Stack.Screen
                    name="Profile3"
                    component={Profile3Screen}
                    options={{
                        animation: "none"
                    }}
                />
                <Stack.Screen
                    name="Profile4"
                    component={Profile4Screen}
                    options={{
                        animation: "none"
                    }}
                />
                <Stack.Screen
                    name="Profile5"
                    component={Profile5Screen}
                    options={{
                        animation: "fade",
                        animationDuration: 150
                    }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default RootNavigator;
