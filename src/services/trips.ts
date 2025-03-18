import type { Trip } from '@/models/Trip'
import type { TripGuest } from '@/models/TripGuest'
import axios from './axios'

export type TripDto = TripGuest & {
  Trip: Trip
  totalPriceInCents: number
  utilizationInCents: number
}

export const fetchTrip = async (offset: number) => {
  return await axios.get<TripDto>(`/v1/trip/details?offset=${offset}`)
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

export const fetchAvailableAddons = async (offset: number) => {
  return await axios.get<TripAddonsDto[]>(`/v1/trip/addons?offset=${offset}`)
}

export const checkout = async (requestBody: unknown) => {
  return await axios.post('/v1/checkout', requestBody)
}
