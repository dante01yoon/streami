import { StatType, EditStatType } from "model"
import { 
	AlignElement, 
	AlignStatus
} from "store/EditStore"; 
export const alignDataByTag = (
	tag: AlignElement, originalData:EditStatType[], status: AlignStatus 
) => {
	if( tag && originalData) {
		if(status === "up"){
			originalData.sort((a,b) => {
				if(a[tag] < b[tag])
					return 1; 
				else
					return -1; 
			}
		)
		}
		else {
		console.error("tag or originalData not exists"); 
		}
	}
}