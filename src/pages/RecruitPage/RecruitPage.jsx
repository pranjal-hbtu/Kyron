import Skill from "./components/Skill";
import Discovery from "./components/Discovery";
import Examplatform from "./components/Examplatform";
import Proctoring from "./components/Proctoring";
import Assesments from "./components/Assesments";
import Tracking from "./components/Tracking";
import Shedule from "./components/Shedule";
import Demo from "./components/Demo";

export default function RecruitPage() {
  return (
    <div className="overflow-x-hidden">
      <Demo />
      <Skill />
      <Discovery />
      <Examplatform />
      <Proctoring />
      <Assesments />
      <Tracking />
      <Shedule />
    </div>
  );
}
