import { BrowserRouter } from "react-router-dom"
import RoutesLayout from "./Routes/layout"

import "./App.css"
import ErrorBoundary from "./Components/Errors/ErrorBoundary"

function App() {

  return (
    <ErrorBoundary>
       <BrowserRouter>
        <RoutesLayout />
      </BrowserRouter>
    </ErrorBoundary>
     

  )
}

export default App
