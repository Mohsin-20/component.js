import Link from "next/link";
import Header from"./components/header/Header";
import Footer from "./components/Footer/footer";



const HomePage= () => {
  return (
    <div>
      
      <Header/>
      <h1 className="green">This is a HomePage</h1>
      <Footer/>
    </div>
  )
}

export default HomePage;
