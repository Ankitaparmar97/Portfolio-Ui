import type { Theme } from '@mui/material/styles'
import { createContext, useContext } from 'react'
import type { BrandingMode } from './brandingTheme'

export type BrandingContextValue = {
  mode: BrandingMode
  theme: Theme
  setMode: (mode: BrandingMode) => void
  toggleMode: () => void
}

export const BrandingContext = createContext<BrandingContextValue | null>(null)

export function useBranding(): BrandingContextValue {
  const context = useContext(BrandingContext)

  if (!context) {
    throw new Error('useBranding must be used within BrandingProvider')
  }

  return context
}
