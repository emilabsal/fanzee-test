export namespace Tags {
  export interface Props {
    rating: number
    genre: string
    duration: string
  }

  export type RatingStatus = 'red' | 'purple' | 'green'
}
