import React, { FC, ReactNode } from 'react';
import { 
  Main,
  MainArticle
} from './style';
export const GnbContainer:FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return(
    <>
      <Main>
        <MainArticle>
          {children}
        </MainArticle>  
      </Main>      
    </>
  )
}