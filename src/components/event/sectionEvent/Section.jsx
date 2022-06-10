import Centrebar from "./centrebar/Centrebar";
import Leftbar from "./leftbar/Leftbar";
import "./section.scss";

const Section = () => {
  return (
    <div className="sectionEvent">
      <div className="mainEvent">
        <Leftbar />
        <Centrebar />
      </div>
    </div>
  );
};

export default Section;
