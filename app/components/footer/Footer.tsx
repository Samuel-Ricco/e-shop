import Link from "next/link";
import Container from "../container/Container";
import FooterList from "./footerList/FooterList";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return <footer className="
    bg-slate-700
    text-slate-200
    text-sm
    mt-16"
  >
    <Container>
      <div className="
        flex
        flex-col
        md:flex-row
        justify-between
        pt-16
        pb-8"
      >
        <FooterList>
          <h3 className="
            text-base
            font-bold
            mb-2"
          >Shop Categories</h3>
          <Link href="#">
            Phones
          </Link>
          <Link href="#">
            Desktop Computers
          </Link>
          <Link href="#">
            LapTop
          </Link>
          <Link href="#">
            Gaming
          </Link>
          <Link href="#">
            Tv & Monitor
          </Link>
          <Link href="#">
            Accessories
          </Link>
        </FooterList>
        
        <FooterList>
          <h3 className="
            text-base
            font-bold
            mb-2"
          >Rapid Link</h3>  
          <Link href="#">
            Contact Us
          </Link>
          <Link href="#">
            Privacy Policy
          </Link>
          <Link href="#">
            Shipping Policy
          </Link>
          <Link href="#">
            FAQ
          </Link>
        </FooterList>

        <FooterList>
          <h3 className="
            text-base
            font-bold
            mb-2"
          >About Us</h3>
          <Link href="#">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae nisi nesciunt, 
            dolor sunt eveniet modi enim quasi! Magni cum nobis ea eaque ducimus quia praesentium rem deleniti saepe perferendis?
          </Link>
        </FooterList>

        <FooterList>
          <h3 className="
            text-base
            font-bold
            mb-2"
          >Follow Us</h3>

          <div className="flex gap-2">
            <Link href="#" className="mb-2">
              <FaSquareFacebook size={32}/>
            </Link>
            <Link href="#"  className="mb-2">
              <FaSquareXTwitter size={32}/>
            </Link>
            <Link href="#"  className="mb-2">
              <FaSquareInstagram size={32}/>
            </Link>
            <Link href="#"  className="mb-2"  >
              <FaLinkedin size={32}/>
            </Link>
          </div>
        </FooterList>

      </div>  
    </Container> 
    
  </footer>;
};

export default Footer;
