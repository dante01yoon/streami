import { observable, action, computed } from 'mobx';
import { RootStore } from './RootStore';
import { APIStore } from './APIStore';
import { requestStats } from 'api';
import { StatType, EditStatType } from 'model'

export type AlignElement = "name" | "price" | "change" | "high" | "low" | "pool";
export type AlignStatus = "up" | "down" | "off";  
type ClickedKey = keyof StatType;
export type ClickedAlign = {
	[key in ClickedKey]: AlignStatus;
};

export class EditStore extends APIStore{
  @observable alignClicked: boolean = false; 
	@observable clickedAlign: AlignElement =  "name"; 
	@observable alignStatus: AlignStatus = "up"; 
  @observable statData: EditStatType[] = []; 
  constructor(rootStore: RootStore){
    super();
    this.rootStore = rootStore; 
  }

  @action.bound
	async requestData(){
		this.onRequest();
		try{
		const [, data] = await requestStats();
		this.statData = data?.map((value:StatType) => {
			return {
				name: value.name,
				price: value.close,
				change: parseInt(((value.close - value.open) / value.close * 100).toFixed(2)), 
				high: value.high,
				low: value.low,
				pool: value.volume
			}
		}) ?? [];
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
