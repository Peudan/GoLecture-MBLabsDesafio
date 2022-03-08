import { View, Text, StyleSheet, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEventBySlug } from "../hooks/useEventBySlug";
// import { Modal } from "../components/styled/Modal";
// import { PressableText } from "../components/styled/PressableText";
// import { formatSec } from "../utils/time";
// import { FontAwesome } from "@expo/vector-icons";
// import WorkoutItem from "../components/WorkoutItem";
// import { useEffect, useState } from "react";
// import { SequenceItem } from "../types/data";
// import { useCountDown } from "../hooks/useCountDown";


type DetailParams = {
    route: {
        params: {
            slug: string
        }
    }
}

type Navigation = NativeStackHeaderProps & DetailParams


export default function EventDetailScreen({route}: Navigation){
    
    const event = useEventBySlug(route.params.slug);

    if (!event){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.header}>
                {event.name}
            </Text>
            <Pressable onPress={() => alert("Opening Modal")}>
                <Text style={{textDecorationLine: "underline"}}>
                    Check Sequence
                </Text>
            </Pressable>
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
        // fontWeight: "bold",
    }
})