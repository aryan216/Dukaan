import { FaPlus } from "react-icons/fa";

type productProps={
    productId:string;
    photo:string;
    name:string;
    price:number;
    stock:number;
    handler:()=>void;
}
// const server=()=>{}; 

const ProductCard=({
    productId,
    price,
    name,
    photo,
    stock,
    handler,
}:productProps)=>{
    return (
        <div className="productCard">
            <img src={photo} alt={name} />
            <p>{name}</p>
            <span>₹{price}</span>
            <div>
                <button onClick={()=>handler()}>
                    <FaPlus/>
                </button>
            </div>
        </div>
      );
};


  


export default ProductCard;