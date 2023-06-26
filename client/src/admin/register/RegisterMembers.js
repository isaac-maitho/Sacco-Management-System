import { useState, useEffect } from 'react'
import Layout from '../../core/Layout';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import { USERS_REGISTER_RESET } from '../../constants/userConstants'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { usersRegister } from '../../actions/userActions';


function RegisterMembers() {
  const [message, setMessage] = useState('');
  const initialValues = {
    firstName: 'Dennis',
    lastName: 'Mungai',
    email: 'dmungai@gmail.com', 
    idNumber: 987654, 
    profession: 'Project Manager', 
    contact: '0712345678'
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin


  const submit = async(form) => {
    const { firstName, lastName, email, idNumber ,profession, contact } = form
   dispatch(usersRegister(firstName, lastName, email, idNumber ,profession, contact))
      
      dispatch({ type: USERS_REGISTER_RESET })
      navigate('/list-members')

   
    
  }


  
  

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
          name="contact" 
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
       </Form>
       <p>{message}</p>
      </div>
    </Layout>
  );
}

export default RegisterMembers;