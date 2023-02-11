import Paystackinline from "./component/Paysatckinline"
import Navbar from "./component/Navbar"
import PaystackApi from "./component/PaystackApi"

function App() {


  return (
    <div className="App ">
    <Navbar />
    <div className="w-5/6 mx-auto lg:w-2/3 lg:mx-auto">   
       <PaystackApi />
    <Paystackinline />
    </div>

    </div>
  )
}

export default App
