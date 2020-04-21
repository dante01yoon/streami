import { observable, action, computed } from 'mobx';
import { RootStore } from './RootStore';
import { APIStore } from './APIStore';
import { requestStats } from 'api';
import axios from 'axios';
import { StatType} from 'model'
export type AlignElement = "empty" | "name" | "price" | "change" | "high" | "low" | "pool";
export class StatStore extends APIStore {
	@observable alignElement: AlignElement = "empty";
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
		// const [, data] = await axios.get('/send/trading-pairs/stats',{
		// 	proxy: {
		// 		host: "https://api.gopax.co.kr",
		// 		port: 8080
		// 	},
		// 	withCredentials:true
		// });
		this.statData = data ?? []; 
		}catch(error) {
			this.onFailure(); 
		}
		this.onSuccess(); 
	}
	
}