export type User = {
	PatId: number
	UserEmail: string
	UserName?: string
	UserPassword: string
    UserType: number
	token: string
}

export type Pat = {
	PatId: number
	Nom: string
	History: string
	Adress: string
}

export type Rdv = {
	PatId: number
	RdvId: number
	DocId: number
	Daate: string
}


export type History = {
	HcId: number, 
    RdvId: number,
    Descr: string,
}

export type DossMed = {
    DmId: number;
    RdvId: number;
    Prescription: string;
    Resultat: string;
}

export type Ressource ={
    RssId: number;
    Occupation: string;
}



export type GestHor = {
    GdhId: number;
    RssId: number;
    Heurdt: string;
}