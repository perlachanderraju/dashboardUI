import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'; // Update import
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';

const LogInSchema = Yup.object().shape({
  user_email: Yup.string().email('Invalid email').required('Email is required'),
  user_password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LogIn = () => {
  const navigate = useNavigate(); // Update to useNavigate

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data)
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/dashboard'); // Update to use navigate
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className='loginSection'>
      <div className='authForm sublogin'>
        <h1>Log In</h1>
        <Formik
          initialValues={{ user_email: '', user_password: '' }}
          validationSchema={LogInSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='authForm'>
              <div>
                <Field type="email" name="user_email" placeholder="Email" className="field"/>
                <ErrorMessage name="user_email" component="div" className='label'/>
              </div>
              <div>
                <Field type="password" name="user_password" placeholder="Password" className="field"/>
                <ErrorMessage name="user_password" component="div" className='label' />
              </div>
              <div className='btn'>
              <button type="submit" disabled={isSubmitting}>Log In</button>
              </div>
              <Link to="/" className='link'>
                <div className='btnh' >
                <button >Back to home</button>
                </div>
              </Link>

            </Form>
          )}
        </Formik>
      </div>
      
    </div>
    </>
  );
};

export default LogIn;
