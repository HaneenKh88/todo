import React, { useContext, useState } from 'react';
import { If, Else, Then } from 'react-if';
import { LoginContext } from './context';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
	const loginContext = useContext(LoginContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function handleChangeUsername(e) {
		setUsername(e.target.value);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		loginContext.login(username, password);
	}

	return (
		<If condition={loginContext.loggedIn}>
			<Then>
			<Button type="submit" className="mb-2"onClick={loginContext.logout}>
				Log Out 
				</Button>
			</Then>
			<Else>
				<Form onSubmit={handleSubmit}>
					<Form.Row>
						<Col xs={5}>
							<Form.Control type="text"
								name="username"
								placeholder="Enter Username"
								onChange={handleChangeUsername} />
						</Col>
						<Col xs={5}>
							<Form.Control type="password"
								name="password"
								placeholder="Enter password"
								onChange={handleChangePassword} />
						</Col>
						<Col xs="auto">
							<Button type="submit" className="mb-2">
								Login
      </Button>
						</Col>
					</Form.Row>
				</Form>
		
			</Else>
		</If>
	);
};

export default Login;