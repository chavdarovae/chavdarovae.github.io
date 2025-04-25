export interface ICourse {
	id: number,
	title: string,
	img: string,
	imgAlt: string,
	focus: string,
	link: string,
	scope: string[],
	gitHubLink: string,
	start: string,
	duration: number,
}

export interface IWorkExperience {
	id: number,
	position: string,
	imgPath: string,
	imgAlt: string,
	employer: string,
	employerLink: string,
	description: string,
	period: string,
}

export interface IProject {
	id: number,
	title: string,
	imgPath: string,
	imgAlt: string,
	highlights: string,
	info: string[],
	media: IProjectMedia
}

export interface IProjectMedia {
	title: string,
	imgPath: string,
	imgAlt: string,
	info: string,
	moreImgs: {
		imgPath: string,
		imgAlt: string,
	}[]
}
