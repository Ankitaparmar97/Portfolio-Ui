import { createTheme, type ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: {
      blue: string
      lime: string
    }
  }

  interface PaletteOptions {
    accent?: {
      blue: string
      lime: string
    }
  }
}

export const brandingColors = {
  white: '#ffffff',
  black: '#000000',
  blue: '#15b9f4',
  lime: '#c0fe04',
  limeRgb: '192, 254, 4',
} as const

export const brandingPalette = {
  primary: brandingColors.white,
  secondary: brandingColors.black,
  accentBlue: brandingColors.blue,
  accentLime: brandingColors.lime,
} as const

export type BrandingMode = 'light' | 'dark'

export const BRANDING_THEME_STORAGE_KEY = 'pixel-avenue-theme'

export function getDesignTokens(mode: BrandingMode): ThemeOptions {
  const isDark = mode === 'dark'

  return {
    palette: {
      mode,
      primary: {
        main: brandingPalette.primary,
        contrastText: brandingPalette.secondary,
      },
      secondary: {
        main: brandingPalette.secondary,
        contrastText: brandingPalette.primary,
      },
      accent: {
        blue: brandingPalette.accentBlue,
        lime: brandingPalette.accentLime,
      },
      background: {
        default: isDark ? brandingColors.black : brandingColors.white,
        paper: isDark ? '#141414' : '#f5f5f5',
      },
      text: {
        primary: isDark ? brandingColors.white : brandingColors.black,
        secondary: isDark ? 'rgba(255, 255, 255, 0.66)' : 'rgba(0, 0, 0, 0.62)',
      },
      divider: isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.14)',
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: '"Bricolage Grotesque", "Trebuchet MS", sans-serif',
      h1: { fontFamily: '"Bricolage Grotesque", "Trebuchet MS", sans-serif' },
      h2: { fontFamily: '"Bricolage Grotesque", "Trebuchet MS", sans-serif' },
      h3: { fontFamily: '"Bricolage Grotesque", "Trebuchet MS", sans-serif' },
      h4: { fontFamily: '"Bricolage Grotesque", "Trebuchet MS", sans-serif' },
      h5: { fontFamily: '"Bricolage Grotesque", "Trebuchet MS", sans-serif' },
      h6: { fontFamily: '"Bricolage Grotesque", "Trebuchet MS", sans-serif' },
      button: {
        fontFamily: 'inherit',
        textTransform: 'none',
      },
    },
    components: {
      MuiCssBaseline: {
        defaultProps: {
          enableColorScheme: true,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
        },
      },
    },
  }
}

function createBrandingTheme(mode: BrandingMode) {
  return createTheme(getDesignTokens(mode))
}

export const brandingLightTheme = createBrandingTheme('light')
export const brandingDarkTheme = createBrandingTheme('dark')
