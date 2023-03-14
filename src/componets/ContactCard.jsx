import React, { useState } from 'react';
import Modal from './Modal';

const ContactCard = ({ contact, contacts, setContacts }) => {
	const [isModal, setIsModal] = useState(false);

	const deleteHandler = () => {
		console.log(contact.id);

		const result = contacts.filter((element) => {
			if (element.id !== contact.id) {
				return true;
			}
		});

		setContacts(result);
	};
	return (
		<div className='card my-3'>
			<div className='card-body'>
				<h5 className='card-title'>{contact.title}</h5>
				<p className='card-text'>{contact.relationship}</p>
				<p className='card-phone'>{contact.phone}</p>
				<button
					data-bs-toggle='modal'
					data-bs-target='#staticBackdrop'
					onClick={() => setIsModal(true)}
					className='btn btn-info'>
					Edit
				</button>
				<button onClick={deleteHandler} className='btn btn-danger'>
					Delete
				</button>
				{/* {isModal ? (
					<Modal
						contact={contact}
						setContacts={setContacts}
						contacts={contacts}
					/>
				) : (
					''
				)} */}
			</div>
		</div>
	);
};

export default ContactCard;
