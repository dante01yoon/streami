import { observable, action, computed } from 'mobx';
import { RootStore } from './RootStore';
import { APIStore } from './APIStore';
import { requestStats } from 'api';
import { StatType, EditStatType } from 'model'

export type AlignElement = "name" | "price" | "change" | "high" | "low" | "pool";
export type AlignStatus = "up" | "down" | "off";  
type ClickedKey = keyof EditStatType;
export type ClickedAlign = {
	[key in ClickedKey]:{
		alignStatus: AlignStatus,
		clicked: boolean
	};
};

export class EditStore extends APIStore{
  @observable alignClicked: boolean = false; 
	@observable clickedAlign: AlignElement =  "name"; 
	@observable alignStatus: AlignStatus = "off"; 
	@observable statData: EditStatType[] = []; 
	@observable clickedAlignStatus: ClickedAlign = {} as ClickedAlign;  
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
	
	@action.bound
	async changeAlignStatus(value: AlignElement){
		this.alignClicked=true;
		
		switch(this.alignStatus){
			case 'up':
				this.alignStatus='off';
				break;
			case 'off':
				this.alignStatus='up';
				break;
			case 'down':
				this.alignStatus='down';
				break;
			default:
				this.alignStatus='off'; 
		}
	}
  @computed get alignedData() {
		if(this.alignClicked){
			let clickedElement : AlignElement ='name'; 
			let clickedStatus: AlignStatus = this.clickedAlignStatus[clickedElement];
			switch(this.clickedAlign){
				
			} 
		}
	}
} 
