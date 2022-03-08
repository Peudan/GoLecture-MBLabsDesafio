export type Slug = "job-events" | "mblabs-events" | "faculdade-events"

export interface Event {
  slug: Slug,
  name: string,
  days: string,
  hours: string,
  localization: string,
  preco: string
}
