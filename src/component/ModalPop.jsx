import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';

function ModalPop() {
    const navigate = useNavigate()

   const formik = useFormik({
    initialValues:{
        name:"",
        imageURL:"",
        house:"",
        description:""        
    },
    validate : (values) => {
      let error ={};
      
      if(values.name == ""){
        error.name = "Please enter the name";        
      }

      if(values.imageURL == ""){
        error.imageURL = "Please enter the imageURL";        
      }

      if(values.house == ""){
        error.house = "Please enter the House";        
      }

      if(values.description == ""){
        error.description = "Please enter the description";        
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post('https://66c9ac4f59f4350f064d1e89.mockapi.io/hotd',values)
        navigate(-1)
      }catch(error){
        alert("Something went wrong")
      }
    }
   })

  return (
    <div class="modal" style={{display:'block'}}>
  <div class="modal-dialog" role='document'>
    <div class="modal-content modalBG">
      <form onSubmit={formik.handleSubmit}>
      <div class="modal-header">
        <h1 class="modal-title">HOD Characters</h1>
      </div>
      <div class="modal-body">
        
         <div className='col-lg-12'>
            <label htmlFor=''  className='form-label'>Enter Name</label>
            <input type="text" 
              name="name" 
              value={formik.values.name}
              onChange={formik.handleChange}
              className={`form-control ${formik.errors.name && 'is-invalid'}`} />
            <span style={{color:'maroon'}}>{formik.errors.name}</span>
         </div>
         <div className='col-lg-12'>
            <label htmlFor='' className='form-label'>Provide Image URL</label>
            <input type="text" 
            name="imageURL" 
            value={formik.values.imageURL}
            onChange={formik.handleChange}
            className={`form-control ${formik.errors.imageURL && 'is-invalid'}`} />
         <span style={{color:'maroon'}}>{formik.errors.imageURL}</span>
         </div>
         <div className='col-lg-12'>
            <label htmlFor='' className='form-label'>House they belong</label>
            <input type="text" 
            name="house" 
            value={formik.values.house}
            onChange={formik.handleChange}
            className={`form-control ${formik.errors.house && 'is-invalid'}`} />
         <span style={{color:'maroon'}}>{formik.errors.house}</span>
         </div>
         <div className='col-lg-12'>
            <label htmlFor='' className='form-label'>Description of Character</label>
            <textarea type="text" 
            name="description" 
            value={formik.values.description}
            onChange={formik.handleChange}
            className={`form-control ${formik.errors.description && 'is-invalid'}`} />
         <span style={{color:'maroon'}}>{formik.errors.description}</span>
         </div>
         
      </div>
      <div class="modal-footer">
      <input type="submit" class="btn btn-primary" value={'Save Changes'}/>
        <button type="button" onClick={()=>{navigate(-1)}} class="btn btn-secondary">Close</button>
      </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default ModalPop