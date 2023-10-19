import React from 'react'

function CreateStudent() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <h2>Add Student</h2> 
            <form>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input type='text' className='form-control' id='name' placeholder='Enter Name' />
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type='email' className='form-control' id='email' placeholder='Enter Email' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    </div>

  )
}

export default CreateStudent