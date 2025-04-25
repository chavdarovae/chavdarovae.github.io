import {IProject} from '../interfaces/general.interface';

export const PROJECT_CONTENT: IProject[] = [
	{
		id: 'carrypicker',
		title: 'Carrypicker Web Applications',

		highlights: `Developed further features for three web applications: Carrypicker, Colleta TMS and Colleta
				Trucking. The symbiotic relationship between them allows for them to cover all three steps of
				the truck transport logistics process. Starting with placing a shipment order in Carrypicker,
				going through an AI based automatic disposition with a fallback option - manual disposition in
				Colleta TMS. And ending with issuing tour request and transportation orders via Colleta Trucking
				Platform, while having Colleta User Management Platform as the middle man in this ecosystem.`,
		info: [
			'Extended the four SPAs with further features written in an imperative manner using TypeScript(Angular), AJAX, REST and JSON.',
			'Prepared multiple UX design drafts using Sketch, complying with established design streamlines and implemented them with SCSS.',
			'Created multiple E-mail templates with Stripo (online platform for E-mail templates) and integrated Handlebars as a template compiler.',
			'Partnered with backend developers, data analysts and product developers.'
		],
		media: [
			{
				id: 'shipper',
				title: 'Carrypicker - Info',
				info: [
					'Carrypicker is a web platform, where shippers can easily input shipping orders. It provides AI-based day price calculation algorithm and supports manual, CSV or excel based shipment input.',
					'The web portal keeps track of the status and the position of the shipments relevant to a single user or to a group of users. It also issues automatically shipping orders and allows for document exchange between stakeholders.'
				],
				link: 'https://my.carrypicker.com',
				imgCount: 1
			},
			{
				id: 'tms',
				title: 'Colleta TMS - Info',
				info: [
					'Colleta TMS is a disposition tool that serves mainly transport management purposes. It is meant as a fallback web platform, where shipments that could not be disposed automatically by the AI, are bundled manually by dispatchers.',
					'Colleta TMS reduces the process chain of bundling multiple shipments together, creating a tour request and contacting numerous carriers to a couple of button clicks. The price negotiation and the actual assignment of a transport order also take place in this web platform.'
				],
				link: 'https://neu.colleta.de',
				imgCount: 1
			},
			{
				id: 'carrier',
				title: 'Colleta Trucking - Info',
				info: [
					'Colleta Trucking is a web application meant for transportation carriers. It allows them to actively participate in tour request bids, register available transportation vehicles and commonly run routes. Another feature of the platform is keeping history of all transportation assignments and providing online-access the respective documentation.'
				],
				link: 'https://trucking.colleta.de',
				imgCount: 1
			},
			{
				id: 'backoffice',
				title: 'Colleta Manager - Info',
				info: [
					'Colleta Manager does the user management for the other three web platforms: Carrypicker, Colleta and Colleta Trucking. It allows for intersystem data exchange and is the place where the onboarding for all stakeholders in the Carrypicker ecosystem takes place.'
				],
				link: 'https://my.colleta.de',
				imgCount: 1
			}
		]
	},
	{
		id: 'ptm',
		title: 'Performance Management Tool - PMT SPA',

		highlights: `Designed, developed and deployed an MVP Performance Management Tool (PMT SPA). The web
				application is inspired by Six Sigma performance improvement techniques. It provides a
				platform for multiple parties to quickly exchange highly complex technical reviews of assets or performance
				indicators, while generating a high-level overview for C level stakeholders.`,
		info: [
			'Wrote a well-structured Single Page Application with a cloud-based Backend (BaaS) using JavaScript, AJAX, REST and JSON.',
			'Implemented efficient routing and templating via Handlebars and Sammy.js.',
			'Partnered with project managers and analysts to deeply understand the necessities of users and build a custom UI that explicitly serves those needs.',
			'Enabled modern multi-platform application design following the latest standards of HTML5 and CSS3.',
			'Structured the SCSS code in a least wasteful way by implementing Inverted Triangle architecture and BEM methodology.'
		],
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
		highlights: `Designed, developed and deployed an MVP Performance Management Tool (PMT SPA). The web
				application is inspired by Six Sigma performance improvement techniques. It provides a
				platform
				for multiple
				parties to quickly exchange highly complex technical reviews of assets or performance
				indicators,
				while generating a high-level overview for C level stakeholders.`,
		info: [
			'Wrote a well-structured Single Page Application with a cloud-based Backend (BaaS) using JavaScript, AJAX, REST and JSON.',
			'Implemented efficient routing and templating via Handlebars and Sammy.js.',
			'Partnered with project managers and analysts to deeply understand the necessities of users and build a custom UI that explicitly serves those needs.',
			'Enabled modern multi-platform application design following the latest standards of HTML5 and CSS3.',
			'Structured the SCSS code in a least wasteful way by implementing Inverted Triangle architecture and BEM methodology.'
		],
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
		highlights: `Implemented Movie platform Single Page Application - platform for
				sharing and rating inspiring movie titles. The web application keeps users and other
				relevant data in a could-based backend (Backendless), support register and login for guest
				users. And allow for various manipulation with instances, like: reviewing, creating,
				editing,
				deleting and simulation of purchasing movie tickets.`,
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
		highlights: `Implemented Music platform Single Page Application - platform for
				sharing and rating inspiring song titles. The web application keeps users and other
				relevant data in a could-based backend (Backendless), support register and login for guest
				users. And allow for various manipulation with instances, like: reviewing, creating,
				deleting
				and liking songs.`,
		media: [
			{
				id: 'general',
				title: 'Music platform - Gallery',
				imgCount: 6
			}
		]
	}

];
