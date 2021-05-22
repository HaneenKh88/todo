import React, { useContext, useState } from 'react';
import { If, Else, Then } from 'react-if';
import { LoginContext } from './context';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const SignUp = () => {
	const loginContext = useContext(LoginContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('user');

	function handleChangeUsername(e) {
		setUsername(e.target.value);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}

	function handleChangeRole(e) {
		setRole(e.target.value);
	}

	function handleSubmitSignup(e) {
		e.preventDefault();
		loginContext.signup(email, username, password, role);
	}

	return (
		<If condition={loginContext.loggedIn}>
			<Then>
				<div></div>
			</Then>
			<Else>
			
				<Form onSubmit={handleSubmitSignup} style={{marginRight:"-100px"}}>
					<Form.Row>
						<Col xs={2}>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter Email"
						onChange={handleChangeEmail}
					/>
					</Col>

					<Col xs={3}>
					<Form.Control
						type="text"
						name="username"
						placeholder="Enter Username"
						onChange={handleChangeUsername}
					/>
					</Col>

					<Col xs={3}>
					<Form.Control
						type="password"
						name="password"
						placeholder="Enter password"
						onChange={handleChangePassword}
					/>
                   </Col>
				   
					<Form.Control as="select"
							className="my-0 mr-sm-0"
							id="inlineFormCustomSelectPref"
							custom
							style={{width:"100px"}} name="roles" id="roles" onChange={handleChangeRole}>
						<option value="user">user</option>
						<option value="editor">editor</option>
						<option value="admin">admin</option>
					</Form.Control>
                    <Col xs="auto">
						<Button type="submit" className="mb-2">SignUp  </Button>
						</Col>
					</Form.Row>

				</Form>
			</Else>
		</If>
	);
};

export default SignUp;