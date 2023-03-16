import React, { useState } from 'react';
import ContactForm from './ContactForm';

const Modal = ({ contact, setContacts, contacts, closeModal }) => {
	const [newState, setNewState] = useState({
		id: contact.id,
		title: contact.title,
	});
	return (
		<div
			style={{
				zIndex: '100',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',

				backgroundColor: 'rgba(0,0,0,0.5)',
			}}
			className='custom-modal position-fixed '>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1
							className='modal-title fs-5'
							id='staticBackdropLabel'>
							Modal title
						</h1>
						<button
							onClick={() => {
								closeModal(false);
							}}
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'></button>
					</div>
					<div className='modal-body'>
						<form>
							<input
								type='text'
								value={newState.title}
								onChange={(evt) => {
									// const result = contacts.map((element) => {
									// 	if (element.id === contact.id) {
									// 		element.title = evt.target.value;
									// 	}
									// 	return element;
									// });
									// setContacts(result);
									setNewState(evt.target.value);
								}}
								name=''
								id=''
							/>
							<input
								type='text'
								value={contact.relationship}
								onChange={(evt) => {
									const result = contacts.map((element) => {
										if (element.id === contact.id) {
											element.relationship =
												evt.target.value;
										}
										return element;
									});
									setContacts(result);
								}}
								name=''
								id=''
							/>
							<input
								value={contact.phone}
								onChange={(evt) => {
									const result = contacts.map((element) => {
										if (element.id === contact.id) {
											element.phone = evt.target.value;
										}
										return element;
									});
									setContacts(result);
								}}
								type='text'
								name=''
								id=''
							/>
						</form>
					</div>
					<div className='modal-footer'>
						<button
							onClick={() => {
								closeModal(false);
							}}
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'>
							Close
						</button>
						<button
							onClick={() => {
								closeModal(false);
							}}
							type='button'
							className='btn btn-primary'>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
