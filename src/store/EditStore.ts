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
				change:((value.close - value.open) / value.open *100).toFixed(2) , 
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
					this.statData?.sort((a,b) =>{
						return a.name < b.name ? 1: a.name > b.name ? -1 : 0; 
					})
					return this.statData;
				case 'price':
					this.statData?.sort((a,b) => {
						return a.price < b.price ? 1: a.price > b.price ? -1 : 0; 
					})
					return this.statData;
				case 'change':
					this.statData?.sort((a,b) => {
						return a.change < b.change ? 1: a.change > b.change ? -1 : 0; 
					})
					return this.statData;
				case 'high':
					this.statData?.sort((a,b) => {
						return a.high < b.high ? 1: a.high > b.high ? -1 : 0; 
					})
					return this.statData;
				case 'low':
					this.statData?.sort((a,b) => {
						return a.low < b.low ? 1: a.low > b.low ? -1 : 0; 
					})
					return this.statData;
				case 'pool':
					this.statData?.sort((a,b) => {
						return a.pool < b.pool ? 1: a.pool > b.pool
						 ? -1 : 0; 
					})
					return this.statData; 
			} 
		}
	}
} 
