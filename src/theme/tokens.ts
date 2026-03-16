// Copin Design System — Token Constants
// Source: SKILL.md §4 · Do not modify without updating SKILL.md

export const colors = {
  // Surface layers
  bgPage:   '#0B0E18',  // n-7 — page background, darkest
  bgPanel:  '#101423',  // n-6 — panel / sidebar / card surface
  bgRaised: '#1F2232',  // n-5 — hover / active / focused input bg ONLY (not base panels)
  border:   '#313856',  // n-4 — borders / dividers

  // Text
  textMuted:     '#777E90',  // n-3 — placeholder / disabled / muted
  textSecondary: '#C0C0C9',  // n-2 — labels / secondary text
  textPrimary:   '#FCFCFD',  // n-1 — primary text

  // Primary (interactive)
  primary:      '#4EAEFD',
  primaryHover: '#97CFFD',

  // Semantic — STRICT meaning, never decorative
  profit:        '#38D060',  // green-1 — profit / long / success
  profitHover:   '#6DD488',  // green-2
  profitDark:    '#2B9948',  // green-3
  loss:          '#FA5547',  // red-1   — loss / short / error
  lossHover:     '#FA7B70',  // red-2
  lossDark:      '#BC2B1F',  // red-3
  warning:       '#FFC24B',  // orange-1 — warning / leverage
  warningLight:  '#FCEFD1',  // orange-2
  warningDark:   '#CB8D14',  // orange-3

  // Tints (for bg on semantic elements)
  tintPrimary: 'rgba(78,174,253,0.10)',
  tintProfit:  'rgba(56,208,96,0.10)',
  tintLoss:    'rgba(250,85,71,0.10)',
  tintWarning: 'rgba(255,194,75,0.10)',

  // Overlay
  overlay: 'rgba(0,0,0,0.75)',
} as const

export const font = "'ABC Social Mono', 'JetBrains Mono', 'Fira Code', monospace"

// Copin AI interfaces only — use Manrope, not ABC Social Mono
export const fontAI = "'Manrope', sans-serif"

export const shadows = {
  sm:      '0 2px 4px rgba(119,126,144,0.05)',
  md:      '0 4px 8px rgba(119,126,144,0.05)',
  lg:      '0 8px 16px rgba(119,126,144,0.10)',   // dropdown / tooltip
  xl:      '0 16px 32px rgba(119,126,144,0.10)',  // modal
  xxl:     '0 32px 48px rgba(119,126,144,0.10)',  // overlay
} as const

export const gradients = {
  primary:     'linear-gradient(135deg, #4EAEFD, #008CFF)',   // primary CTA
  dark:        'linear-gradient(135deg, #272C43, #0B0D17)',   // dark surface
  premium:     'linear-gradient(135deg, #ABECA2, #2FB3FE, #6A8EEA, #A185F4)', // PREMIUM ONLY
  leaderboard: 'linear-gradient(135deg, #FFC24B, #02FFE8)',   // top-tier rank
} as const

// Border radius — layout panels ALWAYS 0
export const radius = {
  none:    '0px',
  input:   '2px',
  button:  '4px',
  modal:   '8px',
  full:    '9999px',
} as const

// Spacing scale (4px base)
export const spacing = {
  xs:  '2px',
  sm:  '4px',
  md:  '8px',
  lg:  '12px',
  xl:  '16px',
  '2xl': '20px',
  '3xl': '24px',
  '4xl': '32px',
  '5xl': '40px',
  '6xl': '48px',
  '7xl': '64px',
} as const
