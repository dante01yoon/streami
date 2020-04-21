import React, { FC } from 'react';
import {
	StyledTr,
	StyledTd,
} from './style'; 
import { observer } from 'mobx-react-lite';
import { StatType } from 'model';

export const TableRow: FC<{
	statData: StatType
}> = observer(({
	statData
}) => {
	const { name, open, high, low, close, volume, time} = statData; 
	return(
		<StyledTr>
			<StyledTd>
				{name}
			</StyledTd>
			<StyledTd>
				{open}
			</StyledTd>
			<StyledTd>
				{high}
			</StyledTd>
			<StyledTd>
				{low}
			</StyledTd>
			<StyledTd>
				{close}
			</StyledTd>
			<StyledTd>
				{volume}
			</StyledTd>
		</StyledTr>
	)
});