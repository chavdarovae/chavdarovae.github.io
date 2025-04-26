import {IProject} from '../interfaces/general.interface';

export const PROJECT_CONTENT: IProject[] = [
	{
		id: 'carrypicker',
		title: 'Carrypicker Web Applications',
		infoItems: 4,
		media: [
			{
				id: 'shipper',
				title: 'Carrypicker - Info',
				link: 'https://my.carrypicker.com',
				imgCount: 1
			},
			{
				id: 'tms',
				title: 'Colleta TMS - Info',
				link: 'https://neu.colleta.de',
				imgCount: 1
			},
			{
				id: 'carrier',
				title: 'Colleta Trucking - Info',
				link: 'https://trucking.colleta.de',
				imgCount: 1
			},
			{
				id: 'backoffice',
				title: 'Colleta Manager - Info',
				link: 'https://my.colleta.de',
				imgCount: 1
			}
		]
	},
	{
		id: 'ptm',
		title: 'Performance Management Tool - PMT SPA',
		infoItems: 5,
		media: [
			{
				id: 'desktop',
				title: 'PMT-Desktop - Gallery',
				imgCount: 3
			},
			{
				id: 'mobile',
				title: 'Colleta TMS - Info',
				imgCount: 3
			},
		]
	},
	{
		id: 'smo-jo',
		title: 'Small Jobs Cloud - SmoJoCloud SPA',
		infoItems: 5,
		media: [
			{
				id: 'general',
				title: 'SmoJo Cloud - Gallery',
				imgCount: 4
			}
		]
	},
	{
		id: 'movies',
		title: 'Movie platform SPA',
		infoItems: 0,
		media: [
			{
				id: 'general',
				title: 'Movie platform - Gallery',
				imgCount: 9
			}
		]
	},
	{
		id: 'music',
		title: 'Music platform SPA',
		infoItems: 0,
		media: [
			{
				id: 'general',
				title: 'Music platform - Gallery',
				imgCount: 6
			}
		]
	}

];
