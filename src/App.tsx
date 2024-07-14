import { useReducer } from "react"
import { registerReducer,initalState } from "./reducers/registerReducer"
import Form from "./components/Form"
import RegisterList from "./components/RegisterList";

function App() {
  const [state,dispatch] =useReducer(registerReducer,initalState) ;

  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorías
          </h1>
        </div>       
      </header>

      <section className=" bg-lime-500 py-20 px-50">
        <div className=" max-w-4xl mx-auto">
          <Form
          dispatch={dispatch}
          />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <RegisterList 
        activities={state.registers}
        />
      </section>
    </>
  )
}

export default App
