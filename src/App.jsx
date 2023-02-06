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
    <PaystackApi />
    <Paystackinline />
    </div>
  )
}

export default App
