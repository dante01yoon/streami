import styled from 'styled-components';


export const StyledTable = styled.table`
	border-collapse: collapse;
	border: 1px solid black; 
`
export const StyledThead = styled.thead`
	
	background-color: ${p=> p.theme.colors.whiteBlack};
`;
export const StyledTheadDiv = styled.div`
	padding: 10px 0;
	display: inline-block;
	vertical-align: middle; 
	height: auto;
`
export const StyledTh = styled.th<{
	active: boolean; 
}>`
	color: ${p => p.active ? 
		p.theme.colors.mandarine : 
		p.theme.colors.darkWhite }  
	padding: 5px;
	border: 1px solid black;
	width: 206px; 
`
export const StyledTbody = styled.tbody`
`
export const StyledTr = styled.tr`
`
export const StyledTd = styled.td`
	color: ${p=>p.theme.colors.darkWhite};
	border: 1px solid black;
	width: 206px; 
	height: 40px; 
	vertical-align: middle;
	text-align: center;
`