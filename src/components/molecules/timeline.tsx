/* eslint-disable @next/next/no-img-element */
import type { TimelineType } from "../../data";

interface TimelineCardProps {
  data: TimelineType[];
}

function TimelineCard({
  data,
}: TimelineCardProps) {
  return (
    <>
      {data.map(({
        id, title, date: datetime, description, location, url, logo,
      }: TimelineType) => (
        <li key={id} className="w-full ml-3 pl-6 md:pl-8 pb-6 sm:pb-8 last:pb-0 border-l border-black-700 relative">
          <div
            id="indicator"
            className={
              `absolute top-6 -left-1.5 w-3 h-3 rounded-full ${datetime.end.toLowerCase() === "present" ? "bg-primary ring-[6px] ring-primary ring-opacity-25" : "bg-black-500"}`
            }
          />
          <div>
            <img
              src={logo}
              alt={title}
              className="rounded-lg w-14 h-14 inline-block mb-4 object-cover bg-black-100 p-1"
            />

            <h3 className="text-xl sm:text-2xl text-black-100 font-medium mb-4">
              {title}
            </h3>
            <a href={url} className="hover:text-black-100 text-primary inline-block mb-2">
              {location}
            </a>
            <p className="mb-4">
              {description}
            </p>

            <time className="text-sm text-black-100">
              {`${datetime.start} - ${datetime.end}`}
            </time>
          </div>
        </li>
      ))}
    </>
  );
}

export default TimelineCard;
