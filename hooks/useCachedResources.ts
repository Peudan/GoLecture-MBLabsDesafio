import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { initEvents } from "../storage/event";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // const hasEvents = await containsKey("event-data");
        // if (!hasEvents) {
        //   console.log("Storing Data")
        //   await storeData("event-data", data)
        // }
        await initEvents();
        console.log("Storing Data")
        await Font.loadAsync({
          "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        })
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
}, [])

    return isLoadingComplete;
}