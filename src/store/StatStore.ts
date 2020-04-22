import { observable, action, computed } from 'mobx';
import { RootStore } from './RootStore';
import { APIStore } from './APIStore';
import { requestStats } from 'api';
import { StatType} from 'model'
export type AlignElement = "name" | "price" | "change" | "high" | "low" | "pool";
export type AlignStatus = "up" | "down" | "off";  
type ClickedKey = keyof StatType;

export type ClickedAlign = {
	[key in ClickedKey]: AlignStatus;
};
export class StatStore extends APIStore {
	@observable alignClicked: boolean = false; 
	@observable clickedAlign: AlignElement =  "name"; 
	@observable alignStatus: AlignStatus = "up"; 
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
	
	@computed get alignedData() {
		if(this.alignClicked && this.alignedData){
			switch(this.clickedAlign){
				case 'name':
					for( let eachData of this.alignedData){
						
					}
					return this.statData;
				case 'up': 
					return this.statData;
				case 'down':
					return this.statData; 
			}
		}
	}
}