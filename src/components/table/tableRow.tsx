import React, { FC } from 'react';
import {
	StyledTr,
	StyledTd,
} from './style'; 
import { observer } from 'mobx-react-lite';
import { EditStatType } from 'model';

export const TableRow: FC<{
	statData: EditStatType
}> = observer(({
	statData
}) => {
	const { name, high, low, price, change, pool} = statData; 
	return(
		<StyledTr>
			<StyledTd>
				{name}
			</StyledTd>
			<StyledTd>
				{price}
			</StyledTd>
			<StyledTd>
				{change}
			</StyledTd>
			<StyledTd>
				{high}
			</StyledTd>
			<StyledTd>
				{low}
			</StyledTd>
			<StyledTd>
				{pool}
			</StyledTd>
		</StyledTr>
	)
});