// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Paystackinline from "./component/Paysatckinline"
import Navbar from "./component/Navbar"
import PaystackApi from "./component/PaystackApi"

function App() {


  return (
    <div className="App">
       {/* <>
    <Router>
    <Routes>
          <Route path="/" element={<Pasyatckinline />} />
          
    </Routes>
    </Router>
    </> */}
    <Navbar />
    <div className="w-5/6 mx-auto">   
       <PaystackApi />
    <Paystackinline />
    </div>

    </div>
  )
}

export default App
