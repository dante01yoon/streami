import { StatType } from "model"
import { 
	AlignElement, 
	AlignStatus
} from "store/StatStore"; 
export const alignDataByTag = (tag: AlignElement, originalData:StatType[], status: AlignStatus ) => {
	if( tag && originalData) {
		if(status === "up"){
			originalData.sort(function(a,b){
					a.tag < b.tag  			
			})
			}
		else {
		console.error("tag or originalData not exists"); 
		}
	}
}