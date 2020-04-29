import React, { FC, MouseEvent } from 'react';
import {
  StyledTh
} from 'components/table/style';
import { IconContainer} from 'components/icon';

export const ThContainer:FC<{
  value: string;
  active: boolean;
  onClick : (event: MouseEvent<HTMLDivElement>) => void 
}>= ({
  value,
  active,
  onClick
}) => {
  return(
    <StyledTh active={active} onClick={onClick}>
      {value}
      <IconContainer/>
    </StyledTh>
  )
}