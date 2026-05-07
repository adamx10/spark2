import { Header } from "./components/Header";
import { Hero }  from "./components/Hero";
import CardText from  "./components/CardText";

export default function App (){
  return <>
  
  <div className="bg-[#71717A] min-h-screen p-4 text-black">
    < Header />
    <Hero />
    <CardText />
  </div>
  
  </>
}