import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React, { FC, ReactNode } from 'react';
import { Theme } from './interface';
import { colors } from './colors';
import { typography } from './typography';  
const gopaxTheme: Theme = {
  colors: colors, 
  typo: typography
}

export const GopaxStyleProvider: FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return(
    <ThemeProvider theme={gopaxTheme}>
      {children} 
    </ThemeProvider>
  )
}