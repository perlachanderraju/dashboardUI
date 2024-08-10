import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'; // Update import

const SignUpSchema = Yup.object().shape({
  user_firstname: Yup.string().required('First name is required'),
  user_email: Yup.string().email('Invalid email').required('Email is required'),
  user_password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  user_phone: Yup.string().required('Phone number is required'),
});

const SignUp = () => {
  const navigate = useNavigate(); // Update to useNavigate

  const handleSubmit = async (values) => {
    const payload = {
      ...values,
      user_lastname: "Doe",
      user_city: "Hyderabad",
      user_zipcode: "500072",
    };

    try {
      const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data);
      navigate('/login'); // Update to use navigate
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='loginSection' >
      <div className='sublogin authForm'>

        <h1>Sign Up</h1>
        <Formik
            initialValues={{ user_firstname: '', user_email: '', user_password: '', user_phone: '' }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
            <Form >
                <div>
                <Field type="text" name="user_firstname" placeholder="First Name"  className="field"/>
                <ErrorMessage name="user_firstname" component="div" className='label'/>
                </div>
                <div>
                <Field type="email" name="user_email" placeholder="Email" className="field"/>
                <ErrorMessage name="user_email" component="div" className='label'/>
                </div>
                <div>
                <Field type="password" name="user_password" placeholder="Password" className="field" />
                <ErrorMessage name="user_password" component="div" className='label'/>
                </div>
                <div>
                <Field type="text" name="user_phone" placeholder="Phone Number" className="field"/>
                <ErrorMessage name="user_phone" component="div" className='label'/>
                </div>
                <div className='btn'>
                <button type="submit" disabled={isSubmitting}>Sign Up</button>
                </div>
                
            </Form>
            )}
        </Formik>


      </div>
    </div>
  );
};

export default SignUp;
