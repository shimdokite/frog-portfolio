import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ink: '#20160f',
        muted: '#6e5847',
        accent: '#d75d39',
        'accent-deep': '#8f3418'
      },
      boxShadow: {
        soft: '0 20px 70px rgba(81, 43, 21, 0.12)'
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          'SUIT Variable',
          'sans-serif'
        ]
      }
    }
  }
}
