import { useState } from "react"

//queda pendiente agregar la funcion validateForm en el useState de form
export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setloading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange=(e)=>{}
    const handleBlur=(e)=>{}
    const handleSubmit=(e)=>{}

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}

  