import axios from 'axios';
import { Pat, Rdv, History, DossMed, User, GestHor, Ressource } from '@/types';

export let users: User[] = [];
export let pats: Pat[] = [];
export let rdvs: Rdv[] = [];
export let Hist: History[] = [];
export let Gest: GestHor[] = [];
export let ress: Ressource[] = [];
export let doss: DossMed[] = [];

const TOKEN =
'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI'

export async function fetchUserList() {
    
//Gest
try {
    const response = await axios.get('http://localhost:45490/api/GestionHoraires');
    // Assuming the API response is an array of users with the specified attributes

    Gest = response.data.map((GestHor  : any) => ({
	GdhId: GestHor.GdhId,
      RssId: GestHor.RssId ,
      Heurdt: GestHor.Heurdt ,
    }));
  } catch (error) {
    console.error('Error fetching GestHor  list:', error);
  }


	//Doss
	try {
		const response = await axios.get('http://localhost:45490/api/DossierMeds');
		// Assuming the API response is an array of users with the specified attributes
	
		doss = response.data.map((DossMed  : any) => ({
		  DmId: DossMed.DmId,
		  RdvId: DossMed.RdvId ,
		  Prescription: DossMed.Prescription ,
		  Resultat: DossMed.Resultat,
		}));
	  } catch (error) {
		console.error('Error fetching DossMed  list:', error);
	  }
	

//Hist
	try {
		const response = await axios.get('http://localhost:45490/api/Historiques');
		// Assuming the API response is an array of users with the specified attributes
	
		Hist = response.data.map((History  : any) => ({
      HcId: History.HcId, 
      RdvId: History.RdvId,
      Descr: History.Descr,
		}));
	  } catch (error) {
		console.error('Error fetching History  list:', error);
	  }
	

//Ress
	try {
		const response = await axios.get('http://localhost:45490/api/Ressources');
		// Assuming the API response is an array of users with the specified attributes
	
		ress = response.data.map((Ressource  : any) => ({
			  RssId: Ressource.RssId,
		  Occupation: Ressource.Occupation ,
		}));
	  } catch (error) {
		console.error('Error fetching Ressource  list:', error);
	  }

	  

//Util	
	try {
    const response = await axios.get('http://localhost:45490/api/Utilisateurs');
    // Assuming the API response is an array of users with the specified attributes
    users = response.data.map((user: any) => ({
	 PatId: user.PatId,
      UserName: user.UserName,
      UserPassword: user.UserPassword,
      UserEmail: user.UserEmail,
      UserType: user.UserType,
      token: TOKEN,
    }));
  } catch (error) {
    console.error('Error fetching user list:', error);
  }



//Pat
  try {
    const response = await axios.get('http://localhost:45490/api/Patients');
    // Assuming the API response is an array of users with the specified attributes
    pats = response.data.map((pat: any) => ({
	  PatId: pat.PatId,
      Nom: pat.Nom,
      History: pat.History,
      Adress: pat.Adress,
    }));
  } catch (error) {
    console.error('Error fetching pat list:', error);
  }



//RDV
  try {
    const response = await axios.get('http://localhost:45490/api/RendezVs');
    // Assuming the API response is an array of users with the specified attributes

    rdvs = response.data.map((Rdv : any) => ({
	  PatId: Rdv.PatId,
      RdvId: Rdv.RdvId,
	  DocID: Rdv.DocId,
      Daate: Rdv.Daate,
    }));
  } catch (error) {
    console.error('Error fetching Rdv  list:', error);
  }
} 




