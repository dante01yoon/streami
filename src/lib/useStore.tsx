import React, { FC ,useContext, createContext } from 'react';
import { useLocalStore} from 'mobx-react-lite';
import { StatStore } from 'store/StatStore';
import { EditStore } from 'store/EditStore';
export type RootStore = {
	stat: StatStore,
	edit: EditStore
}

export type StoreKeys = keyof RootStore; 

const storeContext = createContext<RootStore | null>(null);

const initialStore = (): RootStore => {
	const rootStore: RootStore = {} as RootStore; 
	rootStore.stat = new StatStore(rootStore); 

	return rootStore; 
}

export const StoreProvider: FC = ({children}) => {
	const store = useLocalStore(initialStore); 
	return <storeContext.Provider value = {store}>{children}</storeContext.Provider>
}

export function useStore<K extends StoreKeys>(storeName: K):RootStore[K]{
	const store = useContext(storeContext);
	if(!store) {
		throw new Error('useStore');
	}
	return store[storeName]; 
}