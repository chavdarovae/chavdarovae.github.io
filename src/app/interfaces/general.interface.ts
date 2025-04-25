export interface ICourse {
	id: string,
	title: string,
	focus: string,
	link: string,
	scope: string[],
	gitHubLink: string,
	start: string,
	duration: number,
}

export interface IWorkExperience {
	id: string,
	position: string,
	employer: string,
	employerLink: string,
	description: string,
	period: string,
}

export interface IProject {
	id: string,
	title: string,
	highlights: string,
	info?: string[],
	media: IProjectMedia[]
}

export interface IProjectMedia {
	id: string,
	title: string,
	info?: string[],
	link?: string,
	imgCount: number
}
