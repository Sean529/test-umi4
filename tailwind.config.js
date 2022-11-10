module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**.tsx', './src/layouts/**.tsx', 
  './src/utils.ts'],
  theme: {
    fontFamily: {
      'b-Bold': 'Barlow-Bold',
      'b-Medium': 'Barlow-Medium',
      'b-Regular': 'Barlow-Regular',
      'b-SemiBold': 'Barlow-SemiBold',
      'b-Black': 'Barlow-Black',
      'b-ExtraBold': 'Barlow-ExtraBold',
      'bv-SemiBold': 'BeVietnamPro-SemiBold',
      'bv-Regular': 'BeVietnamPro-Regular',
      'bv-Bold': 'BeVietnamPro-Bold',
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
  },
  plugins: [],
}
