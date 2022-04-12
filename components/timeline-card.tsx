/* eslint-disable react/require-default-props */
import React from 'react';
import { FiBriefcase, FiBook } from 'react-icons/fi';

export interface TimelineCardType {
  title: string;
  description: string;
  date: string;
  link: string;
  isCompany?: boolean;
  company?: string;
  school?: string;
}

export default function TimelineCard({
  title,
  description,
  date,
  link,
  isCompany,
  company,
  school,
}: TimelineCardType): React.ReactElement {
  return (
    <li className="relative pl-6 pb-4 last:pb-0 mb-4 last:mb-0 group">
      <div id="dot" className="transition-all duration-300 w-3 h-3 rounded-full bg-custom-black-600 absolute -left-1.5 top-2 group-hover:bg-primary group-hover:ring-8 group-hover:ring-primary group-hover:ring-opacity-25" />
      <h3 className="heading-3 mb-1 md:mb-1">{title}</h3>

      <a href={link} className="text-custom-text-light hover:text-primary">
        {isCompany ? (
          <FiBriefcase className="text-base mr-2 inline align-baseline" />
        ) : (
          <FiBook className="text-base mr-2 inline align-baseline" />
        )}

        {isCompany ? company : school}
      </a>

      <time dateTime="2022-02-21" className="text-sm block mt-3">{date}</time>
      <p className="mt-2">
        {description}
      </p>
    </li>
  );
}
