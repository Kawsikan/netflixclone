import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Signup } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

const firebase = {
    auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() =>
            Promise.resolve({ user: { updateProfile: jest.fn(() => Promise.resolve('I am signed up!')) } })
        ),
    })),
};

describe('<Signup />', () => {
    it('renders the sign up page with a form submission', async () => {
        const { getByTestId, getByPlaceholderText, queryByTestId } = render(
            <Router>
                <FirebaseContext.Provider value={{ firebase }}>
                    <Signup />
                </FirebaseContext.Provider>
            </Router>
        );

        await act(async () => {
            await fireEvent.change(getByPlaceholderText('First Name'), { target: { value: 'Kawsikan' } });
            await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'it19185262@my.sliit.lk' } });
            await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'sliitemail' } });
            fireEvent.click(getByTestId('sign-up'));

            expect(getByPlaceholderText('Email address').value).toBe('it19185262@my.sliit.lk');
            expect(getByPlaceholderText('Password').value).toBe('sliitemail');
            expect(queryByTestId('error')).toBeFalsy();
        });
    });
});
