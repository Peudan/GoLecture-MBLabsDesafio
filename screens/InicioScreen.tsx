import {useEffect} from 'react'
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function InicioScreen({navigation}: NativeStackHeaderProps){

    useEffect(() =>{
        console.log("Rending Inicio Screeen");

        return () => console.log("Unmounting Inicio Screen")
    }, [])

    return(
        <View>
            <Text> I am Inicio Screen </Text>
            {/* <Button
                title="Go to Palestra"
                onPress={() => navigation.navigation("PalestraScreen")}
            /> */}
        </View>
    )
}