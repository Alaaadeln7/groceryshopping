import Frame, { Img, Text } from '../../components/frame/Frame';
import './about.scss';
import delivary_img from "../../assets/images/delivary_man.png"
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigat = useNavigate()
  return (
    <section className="about">
      <div className="container">
        <Frame>
          <Img imgSrc={delivary_img} alt="delivery" />
          <Text head={'Best Quality and Healthy and Fresh Grocery'}
            p={'Grocery food is fresh and minimally processed, meaning that it has not been heavily altered with additives, preservatives, or other synthetic ingredients. It should also be free from harmful substances such as pesticides, antibiotics, and hormones.'}
            btnText={"Order Now"}
            method={() => { navigat('/categories') }} >
            <ul>
              <li>Best Services than other</li>
              <li>100% organic and Natural products</li>
              <li>100% returns and refunds</li>
              <li>User-friendly Mobile app</li>
            </ul>
          </Text>
        </Frame>
      </div>
    </section>
  )
}