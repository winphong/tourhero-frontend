export interface TripGuest {
  id: string
  tripId: string
  userId: string
  priceAtBookingInCents: number
  createdAt: Date
}
