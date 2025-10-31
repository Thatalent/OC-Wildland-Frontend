// TypeScript types for your GraphQL schema
// Replace these with your actual schema types

export interface Wildland {
  id: string
  name: string
  location: string
  status: WildlandStatus
  description?: string
  area?: number
  riskLevel?: RiskLevel
  createdAt: string
  updatedAt: string
}

export enum WildlandStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  MAINTENANCE = 'MAINTENANCE',
  ALERT = 'ALERT'
}

export enum RiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export interface CreateWildlandInput {
  name: string
  location: string
  status?: WildlandStatus
  description?: string
  area?: number
  riskLevel?: RiskLevel
}

export interface UpdateWildlandInput {
  name?: string
  location?: string
  status?: WildlandStatus
  description?: string
  area?: number
  riskLevel?: RiskLevel
}
