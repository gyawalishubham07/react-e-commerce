import { Provider } from "react-redux"
import Routes from "./Routes"

import { ToastContainer } from "react-toastify"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./redux/store"
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import 'react-toastify/dit/ReactToastify.css';  // not compalsoury

function App() {
  return (
    // for use redux globally in app
   <Provider store={store}> 
   <PersistGate loading={null} persistor={persistor}> 
     <Routes/>
     <ToastContainer/>
     </PersistGate>
   </Provider>
  )
}

export default App