import Frame, { Img, Text } from '../../components/frame/Frame';
import img from "../../assets/images/delivary_man.png"
import { useNavigate } from 'react-router-dom';
import { FaDollarSign, FaHeadphones, FaLocationArrow, FaTaxi, FaTruck } from "react-icons/fa";
import './services.scss'
export default function Services() {
  const navigat = useNavigate()
  return (
    <section className="services">
      <div className="container">
        <Frame>
          <Text
            head={"Why We're best Quality Gorcery shopper"}
            p={"Grocery food is fresh and minimally processed, meaning that it has not been heavily altered with additives, preservatives, or other synthetic ingredients. It should also be free from harmful substances such as pesticides."}
            btnText={"Order Now"}
            method={() => { navigat('/categories') }}
          >
            <ul>
              <li><span><FaTruck /></span> Fast Delivary</li>
              <li><span><FaLocationArrow /></span> Truck and mange</li>
              <li><span><FaHeadphones /></span> Customer Support</li>
              <li><span><FaDollarSign /></span> Comptitive Price</li>
            </ul>
          </Text>
          <Img imgSrc={img} />
        </Frame>
      </div>
    </section>
  )
}