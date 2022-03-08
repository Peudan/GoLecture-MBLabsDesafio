// import { ColorSchemeName } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from "@react-navigation/native";

import InicioScreen from "../screens/InicioScreen";
import PalestraScreen from "../screens/PalestraScreen";
import IngressoScreen from "../screens/IngressoScreen";
import MenuScreen from "../screens/MenuScreen";
import MenuPerfil from "../screens/MenuPerfil";
// import MenuCompra from "../screens/MenuCompra";
// import MenuPagamento from "../screens/MenuPagamento";
// import MenuTermo from "../screens/MenuTermo";
// import MenuPrivacidade from "../screens/MenuPrivacidade";
// import MenuAjuda from "../screens/MenuAjuda";
// import MenuSair from "../screens/MenuSair";

import EventDetailScreen from '../screens/EventDetailScreen';

export default function Navigation() {
    return(
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="GoLecture!"
            component={BottomTabNavigator}
            options={{ headerShown: false}}
        />
        <Stack.Screen
            name="EventDetail"
            component={EventDetailScreen}
            options={{ title: "Info do Evento"}}
        />
        <Stack.Screen
            name="Perfil"
            component={MenuPerfil}
        />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Inicio">
      <BottomTab.Screen
        name="Palestra"
        component={PalestraScreen}
        options={{
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons 
              name="google-classroom"
              size={size}
              color={color}
            />
        }}
      />
      <BottomTab.Screen
        name="Ingresso"
        component={IngressoScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={size}
              color={color}
            />
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) =>
            <Entypo
              name="menu"
              size={size}
              color={color}
            />
        }}
      />
    </BottomTab.Navigator>
  )
}