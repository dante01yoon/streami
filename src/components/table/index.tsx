import React, { FC, MouseEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { TableRow } from 'components/table/tableRow';
import { ThContainer } from 'components/Thead';
import {
	StyledTable,
	StyledThead,
	StyledTbody,
	StyledTr,
} from './style';
import { EditStatType } from 'model';
export const Table: FC<{
	statData: EditStatType[]
}> = observer(({
	statData
}) =>{
	const TheadValue:string[] = ['이름', '현재가', '변동','최고가', '최저가','거래대금'];
	const onClick = (event: MouseEvent<HTMLDivElement> ) => {
		
	}
	return(
		<StyledTable summary={"represent present coin price"}>
			<StyledThead>
				<StyledTr>
					{
						TheadValue?.map((value,index) => {
							return (
								<ThContainer value ={value} active={false} onClick={onClick} key={index} /> 
							)
						})
					}
				</StyledTr>
			</StyledThead>
			<StyledTbody>
				{statData
					? 
						statData.map((value,index) => {
							return <TableRow statData = {value} key = {index} /> 
						})
					:	
						<div>loading...</div>
				}
			</StyledTbody>
		</StyledTable>
	)
});