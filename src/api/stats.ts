import { http } from './HttpModules';
import {
	APIResponse
} from './types';

import { StatType } from 'model';

const GET_STAT_LIST = '/trading-pairs/stats'; 

export const requestStats = (): Promise<APIResponse<StatType[]>> => {
	return http.GET<StatType[]>(`${GET_STAT_LIST}`);
}
