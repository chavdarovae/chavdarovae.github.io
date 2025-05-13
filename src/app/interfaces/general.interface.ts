export interface ICourse {
	id: string,
	title: string,
	link: string,
	scopeItems: number,
	gitHubLink: string,
	start: string,
	duration: number,
}

export interface IWorkExperience {
	id: string,
	employer: string,
	employerLink: string,
	descriptionItems: number,
	period: string,
	refLink?: string
}

export interface IProject {
	id: string,
	title: string,
	infoItems: number,
	media: IProjectMedia[]
}

export interface IProjectMedia {
	id: string,
	title: string,
	link?: string,
	imgCount: number
}
