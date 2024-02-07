import { Link } from "react-router-dom"
import { FaSearch ,FaShoppingCart, FaUser} from "react-icons/fa";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { useState } from "react";

const user={ _id:"abcd" , role:"admin"};

const Header = () => {
  const [isOpen,setisOpen]=useState<boolean>(false);
  return (
    <nav className="header">
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}><FaSearch /></Link>
        <Link to={"/cart"}><FaShoppingCart /></Link>
        {/* <Link to={"/cart"}><IoIosLogOut /></Link> */}

        {
          user?._id?(
            <>
               <button onClick={()=>setisOpen((prev)=>!prev)}><FaUser/></button>
                <dialog open={isOpen}>
                  <div>
                    {user.role==="admin" && (
                      <Link to={"./admin/dashboard"}>Admin</Link>
                    )}

                    <Link to={"/orders"}>Orders</Link>
                    <button><IoIosLogOut /></button>
                  </div>    
                </dialog>
            </>

          ):(
            <Link to={"/login"}> <IoIosLogIn /> </Link>
          )
        }

          
        



    </nav>
  )
}

export default Header