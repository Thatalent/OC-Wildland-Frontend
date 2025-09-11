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
