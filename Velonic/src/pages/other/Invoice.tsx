import { Button, Card, Col, Row } from 'react-bootstrap'

// images
import logoDark from '@/assets/images/logo-dark.png'

// components
import { PageBreadcrumb } from '@/components'

const Invoice = () => {

	const id = String(localStorage.getItem('currentUserId'));
	if(id == "0" || id == "1" || id == "2" || id == "3" || id == "4" || id == "5" || id == "6") {		
	}
	else window.location.href = "/pages/profile";
	return (
		<>
			<PageBreadcrumb title="Invoice" subName="Pages" />
			<Row>
				<Col xs={12}>
					<Card>
						<Card.Body>
							<div className="clearfix">
								<div className="float-start mb-3">
									<img src={logoDark} alt="dark logo" height={22} />
								</div>
								<div className="float-end">
									<h4 className="m-0 d-print-none">Invoice</h4>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6">
									<div className="float-end mt-3">
										<p>
											<b>Hello, Samir</b>
										</p>
										<p className="text-muted fs-13">
										Please make the payment by the due date mentioned above. You can send your payment via check to the address provided or use our online payment portal. Make checks payable to Velonic Medical Center.
										</p>
									</div>
								</div>
								<div className="col-sm-4 offset-sm-2">
									<div className="mt-3 float-sm-end">
										<p className="fs-13">
											<strong>Order Date: </strong> &nbsp;&nbsp;&nbsp; Jan 17,
											2024
										</p>
										<p className="fs-13">
											<strong>Order Status: </strong>{' '}
											<span className="badge bg-success float-end">Paid</span>
										</p>
										<p className="fs-13">
											<strong>Order ID: </strong>{' '}
											<span className="float-end">#38956</span>
										</p>
									</div>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-6">
									<h6 className="fs-14">Billing Address</h6>
									<address>
										Lynne K. Higby
										<br />
										795 Folsom Ave, Suite 600
										<br />
										San Francisco, CA 94107
										<br />
										<abbr title="Phone">P:</abbr> (123) 456-7890
									</address>
								</div>
								<div className="col-6">
									<h6 className="fs-14">Shipping Address</h6>
									<address>
										Thomson
										<br />
										795 Folsom Ave, Suite 600
										<br />
										San Francisco, CA 94107
										<br />
										<abbr title="Phone">P:</abbr> (123) 456-7890
									</address>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="table-responsive">
										<table className="table table-sm table-centered table-hover table-borderless mb-0 mt-3">
											<thead className="border-top border-bottom bg-light-subtle border-light">
												<tr>
													<th>#</th>
													<th>Opperation</th>			
													<th>Unit Cost</th>
													<th className="text-end">Total</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>
														<b>Consultation</b> <br />
														The consultation service involves a one-on-one session with a medical professional to discuss and assess the patient's health.
													</td>
													<td>$150.00</td>
													<td className="text-end">$151.00</td>
												</tr>
												<tr>
													<td>2</td>
													<td>
														<b>Blood Test</b> <br />
														The blood test is a diagnostic procedure where a sample of the patient's blood is collected and analyzed in a laboratory.
													</td>
													<td>$75.00</td>
													<td className="text-end">$76.55</td>
												</tr>
												<tr>
													<td>3</td>
													<td>
														<b>X-ray</b> <br />
														X-ray imaging involves the use of electromagnetic radiation to create images of the inside of the body.
													</td>
													<td>$120.00</td>
													<td className="text-end">$125.00</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6">
									<div className="clearfix pt-3">
										<h6 className="text-muted fs-14">Notes:</h6>
										<small>
											All accounts are to be paid within 7 days from receipt of
											invoice. To be paid by cheque or credit card or direct
											payment online. If account is not paid within 7 days the
											credits details supplied as confirmation of work
											undertaken will be charged the agreed quoted fee noted
											above.
										</small>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="float-end mt-3 mt-sm-0">
										<p>
											<b>Sub-total:</b>{' '}
											<span className="float-end">$465.00</span>
										</p>
										<p>
											<b>VAT (12.5):</b>{' '}
											<span className="float-end">$4.56</span>
										</p>
										<h3>$471.34 USD</h3>
									</div>
									<div className="clearfix" />
								</div>
							</div>
							<div className="d-print-none mt-4">
								<div className="d-flex flex-wrap gap-1 justify-content-center">
									<Button
										variant="primary"
										onClick={() => {
											window.print()
										}}
									>
										<i className="ri-printer-line" /> Print
									</Button>
									<Button variant="info" className="btn btn-info">
										Submit
									</Button>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Invoice
