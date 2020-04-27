import React, { FC } from 'react';
import { StoreProvider } from 'lib/useStore';
import { GopaxStyleProvider} from 'theme'; 
import { MainView } from 'view';
export const App : FC = () =>{
	return(
		<GopaxStyleProvider>
			<StoreProvider>
				<MainView/>
			</StoreProvider>
		</GopaxStyleProvider>
	)
}