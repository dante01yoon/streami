import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React, { FC, ReactNode } from 'react';
import { Theme } from './interface';
import { colors } from './colors';
import { typography } from './typography';
import reset from 'styled-reset'; 
const gopaxTheme: Theme = {
  colors: colors, 
  typo: typography
}
export const GopaxResetStyle = createGlobalStyle`
  ${reset}; 
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing:boerder-box;
  }
`
export const GopaxStyleProvider: FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return(
    <ThemeProvider theme={gopaxTheme}>
      <GopaxResetStyle/>
      {children} 
    </ThemeProvider>
  )
}