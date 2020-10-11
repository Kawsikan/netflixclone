import React, { useState } from 'react';
import { FooterContainer } from '../container/footer';
import { HeaderContainer } from '../container/header';
import { Form } from '../components';


export default function Signin() {
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    // Check form input elements are valid
    // Email & Password 
    const isInvalid = password === '' || emailAddress === '';
    const handleSignin = (event) => {
        event.preventDefault();
        // Firebase work here
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />

                        <Form.Input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}