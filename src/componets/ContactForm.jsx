import React, { useState } from 'react';

const ContactForm = ({ contacts, setContacts }) => {
	const [title, setTitle] = useState('');
	const [relationship, setRelationship] = useState('');
	const [phone, setPhone] = useState('');

	const submitHandler = (evt) => {
		evt.preventDefault();

		const newContact = {
			id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
			title,
			relationship,
			phone,
		};

		setContacts([...contacts, newContact]);

		// setTitle('');
		// setRelationship('');
		// setPhone('');
	};
	return (
		<form onSubmit={submitHandler} className='col-5'>
			<h3>New contact form</h3>
			<input
				placeholder='title'
				className='form-control mt-3'
				type='text'
				value={title}
				onChange={(evt) => setTitle(evt.target.value)}
			/>
			<input
				placeholder='relationship'
				className='form-control mt-3'
				type='text'
				value={relationship}
				onChange={(evt) => setRelationship(evt.target.value)}
			/>
			<input
				placeholder='phone'
				className='form-control mt-3'
				type='phone'
				value={phone}
				onChange={(evt) => setPhone(evt.target.value)}
			/>

			<button type='submit' className='btn btn-primary form-control mt-3'>
				Add contact
			</button>
		</form>
	);
};

export default ContactForm;
