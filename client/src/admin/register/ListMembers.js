import React, {Fragment, useEffect, useState} from 'react'
import Layout from '../../core/Layout';
import { listMembers, deleteMember } from '../../actions/memberActions'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom";



const ListMembers = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

   const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const [data, setData] = useState(users)

    console.log(users)


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    //const custDelete = useSelector((state) => state.custDelete)
    //const { success: successDelete } = custDelete



    useEffect(() => {
        if (userInfo && userInfo.role === 0) {
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
           return setData(users)
        }

        let results = users && users.filter(user =>
            user.name.toString().toLowerCase().includes(target)
        )

         setData(results)

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
            <h4><Link to="/add-member"><button>Add Member</button></Link></h4>

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
                        <th scope="row">{users._id}</th>,
                        <td>{users.firstName}</td>,
                        <td>{users.email}</td>
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