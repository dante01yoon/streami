import React, { FC } from 'react';
import { StoreProvider } from 'lib/useStore';
import { Table } from 'components/table';
export const App : FC = () =>{
	return(
		<StoreProvider>
			<Table/> 
		</StoreProvider>
	)
}