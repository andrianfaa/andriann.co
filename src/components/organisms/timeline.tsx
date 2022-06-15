import { memo } from "react";
import { timeline as TimelineData } from "../../data";
import { TimelineCard } from "../molecules";

function Timeline() {
  return (
    <ul className="flex flex-col">
      <TimelineCard data={TimelineData} />
    </ul>
  );
}

export default memo(Timeline);
