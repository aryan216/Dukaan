import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";




const Home = () => {

  const addtocart=()=>{};

  return (
    <div className="home">
      <section></section>
      <h1>Latest Products
      <Link to="/Search" className="findmore">More</Link>
      </h1>
      <main>
        <ProductCard
          productId="gasezevbs"
          name="macbook"
          price={149999}
          stock={399}
          handler={addtocart}
          photo="https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UnYGu7AGL._SY445_SX342_QL70_FMwebp_.jpg"
        />
      </main>
    </div>
  )
}

export default Home