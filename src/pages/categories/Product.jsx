import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import './product.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { productContext } from "../../App";
import formateCaurrncy from "../../components/formatCurrency";
export default function Product(props) {
  const notify = () => toast.success('add to cart', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    // closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const ratingChanged = (newRating) => {
    console.log(newRating)
  };
  const productContxetData = useContext(productContext);
  const navgiet = useNavigate();
  const productId = props.id;
  return (
    <article data-category={props.category} className={'product ' + props.category} >
      <div className="content">
        <div className="img-product">
          <img src={props.imgSrc} alt="photo" />
        </div>
        <div className="text-product">
          <h2>{props.title}</h2>
          <p>{props.des}</p>
          <div className="product-info">
            <p>{formateCaurrncy(props.price)}</p>
            <p>1000gram</p>
          </div>
          <div className="product-reviews">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700" />
          </div>
          <button onClick={_ => navgiet(`/product/${productId}`)}>Details</button>
          <button onClick={() => { productContxetData.handleAddProduct(props); notify() }}>ADD TO CARD</button>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            // closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </article>
  )
}