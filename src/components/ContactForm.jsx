import React from 'react'
import { useForm } from '../hooks/useForm'

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:"",
}
const validationsForm = (form) => {
   let errors = {};
   if(!form.name.trim()){
    errors.name = "El campo nombre es requerido";
   }
   return errors;
}
const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm)
  return (
    <div className="container">
      <h2>Formulario de contacto</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
          {errors.name && <div className="alert alert-danger" role="alert">{errors.name}</div>}     
            <div className="input-group mb-3">
             <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Escribe tu nombre"
                onChange={handleChange}
                value={form.name}
                required
                onBlur={handleBlur}
              />
            </div>
            {errors.email && <div className="alert alert-danger" role="alert">{errors.email}</div>}   
            <div className="input-group mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Escribe tu email"
                onChange={handleChange}
                value={form.email}
                required
                onBlur={handleBlur}
              />
            </div>
            {errors.subject && <div className="alert alert-danger" role="alert">{errors.subject}</div>}   
            <div className="input-group mb-3">
              <input
                className="form-control"
                type="text"
                name="subject"
                placeholder="Asunto a tratar"
                onChange={handleChange}
                value={form.subject}
                required
                onBlur={handleBlur}
              />
            </div>
            {errors.comments && <div className="alert alert-danger" role="alert">{errors.comments}</div>}   
            <div className="input-group mb-3">
              <textarea
                className="form-control"
                name="comments"
                cols="50"
                rows="5"
                placeholder="Escribe"
                onChange={handleChange}
                value={form.comments}
                required
                onBlur={handleBlur}
              ></textarea>
            </div>

            <input className="form-control btn btn-secondary" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
