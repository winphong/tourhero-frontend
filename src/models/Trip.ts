import type { Tour } from './Tour'

export enum TripStatus {
  CANCELLED = 'CANCELLED',
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
}

export interface Trip {
  id: string
  description: string
  startDate: Date
  endDate: Date
  numOfDays: number
  numOfNights: number
  status: TripStatus
  currency: string
  tourId: string
  tour: Tour
  createdAt: Date
  updatedAt: Date
}
