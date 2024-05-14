import './App.css'
import { FaHotel } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { PiAirplaneTiltFill } from "react-icons/pi";

function App() {

  return (
    <>
      <nav>
        <img src="/images/logo.png" alt="logo" className='logo'/>
        <ul className='trips'>
          <li className=''> <PiAirplaneTiltFill /> Flights </li>
          <li> <FaHotel /> Hotels </li>
          <li> <FaTrainSubway /> Trains </li>
          <li> <FaCarRear /> Cabs </li>
        </ul>
        <ul className='accinfo'>
          <li> My Trips </li>
          <li> Login / SignUp </li>
        </ul>
      </nav>
      <section>
        <div className="booking">
          <form action="" id='station'>
            <label><input type="radio" id='selectST' name='options' /> One Way </label>
            <label><input type="radio" id='selectST' name='options' /> Round Trip </label>
            <label><input type="radio" id='selectST' name='options' /> Multi City </label>
            <p class='ml-20'> Book International and Domestic Flight </p>
          </form>
          
        </div>
      </section>
    </>
  )
}

export default App
