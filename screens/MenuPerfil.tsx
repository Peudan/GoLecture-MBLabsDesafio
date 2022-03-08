import {useEffect} from 'react'
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function MenuPerfil({navigation}: NativeStackHeaderProps){

    useEffect(() =>{
        console.log("Rending Menu Perfil");

        return () => console.log("Unmounting Menu Perfil")
    }, [])

    return(
        <View>
            <Text> I am Menu Perfil </Text>
            {/* <Button
                title="Editar Perfil"
                // onPress={() => navigation.push("Perfil")}
            />
            <Button
                title="Minhas Compras"
                // onPress={() => navigation.push("Perfil")}
            />
            <Button
                title="Métodos de pagamento"
                // onPress={() => navigation.push("Perfil")}
            />
            <Button
                title="Termos de uso"
                // onPress={() => navigation.push("Perfil")}
            />
            <Button
                title="Política de privacidade"
                // onPress={() => navigation.push("Perfil")}
            />
            <Button
                title="Ajuda"
                // onPress={() => navigation.push("Perfil")}
            />
            <Button
                title="Sair"
                // onPress={() => navigation.push("Perfil")}
            /> */}
        </View>
    )
}