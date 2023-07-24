import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../core/Layout';
//import { Link, Redirect } from 'react-router-dom';
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import {  USER_DETAILS_REQUEST } from '../constants/userConstants'


const Profile = () => {

    const userId = useParams()
    const navigate = useNavigate()
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState(0)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user} = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile



    useEffect(() => {
        if (!user) {
            navigate('/signin')
        } else {
            if (!userInfo.name || !user || success) {
                dispatch({ type:  USER_DETAILS_REQUEST })
                console.log(user)
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, navigate, userInfo, user, success, userId])

  

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
    return(
      <Layout>
        <div className='user-details'>
        <h3>My Profile</h3>
          <p><strong>Name: </strong>{userInfo.name}</p>
          <p><strong>Email: </strong>{userInfo.email}</p>
          <p><strong>Role: </strong>{userInfo.role}</p>
        </div>
      </Layout>
    )
}





export default Profile