import { observable, action, computed } from 'mobx';
import { RootStore } from './RootStore';
import { APIStore } from './APIStore';
import { requestStats } from 'api';
import { StatType} from 'model'


export class StatStore extends APIStore {
	@observable statData: StatType[] = [];
	constructor(rootStore:RootStore) {
		super();
		this.rootStore = rootStore; 
	}

	@action.bound
	async requestData(){
		this.onRequest();
		try{
		const [, data] = await requestStats();
		this.statData = data ?? []; 
		}catch(error) {
			this.onFailure(); 
		}
		this.onSuccess(); 
	}
}