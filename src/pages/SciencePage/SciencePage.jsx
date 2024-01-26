import Aihumen from "./components/Aihumen";
import Recruitment from "./components/Recruitment";
import Testcreation from "./components/Testcreation";
import Start from "./components/Start";

export default function SciencePage() {
  return (
    <div className="overflow-x-hidden">
      <Recruitment />
      <Aihumen />
      <Testcreation />
      <Start />
    </div>
  );
}
