import { useActivity } from "./hooks/useActivity";
import { useMemo,useEffect } from "react";
import Form from "./components/Form"
import RegisterList from "./components/RegisterList";
import CaloriesTracker from "./components/CaloriesTracker";


function App() {
  const {state,dispatch}= useActivity()

  const canRestartApp = useMemo(()=>state.registers.length > 0,[state.registers])
  useEffect(()=>{
    localStorage.setItem('registers',JSON.stringify(state.registers))
  },[state.registers])

  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorías
          </h1>

          <button className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase
                            text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
          disabled={!canRestartApp}
          onClick={()=>dispatch({type:'restart-app'})}
          >
            Reiniciar App
          </button>
        </div>       
      </header>

      <section className=" bg-lime-500 py-20 px-50">
        <div className=" max-w-4xl mx-auto">
          <Form />
        </div>
      </section>

      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto ">
        <CaloriesTracker />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <RegisterList   />
      </section>
    </>
  )
}

export default App
