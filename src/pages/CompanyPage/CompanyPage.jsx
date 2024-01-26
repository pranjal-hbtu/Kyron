import About from "./components/About";
import Whyk from "./components/Whyk";
import Technology from "./components/Technology";
import Cards from "./components/Cards";

export default function CompanyPage() {
  return (
    <div className="overflow-x-hidden">
      <About />
      <Whyk />
      <Technology />
      <Cards />
    </div>
  );
}
