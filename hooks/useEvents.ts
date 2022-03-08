import { useEffect, useState } from "react";
import { getEvents } from "../storage/event";
import { Event } from "../types/data";
import { useIsFocused } from "@react-navigation/native";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getData() {
      const _events = await getEvents();
      setEvents(_events);
    }

    if (isFocused){
        getData();
    }
  }, [isFocused])

  return events;
}