import React from 'react';
import ContactForm from './ContactForm';

const Modal = ({ contact, setContacts, contacts }) => {
	console.log(contact, contacts);
	return (
		<div
			class='modal fade'
			id='staticBackdrop'
			data-bs-backdrop='static'
			data-bs-keyboard='false'
			tabIndex='-1'
			aria-labelledby='staticBackdropLabel'
			aria-hidden='true'>
			<div class='modal-dialog'>
				<div class='modal-content'>
					<div class='modal-header'>
						<h1 class='modal-title fs-5' id='staticBackdropLabel'>
							Modal title
						</h1>
						<button
							type='button'
							class='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'></button>
					</div>
					<div class='modal-body'>
						<form>
							<input
								type='text'
								value={contact.title}
								name=''
								id=''
							/>
							<input
								type='text'
								value={contact.relationship}
								name=''
								id=''
							/>
							<input
								value={contact.phone}
								type='text'
								name=''
								id=''
							/>
						</form>
					</div>
					<div class='modal-footer'>
						<button
							type='button'
							class='btn btn-secondary'
							data-bs-dismiss='modal'>
							Close
						</button>
						<button type='button' class='btn btn-primary'>
							Understood
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
