/**
 * Motion Configuration - Dott. Mario Colombo
 * Varianti di animazione riutilizzabili con Framer Motion
 */

import { Variants } from 'framer-motion'

// Durate standard
export const durations = {
  micro: 0.2,        // 200ms - micro-interazioni
  fast: 0.3,         // 300ms - transizioni rapide
  normal: 0.4,       // 400ms - animazioni standard
  slow: 0.6,         // 600ms - animazioni scroll
  slower: 0.8,       // 800ms - animazioni complesse
}

// Easing functions
export const easings = {
  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
}

// Varianti comuni
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.micro,
      ease: easings.easeOut,
    },
  },
}

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
}

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
}

export const slideInBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
}

// Stagger container per animazioni sequenziali
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Stagger più veloce per liste
export const staggerFast: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// Hover variants per bottoni
export const scaleOnHoverButton = {
  scale: 1.03,
  transition: {
    duration: durations.micro,
    ease: easings.easeOut,
  },
}

export const scaleOnTapButton = {
  scale: 0.97,
  transition: {
    duration: durations.micro,
    ease: easings.easeOut,
  },
}

// Shake animation per errori form
export const shake: Variants = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
}

// Rotate per icone (es. accordion)
export const rotate: Variants = {
  closed: {
    rotate: 0,
    transition: {
      duration: durations.micro,
      ease: easings.easeInOut,
    },
  },
  open: {
    rotate: 180,
    transition: {
      duration: durations.micro,
      ease: easings.easeInOut,
    },
  },
}

// Accordion variants
export const accordionVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: durations.fast,
        ease: easings.easeInOut,
      },
      opacity: {
        duration: durations.micro,
      },
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: durations.fast,
        ease: easings.easeInOut,
      },
      opacity: {
        duration: durations.micro,
        delay: 0.1,
      },
    },
  },
}

// Parallax variants
export const parallaxVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -20,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
}

// Timeline step variants
export const timelineStep: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
}

// Modal variants
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.micro,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: durations.micro,
      ease: easings.easeInOut,
    },
  },
}

// Toast variants
export const toastVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: durations.micro,
      ease: easings.easeInOut,
    },
  },
}

// Toast slide from right
export const toastSlideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    transition: {
      duration: durations.micro,
      ease: easings.easeInOut,
    },
  },
}

