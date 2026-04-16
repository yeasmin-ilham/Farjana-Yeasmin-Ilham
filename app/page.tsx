import LandingPage from "./components/Hero/LandingPage";
import ProductPage from "./components/Hero/ProductPage";
import Test from "./components/Hero/Test";


export default function Home() {
  return (
    <main>
      <div  className="min-h-screen max-w-7xl mx-42 bg-white">
    <LandingPage/>
    <ProductPage/>
    </div>
    </main>
  );
}
