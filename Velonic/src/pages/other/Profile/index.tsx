import { Button, Card, Col, Image, Nav, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { profileActivity } from './data'
import React from 'react'
import bgProfile from '@/assets/images/bg-profile.jpg'
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import { FormInput } from '@/components'
import axios from 'axios'
import { fetchUserList, users, pats, rdvs, Hist, Gest, ress, doss } from '@/types/data';
import { Pat, Rdv, History, DossMed, User, GestHor, Ressource } from '@/types';
import {RendezVTables} from '../../ui/tables/RendezVTable/RendezV2'

const ProfilePages: React.FC = () => {
	
	fetchUserList();
	const id = String(localStorage.getItem('currentUserId'));
	if(id == "0" || id == "1" || id == "2" || id == "3" || id == "4" || id == "5" || id == "6") {
		window.location.href = "/";
	}
	
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	
		const apiPAT = 'http://localhost:45490/api/Patients';
		const apiRDV = 'http://localhost:45490/api/RendezVs';

		// Create FormData object from the form
		const formData = new FormData(e.currentTarget);
	
		// Access each attribute and concatenate date and time into datetime
		const date = formData.get('date') as string;
		const time = formData.get('time') as string;



		const daate = `${date} ${time}`;
	
		// Set the new attribute in the FormData
		formData.set('Daate', daate);
	
		// Remove the individual date and time attributes
		formData.delete('date');
		formData.delete('time');
		const doctor = formData.get('DocId') as string;
		if (doctor === 'Dr Ilyass') {
		  formData.set('DocId', '1');
		} else if (doctor === 'Dr Hamid') {
		  formData.set('DocId', '0');
		}

    /*
	X  PATID      LocalStorage 
	X  NOM        LocalStorage 
	x HISTORY
	X ADRESS     USER
    ~ RDVID      AUTO inc
	X DOCID
	X DAATE    

	*/
	const filteredUsers = users.filter((user) => {
		return (
			String(user.PatId) === id 
		)
	})
	const user = filteredUsers[0]


	    const patidd = id ;
		const Namee = String(localStorage.getItem('currentUserName'));
		const his = formData.get('History') as string;

        const em = user.UserEmail
		const docd = formData.get('DocId') as string;
		const dat = formData.get('Daate') as string;
		
        



        console.log('daate : ', dat);
		console.log('LA TAILLE DYAL TABLO rdv ', rdvs.length);
		console.log('Name : ', Namee);
		console.log('EMAIL : ', em);
		console.log('docId : ', docd);
		console.log('history : ', his);
		console.log('PATid : ', patidd);
       


		try {
			// Make a POST request to your API
			const response = await fetch(apiPAT, {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json', // Add this line to set the content type
			  },
			  body: JSON.stringify({
				PatId: id,
				Nom: Namee,
				History: his,
				Adress: user.UserEmail
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
			const response = await fetch(apiRDV, {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json', // Add this line to set the content type
			  },
			  body: JSON.stringify({
				RdvId: rdvs.length,
				PatId: id,
				DocId: docd,
				Daate: dat
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
	
	const name = String(localStorage.getItem('currentUserName'))
	return (
		<>
			<div>
				<Row>
					<Col sm={12}>
						<div
							className="profile-bg-picture"
							style={{ backgroundImage: `url(${bgProfile})` }}
						>
							<span className="picture-bg-overlay" />
						</div>
						<div className="profile-user-box">
							<Row>
								<Col sm={6}>
									<div className="profile-user-img">
										<Image
											src={avatar1}
											className="avatar-lg rounded-circle"
											alt="user"
										/>
									</div>
									<div>
										<h4 className="mt-4 fs-17 ellipsis">{name}</h4>
										<p className="font-13"> user id : {id}</p>
										<p className="text-muted mb-0">
											<small>California, United States</small>
										</p>
									</div>
								</Col>
								<Col sm={6}>
									<div className="d-flex justify-content-end align-items-center gap-2">
										<Button type="button" variant="soft-danger">
											<i className="ri-settings-2-line align-text-bottom me-1 fs-16 lh-1" />{' '}
											Edit Profile
										</Button>
										<Button variant="soft-info">
											{' '}
											<i className="ri-check-double-fill fs-18 me-1 lh-1" />{' '}
											Following
										</Button>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<Card className="p-0">
							<Card.Body className="p-0">
								<div className="profile-content">
									<Tab.Container defaultActiveKey="About">
										<Nav as="ul" justify className="nav-underline gap-0">
											<Nav.Item as="li">
												<Nav.Link
													as={Link}
													to="#"
													eventKey="About"
													type="button"
												>
													About
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													eventKey="Activities"
													to="#"
													as={Link}
													type="button"
												>
													Medical Document
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													as={Link}
													type="button"
													to="#"
													eventKey="Settings"
												>
													Appointment
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link
													type="button"
													as={Link}
													to="#"
													eventKey="Projects"
												>
													RDV Tables
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content className="m-0 p-4">
											<Tab.Pane eventKey="About" id="aboutme" tabIndex={0}>
												<div className="profile-desk">
													<h5 className="text-uppercase fs-17 text-dark">
														{name}
													</h5>
													<div className="designation mb-4">
													Blood Type: O+
													</div>
													<p className="text-muted fs-16">
													maintains an active and healthy lifestyle with
													 regular exercise and a balanced diet. John's medical 
													 history includes a diagnosis of hypertension, managed
													  with medications like Lisinopril (10mg daily) and Aspirin (81mg daily).
													</p>
													<h5 className="mt-4 fs-17 text-dark">
														Contact Information
													</h5>
													<table className="table table-condensed mb-0 border-top">
														<tbody>
															<tr>
																<th scope="row">Url</th>
																<td>
																	<Link to="" className="ng-binding">
																		www.{name}.com
																	</Link>
																</td>
															</tr>
															<tr>
																<th scope="row">Email</th>
																<td>
																	<Link to="" className="ng-binding">
																		{name}@gmail.com
																	</Link>
																</td>
															</tr>
															<tr>
																<th scope="row">Phone</th>
																<td className="ng-binding">0659653259</td>
															</tr>
															<tr>
																<th scope="row">Skype</th>
																<td>
																	<Link to="" className="ng-binding">
																		{name}handeo123
																	</Link>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="Activities" id="user-activities">
												<div className="timeline-2">
													{(profileActivity || []).map((activity, idx) => {
														return (
															<div key={idx} className="time-item">
																<div className="item-info ms-3 mb-3">
																	<div className="text-muted">
																		{activity.time}
																	</div>
																	<p>
																		<Link to="#" className="text-info">
																			{activity.name}
																		</Link>{' '}
																		{activity.title}
																		{activity.subName && (
																			<React.Fragment>
																				<Link to="#" className="text-success">
																				January 15, 2024
																				</Link>
																				.
																			</React.Fragment>
																		)}
																	</p>
																	{activity.image &&
																		(activity.image || []).map((image, idx) => {
																			return (
																				<Image
																					key={idx}
																					src={image}
																					height={40}
																					width={60}
																					className="rounded-1 me-1"
																				/>
																			)
																		})}
																	{!activity.image && (
																		<p>
																			<em>
																				"The doctor recommends a balanced diet, regular exercise, and a follow-up appointment in six months.. "
																			</em>
																		</p>
																	)}
																</div>
															</div>
														)
													})}
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="Settings" id="edit-profile">
												<div className="user-profile-content">
													<form onSubmit={handleSubmit}>
														<Row className="row-cols-sm-2 row-cols-1">
															<FormInput
																name="History"
																label="History"
																type="text"
																containerClass="mb-2"
																
															/>
															<FormInput
																name="DocId"
																label="Doctor"
																type="select"
																containerClass="mb-3"
																
															> <option>Dr Hamid</option> <option>Dr Ilyass</option></FormInput>
															<FormInput
																name="date"
																label="Date"
																  type="date" 
																  id="date" 
																  className="form-control"
																
															/>
															<FormInput
																name="time" 
																label="Time"
																autoComplete="time"
																 type="time" 
																 id="time"
																  className="form-control"
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
											</Tab.Pane>
											<Tab.Pane eventKey="Projects" id="projects">

											   <RendezVTables/>
												
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default ProfilePages
