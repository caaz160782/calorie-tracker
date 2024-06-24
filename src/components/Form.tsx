import { useState,ChangeEvent,FormEvent } from 'react'
import { Register } from '../types/index';
import { categories } from '../data/categories'



const Form = () => {
    const [register,setRegister]=useState<Register>({
        category: 1,
        activity: '',
        calories: 0
    })

  const handleChange=(e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>)=>{
    const isNumberField =['category','calories'].includes(e.target.id)
    setRegister({...register,[e.target.id]: isNumberField? +e.target.value :e.target.value})
  }  

  const isValidActivity=()=>{
    const { activity , calories }=register
     return activity.trim() !== '' && calories >0
  }

  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }

  return (
    <form className=' space-y-5 bg-white shadow p-10 rounded-lg'
    onSubmit={handleSubmit}
    >
        <div className=' grid grid-cols-1 gap-3'>
            <label htmlFor='category' className=' font-bold'>Categoría : </label>
            <select
             className=' border border-slate-300 p-2 rounded-lg w-full bg-white'
             id='category'
             value={register.category}
             onChange={handleChange}
            >
             {
                categories.map(category =>(
                    <option
                     key={category.id}
                     value={category.id}
                    >
                       {category.name}     
                    </option>
                ))
             }   
            </select>
        </div>
        <div className=' grid grid-cols-1 gap-3'>
            <label htmlFor='activity' className=' font-bold'>Actividad : </label>
             <input 
             id="activity"
             type='text'
             className=' border border-slate-300 p-2 rounded-lg'
             placeholder='Ej. Comida, Ensalada, Ejercicio '
             value={register.activity}
             onChange={handleChange}
             >
             </input>
        </div>
        <div className=' grid grid-cols-1 gap-3'>
            <label htmlFor='calories' className=' font-bold'>Calorías : </label>
             <input 
             id="calories"
             type='number'
             className=' border border-slate-300 p-2 rounded-lg'
             placeholder='Calorías. ej. 300 o 500 '
             value={register.calories}
             onChange={handleChange}
             >
             </input>
        </div>
        <input              
             type='submit'
             className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10'
             value={register.category === 1 ?'Guardar Comida':'Guardar Ejercicio'}
             disabled={!isValidActivity()}             
             >
             </input>
    </form>
  )
}

export default Form