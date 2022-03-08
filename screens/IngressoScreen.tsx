import {useEffect} from 'react'
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function IngressoScreen({navigation}: NativeStackHeaderProps){

    useEffect(() =>{
        console.log("Rending Ingresso Screeen");

        return () => console.log("Unmounting Ingresso Screen")
    }, [])

    return(
        <View>
            <Text> I am Ingresso Screen </Text>
            {/* <Button
                title="Go to Test"
                onPress={() => navigation.push("Test")}
            /> */}
        </View>
    )
}