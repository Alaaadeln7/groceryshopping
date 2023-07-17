import './home.scss';
import saladImg from "../../assets/images/salad.png";
import { FaBell } from 'react-icons/fa';
import img from "../../assets/images/img-1.jpg"
// import Header from '../../components/header/Header';
import Frame from '../../components/frame/Frame';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
  return (
    <section className='home'>

      <div className="container">
        <Frame>
          <div className='text' >
            <h1>Make Healthy Life With Freash Grocery Products</h1>
            <p>Grocery food is fresh and minimally processed,
              meaning that it has not been heavily altered with additives,
              preservatives,
              or other synthetic ingredients.</p>
            <button onClick={_ => navigate('about')}>Show Now</button>
          </div>
          <div className='img'>
            <div className="salad">
              <span><img src={saladImg} alt="salad_img" /></span>
              <p>100% Fresh Food</p>
              <small>Good Quality</small>
            </div>
            <img src={img} alt="photo" />
            <div className="alarm">
              <span><FaBell /></span>
              <p>
                <span> Delivary </span>
                <span>30 Munits</span>
              </p>
            </div>
          </div>
        </Frame>
      </div>
    </section>
  );
}
