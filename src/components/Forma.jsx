import React from 'react';
import { useForm } from "react-hook-form";


function Forma () {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
  <div>
    <h1>Otro formulario</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea 
      name= 'direccion'
      className= 'form-control my-2'
      ref={
        register({
          maxLength:{
            value: 20, 
          }
        })
      }
      />
      {errors.direccion && errors.direccion.type === "maxLength"&&<
      p>Escribe menos</p> 
      }
      <button
      className='btn btn-primary'
      >Enviar</button>
    </form>
  </div>
  );
}

export default Forma;

// export default Forma;