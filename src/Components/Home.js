import React, { useState } from 'react';
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { membersObj } from '../app.json';
import { map, isEmpty } from 'lodash';
import styled from 'styled-components';
import {
	ArrowRightCircleFill,
	GeoFill,
	PersonCircle,
} from 'react-bootstrap-icons';
import InfoModal from './InfoModal';

const Home = () => {
	const [show, setShow] = useState(false);
	const [selectedItem, setSelectedItem] = useState({});

	const colors = [
		'#DFFF00',
		'#FFBF00',
		'#FF7F50',
		'#DE3163',
		'#9FE2BF',
		'#40E0D0',
		'#6495ED',
		'#CCCCFF',
		'#CD5C5C',
		'#F08080',
		'pink',
		'cyan',
	];

	function getColor() {
		var len = colors.length;
		var randomNum = Math.floor(Math.random() * len);
		var color = colors[randomNum];
		colors.splice(randomNum, 1);
		return color;
	}

	const openCalmod = (e) => {
		console.log('modal clicked', e);
		setShow(true);
		setSelectedItem(e);
	};

	return (
		<>
			<div>
				<Header />

				{map(membersObj, (memberArr, i) => (
					<div
						style={{
							flexDirection: 'row',
							display: 'flex',
							justifyContent: 'space-around',
							flexWrap: 'wrap',
							paddingTop: '10px',
						}}>
						{map(memberArr, (item, i) => (
							<StateTileStyled>
								<Card
									onClick={() => openCalmod(item)}
									style={{
										width: '30rem',
										border: '2px solid #D3D0D0',
										padding: '10px',
										margin: '10px',
										backgroundColor: getColor(),
										borderRadius: '20px',
									}}>
									<Card.Body>
										<Card.Text>
											<Row>
												<Col>
													<span style={{ marginRight: 8 }}>
														<PersonCircle color="gray" size={30} />
													</span>
													{item.real_name}
												</Col>
												<Col style={{ textAlign: 'right' }}>
													<span style={{ marginRight: 8 }}>
														<GeoFill color="red" size={20} />
													</span>
													{item.tz}
												</Col>
											</Row>
											<Row></Row>
										</Card.Text>

										{/* <Card.Title>{item.real_name} </Card.Title> */}
									</Card.Body>
								</Card>
							</StateTileStyled>
						))}
					</div>
				))}
				{show && (
					<InfoModal show={show} setShow={setShow} item={selectedItem} />
				)}
			</div>
		</>
	);
};

export default Home;

const StateTileStyled = styled.div`
	&:hover {
		background-color: #e6e6e6;
		border-radius: 30px;
		cursor: pointer;
	}
	> Button {
		background-color: red;
		cursor: pointer;
	}
`;

const Header = styled.div`
	display: flex;
	background-color: #8c8888;
	padding: 30px;
`;
