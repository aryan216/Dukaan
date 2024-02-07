import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../Components/CartItem";

const cart=[
  {
    productId:"sgagaergrae",
    photo:"https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UnYGu7AGL._SY445_SX342_QL70_FMwebp_.jpg",
    name:"macbook",
    price:149999,
    quantity:4,
    stock:10
  }
];
const subtotal=6969;
const tax=Math.round(subtotal*0.18);
const shipping=80;
const Discount=400;
const total=subtotal+tax+shipping-Discount;
const Cart = () => {
  const [couponCode,setCouponCode]=useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode]=useState<boolean>(false);

  useEffect(()=>{
    const timeOutID= setTimeout(()=>{
      if(Math.random()>0.5)setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    },1000);
    return ()=>{
      clearTimeout(timeOutID);
    };
  },[couponCode]);

  return (
    <div className="cart">
      <main>
        {cart.map( (i,idx)=> (
          <CartItem key={idx}  cartItem={i}/> 
        ))}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Tax: ₹{tax}</p>
        <p>Shipping Charges: ₹{shipping}</p>
        <p>discount: <em>- ₹ {Discount}</em></p>
        <p><b>Total: ₹{total}</b></p>

        <input type="text" placeholder="Coupon Code" value={couponCode} onChange={e=>setCouponCode(e.target.value)}/>
        {
          couponCode&&(isValidCouponCode? <span>₹{Discount} off using the <code>{couponCode}</code> coupon</span> :
          <span>Invalid Coupon <VscError/></span>
        )}
      </aside>
    </div>
  )
}

export default Cart