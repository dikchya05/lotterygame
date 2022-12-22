import {useState} from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./admin.css"

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  ticketNo: Yup.number()
    .min(2, 'Too Short!')
    .required('Required'),
  
});

const RegisterUser =()=> {
const [isThere, setIsThere] = useState('')
    return (
    <div className='yup'>
    <h1>Register </h1>
    <Formik
      initialValues={{
        name: '',
        ticketNo: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
          const requestOptions = {
              method: "POST",
              headers: {
              'Content-type': 'application/json'
              },
              body: JSON.stringify(values)
          }
         fetch('http://localhost:3000/register' , requestOptions).then(res => res.json())
         .then(data => setIsThere(data.msg))
         
      

        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field className= "fields" name="name" placeholder="Full Name" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <br></br> <br></br>
          <Field className= "fields"  name="ticketNo" type="ticketNo" placeholder="Ticket No" />
          {errors.ticketNo && touched.ticketNo ? <div>{errors.ticketNo}</div> : null}
          <br></br> <br></br>
          <button>Register</button>
          <h1>{isThere}</h1>
        </Form>
      )}
    </Formik>
      
     </div>
    );
  }
  
  export default RegisterUser;