import { CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { BrandingContext, type BrandingContextValue } from './BrandingContext'
import { getBrandingGlobalStyles, portfolioGlobalStyles } from './brandingStyles'
import {
  BRANDING_THEME_STORAGE_KEY,
  brandingDarkTheme,
  brandingLightTheme,
  type BrandingMode,
} from './brandingTheme'

function getInitialMode(): BrandingMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.localStorage.getItem(BRANDING_THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light'
}

export function BrandingProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<BrandingMode>(getInitialMode)
  const theme = mode === 'dark' ? brandingDarkTheme : brandingLightTheme

  useEffect(() => {
    document.documentElement.dataset.theme = mode
    window.localStorage.setItem(BRANDING_THEME_STORAGE_KEY, mode)
  }, [mode])

  const value = useMemo<BrandingContextValue>(
    () => ({
      mode,
      theme,
      setMode,
      toggleMode: () => setMode((current) => (current === 'light' ? 'dark' : 'light')),
    }),
    [mode, theme],
  )

  return (
    <BrandingContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={getBrandingGlobalStyles} />
        <GlobalStyles styles={portfolioGlobalStyles} />
        {children}
      </ThemeProvider>
    </BrandingContext.Provider>
  )
}
