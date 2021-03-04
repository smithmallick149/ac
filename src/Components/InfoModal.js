import React, { useState } from 'react';
import { Container, Button, Modal, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import {
	ArrowRightCircleFill,
	GeoFill,
	PersonCircle,
} from 'react-bootstrap-icons';
// import 'react-calendar/dist/Calendar.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import moment from 'moment';
import './Info.css';

const InfoModal = ({ show, setShow, item }) => {
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	console.log('item', item);

	return (
		<div style={{ flex: 1 }}>
			<Container fluid>
				<Modal
					show={show}
					onHide={handleClose}
					centered
					dialogClassName="my-modal">
					<Modal.Header closeButton>
						<Modal.Title>{item.id}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col>
								<span style={{ marginRight: 8 }}>
									<PersonCircle />
								</span>
								{item.real_name}
							</Col>
							<Col>
								<span style={{ marginRight: 8 }}>
									<GeoFill />
								</span>

								{item.tz}
							</Col>
						</Row>
						<Row>
							<DateRangePicker ranges={item.activity_periods} />
						</Row>
					</Modal.Body>
				</Modal>
			</Container>
		</div>
	);
};

export default InfoModal;
