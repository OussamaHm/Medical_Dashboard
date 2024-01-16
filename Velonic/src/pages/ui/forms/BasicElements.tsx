import {
	Button,
	Col,
	Row,
} from 'react-bootstrap'
import { fetchUserList, users, pats, rdvs, Hist, Gest, ress, doss } from '@/types/data';
import {DossTables} from '../../ui/tables/DossierMedTable/DossierMed'
import {HistoriqueTables} from '../../ui/tables/HistoriqueTable/Historique'

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	fetchUserList();
	e.preventDefault();

	const apiDoss = 'http://localhost:45490/api/DossierMeds';
	const apiHist = 'http://localhost:45490/api/Historiques';

	// Create FormData object from the form
	const formData = new FormData(e.currentTarget);

	const pres = formData.get('Prescription') as string;
	const res = formData.get('Resultat') as string;
	const dsc = formData.get('Descr') as string;
	const Rd = formData.get('RdvId') as string;
	


	try {
		// Make a POST request to your API
		const response = await fetch(apiHist, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json', // Add this line to set the content type
		  },
		  body: JSON.stringify({
			HcId: Hist.length, 
            RdvId: Rd,
    		Descr: dsc,
		  }),
		});
	  
		// Check if the request was successful (status code 2xx)
		if (response.ok) {
		  const responseData = await response.json();
		  // Handle the response data as needed
		  console.log(responseData);
		} else {
		  // Handle errors (status code other than 2xx)
		  console.error('Error:', response.statusText);
		}
	  } catch (error) {
		// Handle network errors or other exceptions
		console.error('Error:', error);
	  }
	  
	  
	  try {
		// Make a POST request to your API
		const response = await fetch(apiDoss, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json', // Add this line to set the content type
		  },
		  body: JSON.stringify({
			DmId: doss.length,
			RdvId: Rd,
			Prescription: pres,
			Resultat: res,
		  }),
		});
	  
		// Check if the request was successful (status code 2xx)
		if (response.ok) {
		  const responseData = await response.json();
		  // Handle the response data as needed
		  console.log(responseData);
		} else {
		  // Handle errors (status code other than 2xx)
		  console.error('Error:', response.statusText);
		}
	  } catch (error) {
		// Handle network errors or other exceptions
		console.error('Error:', error);
	  }
	  

  };
// component
import { FormInput, PageBreadcrumb } from '@/components'

// constants
import { colorVariants } from '@/constants/colorVariants'

export const BasicInputElements = () => {


	
	return (
	
				<Row>
					<br/>
														
														<br/>
					<Col lg={6}>
					<div className="user-profile-content">
													<form onSubmit={handleSubmit}>
														<Row className="row-cols-sm-2 row-cols-1">
															<FormInput
																name="Prescription"
																label="Prescription"
																type="text"
																containerClass="mb-2"
																
															/>
															<FormInput
																name="RdvId"
																label="RdvId"
																type="select"
																containerClass="mb-3"
																
															> <option>0</option> <option>1</option><option>2</option> <option>3</option><option>4</option> <option>5</option><option>6</option> <option>7</option></FormInput>
															<FormInput
																name="Descr"
																label="Description"
																type="text"
																containerClass="mb-2"
																
															/>
															<FormInput
																name="Resultat"
																label="Resultat"
																type="text"
																containerClass="mb-2"
																
															/>
															
														</Row>
														<br/>
														
														<br/>
														<Button variant="primary" type="submit">
															<i className="ri-save-line me-1 fs-16 lh-1" />{' '}
															Save
														</Button>
													</form>
												</div>
					</Col>
					<DossTables/>
					<HistoriqueTables/>
				</Row>

                            


					
	)
}

export default BasicInputElements;