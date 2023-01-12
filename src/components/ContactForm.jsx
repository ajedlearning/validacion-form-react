import React from 'react'
import { useForm } from '../hooks/useForm'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: '',
}
const validationsForm = (form) => {
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexComments = /^.{1,255}$/
  if (!form.name.trim()) {
    errors.name = "El campo 'nombre' es requerido"
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El campo nombre solo acepta letras y espacios en blanco'
  }
  if (!form.email.trim()) {
    errors.email = "El campo 'email' es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'El campo email es incorrecto'
  }
  if (!form.subject.trim()) {
    errors.subject = "El campo 'subject' es requerido"
  }
  if (!form.comments.trim()) {
    errors.comments = "El campo 'comments' es requerido"
  } else if (!regexComments.test(form.comments.trim())) {
    errors.name = 'El campo comments no debe exceder los 255 caracteres'
  }

  return errors
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
            {errors.name && (
              <p className='text-danger'>{errors.name}</p>
            )}
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
            {errors.email && (
              <p className='text-danger'>{errors.email}</p>
            )}
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
            {errors.subject && (
              <p className='text-danger'>{errors.subject}</p>
                
             
            )}
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
            {errors.comments && (
              <p className='text-danger'>{errors.comments}</p>
            )}
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

            <input
              className="form-control btn btn-secondary"
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
