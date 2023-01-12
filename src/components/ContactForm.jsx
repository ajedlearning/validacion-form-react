import React from 'react'
import { useForm } from '../hooks/useForm'

const initialForm = {}
const validationsForm = (form) => {}
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
