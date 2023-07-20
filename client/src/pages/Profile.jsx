import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Profile() {

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  return (
    <div>{userInfo.name}</div>
  )
}

export default Profile