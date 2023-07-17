import React, {Fragment, useEffect, useState} from 'react'
import Layout from '../../core/Layout';
import { listMembers, deleteMember } from '../../actions/memberActions'
import Modal from '../../components/modal/Modal'
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom";
import { usersRegister } from '../../actions/userActions';



const ListMembers = () => {


    const [message, setMessage] = useState('');
    const initialValues = {
      firstName: 'Dennis',
      lastName: 'Mungai',
      email: 'dmungai@gmail.com', 
      idNumber: 987654, 
      profession: 'Project Manager', 
      contact: '0712345678'
    };


    const submit = async(form) => {
        const { firstName, lastName, email, idNumber ,profession, contact } = form
       dispatch(usersRegister(firstName, lastName, email, idNumber ,profession, contact))
    }
          
    const navigate = useNavigate()
    const dispatch = useDispatch()

   const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const [member, setMember] = useState(users)
    const [ modal, setModal ] = useState(false)

    const openModal = () =>{
        setModal(!modal)
    }

    console.log(users)


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    //const custDelete = useSelector((state) => state.custDelete)
    //const { success: successDelete } = custDelete



    useEffect(() => {
        if (userInfo && userInfo.role === 1) {
            dispatch(listMembers())
        } else {
            navigate('/list-members')
        }
    }, [dispatch, userInfo])



    const deleteHandler = (id) => {
        console.log(id)
        if (window.confirm('Are you sure')) {
            dispatch(deleteMember(id))
        }
    }

    const searchUsers = (target) => {
        
        if (target === ' ') {
           return setMember(users)
        }

        let results = users && users.filter(user =>
            user.name.toString().toLowerCase().includes(target)
        )

         setMember(results)

    }
 
    

    // search users
    // const results = !searchTerm ? users : users && users.filter(user =>
    //     user.name.toString().toLowerCase().includes(searchTerm)
    // )


    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

    return (
        <Layout>
            <h4>
             <Link to=''>
               <button onClick={openModal}>
                 Add Member
               </button>
               <Modal trigger ={modal} setTrigger ={setModal}>
                 <h3>Add Member</h3>
                 <>
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
            </>
               </Modal>
             </Link>
            </h4>

            <h2 className="mb-4">List of Members</h2>

            { loading ? (
                showLoading()
            ) : error ? (
                showError()
            ) : (
                <div className="row">

                    <div className="col-lg-8">
                        <form>
                            <div className="input-group">
                                <input className="form-control" type="text" onChange={(e) => {
                                    e.preventDefault();
                                    return searchUsers(e.target.value)
                                }}/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button"><i className="fas fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                    
                    
                    <div className="col-sm-8">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>


                    </tr>
                    <tbody>
                        {users.length !== 0 ? (
                        <th scope="row">{member._id}</th>,
                        <td>{member.firstName}</td>,
                        <td>{member.email}</td>
                        ) : (<td><b>No Users found</b></td>)}
                    </tbody>
                    </thead>
                    
                </table>
                    </div>
                </div>
            )}

        </Layout>
    )


}






export default ListMembers