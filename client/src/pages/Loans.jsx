import React from 'react'
import Layout from '../core/Layout'

function Loans() {
  return (
    <Layout>
    <div>
      <h2>Loan Application Form</h2>
      <h3>Name</h3>
       <label >First Name: </label>
       <input type="text" placeholder='F.Name' onChange={(e) =>(e.target.value)} />
       <label >Last Name: </label>
       <input type="text" placeholder='L.Name' onChange={(e) =>(e.target.value)} />

       <label>Date of Birth</label>
       <input type="text" placeholder='dd/mm/yy' onChange={(e) =>(e.target.value)} />

       <label>Gender: </label>
       <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
           Male
        </label>
       </div>
       <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
        <label class="form-check-label" for="flexCheckChecked">
           Female
        </label>
      </div>

      <label>Contact: </label>
      <input type="number" placeholder='PhoneNumber' onChange={(e) =>(e.target.value)}/>

      <label>Loan Amount</label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">5000-10,000</option>
        <option value="2">11,000-20,000</option>
        <option value="3">21,000-35,000</option>
      </select>
    </div>
  </Layout>
  )
}

export default Loans