import { Outlet } from 'react-router-dom';
import Products from './Products';
import './categories.scss';
export default function Categories(props) {
  return (
    <section className="categories">
      <div className="container" >
        <Products data={props.data} handleAddProduct={props.handleAddProduct} />
        <Outlet />
      </div>
    </section>
  )
}