import { extendTheme } from '@chakra-ui/react';

// Global 테마 정의
const GlobalStyle = extendTheme({
  fonts: {
    body: `"Noto Sans KR", serif, Nanum Gothic, Malgun Gothic, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue`,
  },
  colors: {
    /**
     * Global Color 선언
     * 사용 : 'color.색상이름'
     */
    color: {
      basic: '#2e2e2e',
      white: '#fff',
      gray: '#909090',
      primary: '#C69090',
      secondary: '#F6E4E4',
      whiteGray: '#F2F2F2',
    },
  },
  lineHeights: {
    loose: 1.75,
    normal: 1.5,
    dense: 1.1,
  },
  space: {
    1: '4px',
    2: '8px',
    3: '16px',
    4: '24px',
    5: '32px',
    6: '64px',
  },
  sizes: {
    content: '54rem',
    gutter: '32px',
    gap: '64px',
  },
  styles: {
    global: {
      '@font-face': {
        fontFamily: 'Noto Sans KR',
        src: `url(''https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap'') format('woff')`,
        fontWeight: '500, 700, 900',
        fontStyle: 'normal',
        fontOpticalSizing: 'auto',
      },
      body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: `'Noto Sans KR', sans-serif`,
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
  },
});

export default extendTheme(GlobalStyle);
