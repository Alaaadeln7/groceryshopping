import { useNavigate, useParams } from "react-router-dom"

export default function ProductDetails() {
  const navigate = useNavigate()
  const { productId } = useParams();
  return (
    <section>
      <div className="container">
        <button onClick={() => navigate(-1)}>Back</button>
        <h1>this is product details from product number {productId}</h1>
        {/* <img src={imgSrc} alt="pohot" /> */}
      </div>
    </section>
  )
}