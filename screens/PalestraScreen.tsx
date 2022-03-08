// import {useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { MontserratText } from "../components/styled/MontserratText";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import EventItem from "../components/EventItem";
import { useEvents } from "../hooks/useEvents"


export default function PalestraScreen({navigation}: NativeStackHeaderProps){
const events = useEvents();


    return(
        <View style={styles.container}>
            <MontserratText style={{fontSize: 30}}>
                New Events
            </MontserratText>

            <FlatList
                data={events}
                renderItem={({item}) => {
                    return(
                        <Pressable
                            onPress={() => 
                                navigation.navigate("EventDetail", {slug: item.slug})
                            }
                        >
                            <EventItem
                                item={item}
                            />
                        </Pressable>
                    )
                }}
                keyExtractor={item => item.slug}
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
        fontWeight: "bold"
    }
})