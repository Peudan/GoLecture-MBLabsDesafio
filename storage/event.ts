import { containsKey, storeData, getData, removeItem } from ".";
import data from "../data.json";
import { Event } from "../types/data";

export const getEvents = async (): Promise<Event[]> => {
  const events = await getData("event-data");
  return events;
}

export const getEventBySlug = async (slug: string): Promise<Event> => {
  const events = await getEvents();
  const event = events.filter(w => w.slug === slug)[0]
  return event;
}

export const initEvents = async (): Promise<boolean> => {
  const hasEvents = await containsKey("event-data");
  if (!hasEvents) {
    await storeData("event-data", data);
    return true
  }

  return false;
}

// export const storeWorkout = async (newWorkout: Workout): Promise<boolean> => {
//   const workouts = await getWorkouts();
//   await storeData("workout-data", [newWorkout, ...workouts]);
//   return true;
// }

export const clearEvents = async () => {
  await removeItem("event-data");
}