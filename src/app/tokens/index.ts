export const tokens = {
  colors: {
    bgPrimary: "var(--color-bg-primary)",
    bgSecondary: "var(--color-bg-secondary)",
    textPrimary: "var(--color-text-primary)",
    textSecondary: "var(--color-text-secondary)",
    
    accentPrimary: "var(--color-accent-primary)",
    accentSuccess: "var(--color-accent-success)",
    accentError: "var(--color-accent-error)",
    
    borderPrimary: "var(--color-border-primary)",
  },
  spacing: {
    container: "clamp(1rem, 5vw, 2rem)",
    cardGap: "clamp(0.5rem, 2vw, 1rem)",
  },
  radius: {
    card: "12px",
    badge: "9999px",
  }
} as const;