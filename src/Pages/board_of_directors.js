import React from 'react'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from '../assets/team/member-1.png';
import Member2 from '../assets/team/member-2.png';
import Member3 from '../assets/team/member-3.png';
import Member4 from '../assets/team/member-4.png';
import Member5 from '../assets/team/member-5.png';
import Member6 from '../assets/team/member-6.png';
import TeamCard from './team-card';

import './ngsoftglance.css'
// import SectionHeader from '../components/section-header';
import Review from '../components/review/review';


import '../components/review/review.css'


const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Saimon Harmer',
    title: 'Saimon Harmer',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Aaron Nunez',
    name: 'Aaron Nunez',
    designation: 'Aaron Nunez Web Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Lina Jutila',
    title: 'Lina Jutila',
    designation: 'Web Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Saimon Harmer',
    title: 'Saimon Harmer',
    name: "Ahmad",
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Web Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

const BoardMembers = () => {
	return (
    <section>
      <div claasName="board__header">
        <div className="board__members">
        <h1 className="members">Board Members</h1>
        <span className="board__team">Our Team of talented individuals</span>
        </div>
        <div className="grid">
          {data.map((item) => (
           <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </div>
      </div>
     <main>
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
    </section>
	)
}

export default BoardMembers