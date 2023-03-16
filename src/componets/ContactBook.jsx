import React, { useRef, useState } from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const ContactBook = () => {
	const [contacts, setContacts] = useState([]);

	return (
		<section className='container mt-2'>
			<h2 className='bg-dark text-white text-center py-2'>
				Contact Book
			</h2>

			<div className='row justify-content-around'>
				<ContactForm contacts={contacts} setContacts={setContacts} />
				<div className='col-5'>
					<h3>Contacts</h3>

					<div className='cards'>
						{contacts.map((contact, i) => (
							<ContactCard
								contacts={contacts}
								setContacts={setContacts}
								key={i}
								contact={contact}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactBook;
