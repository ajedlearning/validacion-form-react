import { useState } from 'react'


export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setloading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleChange = (e) => {
    //una forma de hacerlo para obtener los valores de los inputs
    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value,
    // })

    //otra forma mas optimizada es usando destructuring
    const { name, value } = e.target
    setForm({
      ...form,  
      [name]: value,
    })

  }
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  }
  const handleSubmit = (e) => {}

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}
