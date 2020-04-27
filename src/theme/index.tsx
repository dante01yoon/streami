import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { FC, ReactNode } from 'react';

export const GopaxStyleProvider: FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return(
    <ThemeProvider theme={}>
      {children} 
    </ThemeProvider>
  )
}