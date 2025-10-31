import { useState, useEffect } from 'react'
import { ApolloError } from '@apollo/client'

// Custom hook for handling loading states
export function useAsyncState<T>(
  initialState: T
): [T, (state: T | ((prevState: T) => T)) => void, boolean] {
  const [state, setState] = useState<T>(initialState)
  const [loading, setLoading] = useState(false)

  const setAsyncState = (newState: T | ((prevState: T) => T)) => {
    setLoading(true)
    setState(newState)
    setLoading(false)
  }

  return [state, setAsyncState, loading]
}

// Error handling utility
export function handleApolloError(error: ApolloError): string {
  if (error.networkError) {
    return 'Network error occurred. Please check your connection.'
  }

  if (error.graphQLErrors.length > 0) {
    return error.graphQLErrors[0].message
  }

  return 'An unexpected error occurred.'
}

// Format date utility
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Format date as MM/DD/YYYY (e.g. 10/24/2025). Accepts ISO yyyy-mm-dd or other date strings.
// Format date as MM/DD/YYYY (e.g. 10/24/2025).
// Accepts a Date object or an ISO yyyy-mm-dd string. Prefer passing a Date to avoid
// timezone-related off-by-one issues when converting to/from strings.
export function formatMMDDYYYY(dateInput: string | Date | undefined | null): string {
  if (!dateInput) return ''
  let d: Date
  if (dateInput instanceof Date) {
    d = dateInput
  } else {
    d = new Date(dateInput)
  }
  if (Number.isNaN(d.getTime())) return ''
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const yy = d.getFullYear()
  return `${mm}/${dd}/${yy}`
}

// Debounce utility for search inputs
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
