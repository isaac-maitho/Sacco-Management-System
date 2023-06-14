import { useState } from 'react'
import Layout from '../../core/Layout';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';


function RegisterMembers() {
  const [message, setMessage] = useState('');
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const submit = (form) => {
    setMessage(`Thanks for signing up, ${form.firstName} ${form.lastName}`);
  };
  

  return (
    <Layout>
     <div className="container text-center">
      <Form submit={submit} initialValues={initialValues}>
        <FormInput 
          label="First Name" 
          name="firstName" 
          placeholder="First Name"
          />
        <FormInput 
          label="Last Name" 
          name="lastName" 
          placeholder="Last Name"
          />
        <FormInput 
          label="Email" 
          name="email" 
          placeholder="Email"
          />
        <FormInput 
          label="Phone Number" 
          name="phoneNumber" 
          placeholder="Phone Number"
          />
        <FormInput 
          label="ID" 
          name="idNumber" 
          placeholder="Id Number"
          />
        <FormInput 
          label="Profession" 
          name="profession" 
          placeholder="Profession"
          />
        <FormInput 
          label="Contributions /WK" 
          name="conributions" 
          placeholder="Contributions"
          />
       </Form>
       <p>{message}</p>
      </div>
    </Layout>
  );
}

export default RegisterMembers;