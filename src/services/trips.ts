import type { Trip } from '@/models/Trip'
import type { TripGuest } from '@/models/TripGuest'
import axios from './axios'

export type TripDto = TripGuest & {
  Trip: Trip
  totalPriceInCents: number
  utilizationInCents: number
}

export const fetchTrip = async () => {
  return await axios.get<TripDto>('/v1/trip/details')
}

export interface TripAddonsDto {
  id: string
  name: string
  description: string
  type: string
  startTime: string | null
  endTime: string | null
  priceInCents: number
  limit: number
  tripId: string
}

export const fetchAvailableAddons = async () => {
  return await axios.get<TripAddonsDto[]>('/v1/trip/addons')
}
