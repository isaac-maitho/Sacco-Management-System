import React, {Fragment, useEffect} from 'react'
import Layout from '../../core/Layout';
//import { listCustomers, deleteCustomer } from '../actions/customerActions'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom";



const ListMembers = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

   /* const custList = useSelector((state) => state.custList)
    const { loading, error, customers } = custList

    console.log(customers)*/


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    //const custDelete = useSelector((state) => state.custDelete)
    //const { success: successDelete } = custDelete



    /*useEffect(() => {
        if (userInfo && userInfo.role === 0) {
            dispatch(listCustomers())
        } else {
            navigate('/login')
        }
    }, [dispatch, history, successDelete, userInfo])
*/


    /*const deleteHandler = (id) => {
        console.log(id)
        if (window.confirm('Are you sure')) {
            dispatch(deleteCustomer(id))
        }
    }


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
        );*/

    return (
        <Layout>
            <h4><Link to="/add-member"><button>Add Member</button></Link></h4>

            <h2 className="mb-4">List Members</h2>

        </Layout>
    )


}






export default ListMembers