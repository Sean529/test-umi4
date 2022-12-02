const unit = 'px'

const getPxRange = (min, max, step = 1) => {
  const obj = {}
  for (let i = min; i <= max; i += step) {
    obj[i] = `${i}${unit}`
  }
  return obj
}

const getGrayRange = (min, max, step = 1) => {
  const obj = {}
  for (let i = min; i <= max; i += step) {
    obj[i] = `#${i}${i}${i}${i}${i}${i}`
  }
  return obj
}

module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/layouts/**.tsx', './src/common/utils/index.ts'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      gray: getGrayRange(0, 9),
      white: '#ffffff',
      black: '#000000',
      pageBg: '#f8f8f8',
    },
    keyframes: {
      screwdriver: {
        '0%': { bottom: 0 },
        '100%': { bottom: '94px' },
      },
    },
    animation: {
      toast: 'screwdriver 0.5s ease-in-out forwards',
    },
    margin: {
      auto: 'auto',
      ...getPxRange(0, 500),
    },
    padding: {
      safe: 'env(safe-area-inset-bottom)',
      ...getPxRange(0, 500),
    },
    height: {
      screen: '100vh',
      full: '100%',
      auto: 'auto',
      ...getPxRange(0, 800),
    },
    width: {
      screen: '100vw',
      full: '100%',
      auto: 'auto',
      ...getPxRange(0, 800),
    },
    borderRadius: {
      full: '100%',
      ...getPxRange(0, 100),
    },
    fontSize: getPxRange(10, 80),
    lineHeight: {
      none: 1,
      ...getPxRange(1, 100),
    },
    minHeight: {
      screen: '100vh',
      full: '100%',
      auto: 'auto',
      ...getPxRange(0, 800),
    },
    minWidth: {
      screen: '100vw',
      full: '100%',
      auto: 'auto',
      ...getPxRange(0, 800),
    },
    spacing: getPxRange(0, 1000),
    backdropBlur: getPxRange(0, 20),
    borderWidth: {
      3: '3px',
      ...getPxRange(0, 50),
    },
  },
  plugins: [],
}
