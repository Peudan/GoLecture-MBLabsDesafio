import {useEffect} from 'react'
import { View, Text, Button, StyleSheet } from "react-native";
import { MontserratText } from "../components/styled/MontserratText";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function MenuScreen({navigation}: NativeStackHeaderProps){

    useEffect(() =>{
        console.log("Rending Menu Screeen");

        return () => console.log("Unmounting Menu Screen")
    }, [])

    return(
        <View>
            <Text style={styles.header}>Nome do Perfil</Text>
            <MontserratText>
                
            </MontserratText>
            <Button
                title="Editar Perfil"
                onPress={() => navigation.push("Perfil")}
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
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
    }
})