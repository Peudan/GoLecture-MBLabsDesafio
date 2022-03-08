import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Event } from "../types/data";
// import { formatSec } from "../utils/time";

export default function EventItem({item}: {item: Event}) {
    return (
        <View style={styles.container}>
            <Text 
                style={styles.name}>{item.name}
            </Text>
            <Text 
                style={styles.days}>Data: {item.days}
            </Text>
            <Text 
                style={styles.hours}>Hora: {item.hours}
            </Text>
            <Text 
                style={styles.localization}>Localização: {item.localization}
            </Text>
            <Text 
                style={styles.preco}>Preço: {item.preco}
            </Text>
        </View>
    //   { children &&
    //     <View style={childStyles}>
    //       {children}
    //     </View>
    //   }
    // </View>
    )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "rgba(0,0,0, 0.1)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  days: {
    fontSize: 15,
  },
  hours: {
    fontSize: 15
  },
  localization: {
    fontSize: 15
  },
  preco: {
    fontSize: 15
  }
})