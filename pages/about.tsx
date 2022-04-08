import React from 'react';
import Image from 'next/image';
import Me from '@/assets/images/me.png';

import {
  Container, SEO, Footer, TimelineCard,
} from '@/components';
import type { TimelineCardType } from '@/components';

export default function ErrorPage() {
  const data = {
    profileImage: Me,
    name: 'Andrian Fadhilla',
    role: 'Frontend Developer',
    description: 'I\'m a frontend developer based in Bekasi, Indonesia. I\'m passionate about building web applications with Reactjs',
  };

  const timelineData: TimelineCardType[] = [
    {
      title: 'Freelance Junior Frontend Developer',
      description: 'I started my journey as a freelancer in 2022. I was working on a project for a client in other company in the world.',
      date: 'February 2022 - Present',
      isCompany: true,
      company: 'Fusions Visual',
      link: 'https://fusionsvisual.id',
    },
    {
      title: 'Student Internship',
      description: 'PKL (Praktek Kerja Lapangan) is a term used to describe a student\'s work experience in a company. I was working in Pabean Document Administration, BC 2.5 Archiving, and Treasury at KPPBC TMP A Bekasi.',
      date: 'January 2020 - March 2020',
      isCompany: true,
      company: 'Direktorat Jenderal Bea dan Cukai',
      link: 'https://beacukai.go.id',
    },
    {
      title: 'High School Student',
      description: 'Entering High School as a computer network engineering student, it was a exciting time when I was in High School, learning about the world of computer network and some of the technologies that I was using in my life.',
      date: 'June 2018 - May 2021',
      isCompany: false,
      school: 'SMK Boedi Luhur',
      link: 'https://yapenhasboediluhur.sch.id',
    },
  ];

  return (
    <>
      <SEO
        title="About | Andrian Fadhilla"
        description="Andrian Fadhilla is a Frontend Developer based in Bekasi, Indonesia. Passionate about building web applications with Reactjs."
        url="https://andrian.co/about"
        keywords={[
          'About',
          'About Me',
          'About Me Page',
          'About Page',
          'About Me Page',
          'About Page',
          'Andrian Fadhilla',
          'Andrian Fadhilla Page',
          'Andrian',
          'Frontend Developer',
          'Frontend Developer Page',
        ]}
      />

      <Container className="fade-up min-h-[400px]">
        <header className="flex flex-col sm:flex-row-reverse justify-start sm:justify-between items-center py-6 sm:min-h-[350px]">
          <figure className="w-32 sm:w-44 mb-4 md:mb-0 md:mr-12 lg:mr-32 rounded-full">
            <Image
              src={data.profileImage}
              priority
              quality={80}
              alt="Andrian Fadhilla"
              width={200}
              height={200}
              layout="intrinsic"
              className="w-32 sm:w-44 rounded-full"
            />
          </figure>

          {/* Text */}
          <div className="w-full sm:max-w-[500px] text-center sm:text-left">
            <h1 className="heading-1">{data.name}</h1>
            <h2 className="my-2 text-blue-500 font-semibold">{data.role}</h2>
            <p className="md:max-w-[500px]">
              {data.description}
            </p>
          </div>
        </header>

        <Container className="px-0">
          <h2 className="heading-2">
            Timeline
          </h2>
          <p>
            That is my journey in my life.
          </p>

          <ul id="timeline" className="mt-6 flex flex-col border-l border-l-slate-800">
            {timelineData.map((timeline: TimelineCardType) => (
              <TimelineCard key={timeline.title} {...timeline} />
            ))}
          </ul>
        </Container>

        <Container className="px-0">
          <h2 className="heading-2">
            Contact
          </h2>

          <p>
            Hi there, if you want to make a new friendship, bring your idea to reality, or
            {' '}
            just want to know more about me, please contact me on one of my social media account.
          </p>
        </Container>
      </Container>

      <Footer />
    </>
  );
}
