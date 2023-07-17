import { Outlet, useSearchParams } from "react-router-dom";
import Product from "./Product";
import './products.scss';
import { useEffect, useState } from "react";
export default function Products(props) {
  // const [useSearchParam, setUseSearchParams] = useSearchParams();
  const [Data, setData] = useState()
  useEffect(() => {
    setData(props.data)
  }, [])
  // const filtering = () => {
  //   // start nav project 
  //   const navLinks = document.querySelectorAll(".nav-products ul li button");
  //   const productsItems = Array.from(document.querySelectorAll(" .container .product"))
  //   navLinks.forEach(el => {
  //     el.addEventListener("click", addClassActive);
  //   });
  //   function addClassActive() {
  //     navLinks.forEach((el) => {
  //       el.classList.remove("active");
  //       this.classList.add("active");
  //     })
  //   }
  //   // end nav project 
  // }
  // filtering()
  const filterResult = (catItem) => {
    const result = props.data.filter((element) => {
      return element.category === catItem
    });
    setData(result)
  }
  return (
    <section>
      <div className='header-categories'>
        <nav className="nav-products">
          <ul>
            <li><button onClick={() => setData(props.data)}>All items</button></li>
            <li><button onClick={() => filterResult('meat')}>Fresh Meat</button></li>
            <li><button onClick={() => filterResult('vegetable')}>Fresh vegetable</button></li>
            <li><button onClick={() => filterResult('fruits')}>Fresh fruits</button></li>
            <li><button onClick={() => filterResult('nuts')}>Fresh nuts</button></li>
          </ul>
        </nav>
      </div>
      <div className="container">
        {Data?.map(el => <Product
          handleAddProduct={props.handleAddProduct}
          key={el.id}
          id={el.id}
          category={el.category}
          title={el.title}
          price={el.price}
          des={el.des}
          imgSrc={el.img}
        />)}
        <Outlet />
      </div>

    </section >
  )
}