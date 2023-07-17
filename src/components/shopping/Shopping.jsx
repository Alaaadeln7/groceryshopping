import './shopping.scss';
import formateCaurrncy from '../formatCurrency';
export default function Shopping({ cartItems, handleAddProduct, removeProduct, handelClearShopping }) {
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  return (
    <section className='shopping-cart'>
      <div className="container">
        <div className='container-items'>
          <div className="cart-items-header">
            <span className='total-price'>Total price : {formateCaurrncy(totalPrice)}</span>
            {cartItems.length !== 0 && <button onClick={() => handelClearShopping()}>Clear</button>}
          </div>
          {/* <button >back</button> */}
          {cartItems.length === 0 && <div><h1>you not added any items</h1></div>}
          {cartItems.map((item) => (
            <div key={item.id} className='cart-item'>
              <div className="img">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div className='text'>
                <h3>{item.title}</h3>
                <p> price : {formateCaurrncy(item.price)}</p>
                <div className='btns'>
                  <button className='btn' onClick={() => handleAddProduct(item)}>+</button>
                  <button className='btn' onClick={() => removeProduct(item)}>-</button>
                </div>
              </div>
              <span className='clac-price'>{item.quantity} * {formateCaurrncy(item.price)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
