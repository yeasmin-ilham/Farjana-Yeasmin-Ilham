
import LandingPage from "./components/Hero/LandingPage";
import ProductPage from "./components/Hero/ProductPage";

export default function Home() {
  return (
    <main>
      <div  className="min-h-screen max-w-7xl mx-auto bg-white">
    <LandingPage/>
    <ProductPage/>
    </div>
    </main>
  );
}
