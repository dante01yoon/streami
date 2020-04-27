import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'lib/useStore'; 
import { TableRow } from 'components/table/tableRow';
import {
	StyledTable,
	StyledThead,
	StyledTh,
	StyledTbody,
	StyledTr,
	StyledTd
} from './style';
export const Table: FC = observer(() =>{
	const edit = useStore('edit'); 
	useEffect(()=> {
		edit.requestData(); 
	},[])
	const { statData } = edit; 
	return(
		<StyledTable summary={"represent present coin price"}>
			<StyledThead>
				<StyledTr>
					<StyledTh>
						이름	
					</StyledTh>
					<StyledTh>
						현재가	
					</StyledTh>
					<StyledTh>
						변동	
					</StyledTh>
					<StyledTh>
						최고가	
					</StyledTh>
					<StyledTh>
						최저가	
					</StyledTh>
					<StyledTh>
						거래대금	
					</StyledTh>
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