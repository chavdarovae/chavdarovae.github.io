import {IProject} from '../interfaces/general.interface';

export const PROJECT_CONTENT: IProject[] = [
	{
		id: 1,
		title: 'Carrypicker Web Applications',
		imgPath: string,
		imgAlt: string,
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
		media: {
			title: string,
			imgPath: string,
			imgAlt: string,
			info: string,
			moreImgs: {
				imgPath: string,
				imgAlt: string,
			}[]
		}
	}

];
