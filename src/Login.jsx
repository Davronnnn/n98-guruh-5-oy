import React from 'react';

const Login = () => {
	return (
		<div className='container mt-5'>
			<div className='row d-flex justify-content-center'>
				<div className='col-md-6'>
					<div className='card px-5 py-5' id='form1'>
						<div className='form-data'>
							<div className='forms-inputs mb-4'>
								<span>Email or username</span>
								<input autoComplete='off' type='text' />
								<div className='invalid-feedback'>
									A valid email is required!
								</div>
							</div>
							<div className='forms-inputs mb-4'>
								<span>Password</span>
								<input autoComplete='off' type='password' />
								<div className='invalid-feedback'>
									Password must be 8 character!
								</div>
							</div>
							<div className='mb-3'>
								<button className='btn btn-dark w-100'>
									Login
								</button>
							</div>
						</div>
						<div className='success-data'>
							<div className='text-center d-flex flex-column'>
								<i className='bx bxs-badge-check'></i>
								<span className='text-center fs-1'>
									You have been logged in <br />
									Successfully
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
