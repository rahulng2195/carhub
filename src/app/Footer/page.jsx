import Link from "next/link"

const Footer = () => {
  return (
    <section className="footer_Sec bg-slate-100 border-spacing-1 shadow-md text-center">
      <div className="">
          <ul className="md:flex md:justify-around text-center  py-3 text-black pl-2 list-none">
            <li><Link href="/">CarHub @2024</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Contact Us</Link></li>
            <li><Link href="/">Privacy</Link></li>
            <li><Link href="/">Term & Conditions</Link></li>
          </ul>
      </div>
    </section>
  )
}

export default Footer