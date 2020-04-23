export type StatType = {
	name: string,
	open: number,
	high: number,
	low: number,
	close: number,
	volume: number,
	time: string
}

export type EditStatType = Pick<StatType, 'name' | 'high' | 'low'> & {
	price: number, 
	change: number
}

