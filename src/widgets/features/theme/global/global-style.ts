import { extendTheme, space } from '@chakra-ui/react';

export const GlobalTheme = extendTheme({
  // Font Family 선언
  fonts: {
    body: `'Pretendard-Regular', sans-serif`,
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
  black: {
    100: '#2e2e2e',
    200: '#333',
    300: '#666',
    400: '#909090',
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
  size: {
    content: '54rem',
    gutter: space[5],
    gap: space[6],
  },
  styles: {
    // Global Font Face 선언
    global: {
      '@font-face': {
        fontFamily: 'Pretendard-Regular',
        src: `url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff')`,
        fontWeight: '400, 700, 900',
        fontStyle: 'normal',
      },
      body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowY: 'auto',
        width: '100%',
        height: '100%',
        position: 'relative',
      },
      '*': {
        boxSizing: 'border-box', // 모든 요소에 box-sizing 적용
      },
    },
  },
});

export default extendTheme(GlobalTheme);
