import { useEffect, useState } from "react";
import { getEventBySlug } from "../storage/event";
import { Event } from "../types/data";

export const useEventBySlug = (slug: string) => {
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    async function getData() {
      const _event = await useEventBySlug(slug);
      setEvent(_event);
    }

    getData();
  }, [])

  return event;
}