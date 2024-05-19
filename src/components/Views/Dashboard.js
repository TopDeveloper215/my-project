import React  from "react";
import {SearchStyle, SearchBar} from "./DashboardStyle"
import {SearchBarIcon} from "../Icons";
// import ChartistGraph from "react-chartist";
import { Form, FormControl, InputGroup, Container, Row, Col, Card, Button, Table, OverlayTrigger, Tooltip, ProgressBar  } from "react-bootstrap";
import {CalendarIcon, TeamEarningIcon, IncreaseIcon} from '../Icons';
import { Chart } from 'primereact/chart';



function Dashboard() {

	return (
	<>
		<SearchStyle>
			<div className="searchbar">
				<SearchBarIcon  className="searchicon"/>
					<SearchBar placeholder="Search..">
				</SearchBar>
			</div>
		</SearchStyle>
		<Container fluid style={{marginLeft : '50px', marginTop :'30px'}}>
        <Row id = "row_first">
          <Col lg="3" sm="6">
            <Card className="card-stats card-main">
              <Card.Body>
                <Row>
                  <Col>
                      <p className="cardheader">Company Total earning</p>                    
											<div className="cardsub">
												<CalendarIcon />
												<Card.Title className="cardsubtitle">
													2/3/2024
												</Card.Title>
											</div>
                      {/* <Card.Title className="cardnumber" style={{marginTop : '30px', marginBottom : '20px'}}>$214,000</Card.Title> */}
                      {/* <ProgressBar now={60} />
                      <div style={{display : 'flex', alignItems: 'center', gap:'5px'}}>
                        <IncreaseIcon sx={{ fontSize: 30, color: '#2ED297' }} />
                        <Card.Title className="cardsubtitle">
                            60%
                        </Card.Title>
                        <Card.Title className="cardsubtitle">
                        Since last day
                        </Card.Title>
                      </div> */}
                
                      
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="8" sm="6">
            <Card className="card-stats card-main">
              <Card.Body>
                <p className="cardheader" align="center">Every Team’s Earning</p>
                <Row className="rowstyle">
                  <Col lg="2" xs="4" className="colstyle" align="center" >
                    <Card.Title className="cardnumber">$1,000</Card.Title>
                    <Row className="subrowstyle">
                      <Col xs="3">
                        <TeamEarningIcon sx={{ fontSize: 40, color: '#2ED297' }}  />
                      </Col>
                      <Col xs="8" style={{padding: '0 !important'}}>
                          <Card.Title className="cardsubtitle">3*9</Card.Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" xs="4" className="colstyle" align="center" >
                    <Card.Title className="cardnumber" style={{color : '#8F44F1'}}>$1,000</Card.Title>
                    <Row className="subrowstyle">
                      <Col xs="3">
                        <TeamEarningIcon sx={{ fontSize: 40, color: '#8F44F1' }}  />
                      </Col>
                      <Col xs="8" style={{padding: '0 !important'}}>
                          <Card.Title className="cardsubtitle">5*4</Card.Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" xs="4" className="colstyle" align="center" >
                    <Card.Title className="cardnumber" style={{color : '#2DABF2'}}>$1,000</Card.Title>
                    <Row className="subrowstyle">
                      <Col xs="3">
                        <TeamEarningIcon sx={{ fontSize: 40, color: '#2DABF2' }}  />
                      </Col>
                      <Col xs="8" style={{padding: '0 !important'}}>
                          <Card.Title className="cardsubtitle">8*2</Card.Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" xs="4" className="colstyle" align="center" >
                    <Card.Title className="cardnumber" style={{color : '#F28C2D'}}>$1,000</Card.Title>
                    <Row className="subrowstyle">
                      <Col xs="3">
                        <TeamEarningIcon sx={{ fontSize: 40, color: '#F28C2D' }}  />
                      </Col>
                      <Col xs="8" style={{padding: '0 !important'}}>
                          <Card.Title className="cardsubtitle">CC</Card.Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" xs="4" className="colstyle" align="center" >
                    <Card.Title className="cardnumber" style={{color : '#F22D2D'}}>$1,000</Card.Title>
                    <Row className="subrowstyle">
                      <Col xs="3">
                        <TeamEarningIcon sx={{ fontSize: 40, color: '#F22D2D' }}  />
                      </Col>
                      <Col xs="8" style={{padding: '0 !important'}}>
                          <Card.Title className="cardsubtitle">AI</Card.Title>
                      </Col>
                    </Row>
                  </Col>
                  {/* <Col lg="2">2
                  </Col>
                  <Col lg="2">3
                  </Col>
                  <Col lg="2">4
                  </Col>
                  <Col lg="2">5
                  </Col> */}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row id="row_second" style={{marginTop : '10px'}}>
          <Col lg="6" sm="6">
            <Card className="card-stats card-main">
              <Card.Body>
                <Row>
                  <Col >
                      <div style={{display : 'flex', justifyContent : 'space-between'}}> 
                        <p className="cardheader">Company Total earning</p>                    
                        <div className="cardsub">
                          <CalendarIcon />
                          <Card.Title className="cardsubtitle">February 2024</Card.Title>
                        </div>
                      </div>
                      <Card.Title className="cardsubtitle">This month</Card.Title>
                      <Card.Title className="cardnumber">$214,000</Card.Title>
                      <Card.Title className="cardsubtitle_">40% more earning than last month.</Card.Title>
                      
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" sm="6">
          </Col>
        </Row>
      </Container>
	</>
	);
};

export default Dashboard;