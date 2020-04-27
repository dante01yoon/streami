import React, { FC } from 'react';
import { StoreProvider } from 'lib/useStore';
import { Table } from 'components/table';
import { GopaxStyleProvider} from 'theme'; 
export const App : FC = () =>{
	return(
		<GopaxStyleProvider>
			<StoreProvider>
				<Table/> 
			</StoreProvider>
		</GopaxStyleProvider>
	)
}