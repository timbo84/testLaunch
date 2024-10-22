'use client'

import React from "react";
import rectangle from "../public/images/rectangle.png";
import pearlsLeft from '../public/images/pearlsLeft.png';
import rFlower from '../public/images/rFlower.png';


import Image from "next/image"; // Assuming you're using next/image
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { PiSprayBottleBold } from "react-icons/pi";
import { GiJusticeStar } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiNotepadBold } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa";
import  NavBar from "../app/components/nav"


import { FaBook } from "react-icons/fa";

import Styles from "../styles/Home.module.css";

const YourComponent = () => {
  return (
    <>
    <NavBar />
      <section className={Styles.sectionContainer1}>
        <div className={Styles.container1}>
          <div className={Styles.textOverlay1}>
            <h1>
              Empowering Women, <br /> Serving Communities
            </h1>
            <p className={Styles.paragraph}>
              At Delta Sigma Sorority, Inc., we believe in the power of
              sisterhood and the impact of community service. Our dedicated
              members strive to make a difference in Lawton and beyond through
              various initiatives that empower women and uplift our communities.
            </p>
          </div>
        </div>
      </section>
      {/* section2 */}
      <section className={Styles.sectionContainer2}>
  <div className={Styles.container2}>
    <div className={Styles.textCard}>
      <h1>Our Mission</h1>
      <h2>Building Stronger Communities, Together</h2>
      <p>
        Our sorority is dedicated to fostering sisterhood and empowering women through community service and leadership. We strive to make a positive impact in our communities and support each other in all our endeavors.
      </p>
      <ul>
        <li>Empowering Women Together</li>
        <li>Creating Change Through Service</li>
        <li>Building Leaders with Integrity</li>
      </ul>
    </div>
  
          <Image
            src={rectangle}
            alt="Hero Image"
            className={Styles.heroImage}
            width={350}
            height={250}
          />
          <br />
        </div>
        <button className={Styles.redButton}>Click Me</button>
      </section>
      <section className={Styles.sectionContainer3}>
        <div className={Styles.container3}>
          <div className={Styles.textOverlay3}>
            <h1>
              Investigate Our Vast Selection <br />
              Of Volunteer Opportunities
            </h1>
            <p>
              Explore our diverse range of volunteer opportunities and find a
              project that <br /> aligns with your passions and skills.
            </p>
            <div className={Styles.cards}>
              <div className={Styles.card}>
                <FaHamburger />
                <h3>Local Food Drives</h3>
                <p>
                  Help organize and distribute food to those in need within our
                  community.
                </p>
              </div>
              <div className={Styles.card}>
                <PiSprayBottleBold />
                <h3>Environmental Cleanups</h3>
                <p>
                  Join us in keeping our parks and neighborhoods clean and
                  green.
                </p>
              </div>
              <div className={Styles.card}>
                <FaPeopleGroup />
                <h3>Mentoring Programs</h3>
                <p>
                  Provide guidance and support to young women and students in
                  need of mentorship.
                </p>
              </div>
              <div className={Styles.card}>
                <GiJusticeStar />
                <h3>Advocacy Efforts</h3>
                <p>
                  Participate in campaigns and initiatives that promote
                  important social causes.
                </p>
              </div>
              <div className={Styles.card}>
                <GrWorkshop />
                <h3>Community Workshops</h3>
                <p>
                  Assist in the planning and execution of educational workshops
                  for community members.
                </p>
              </div>
              <div className={Styles.card}>
                <FaMoneyBillTrendUp />
                <h3>Fundraising Events</h3>
                <p>
                  Help raise funds for various charitable organizations and
                  causes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className={Styles.sectionContainer4}>
  <div className={Styles.sideImage}>
  <Image src={pearlsLeft} alt="Right Flower" width={100} height={200} />
  </div>
  <div className={Styles.container4}>
    <div className={Styles.textOverlay4}>
      <h1>Your Text Here</h1>
      <div className={Styles.cards2}>
        <div className={Styles.card2}>
          <FaBook />
          <h3>Chapter information</h3>
          <p>Card content goes here.</p>
        </div>
        <div className={Styles.card2}>
      <PiNotepadBold />
      <h3>Chapter Programs</h3>
          <p>Card content goes here.</p>
        </div>
        <div className={Styles.card2}>
       <FaRegCalendarCheck />
       <h3>Chapter Events</h3>
          <p>Card content goes here.</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  </div>
  <div className={Styles.sideImage}>
    <Image src={rFlower} alt="Right Flower" width={100} height={200} className="rightFlower" />
    </div>
</section>

      
<section className={Styles.sectionContainer5}>
  <div className={Styles.container5}>
    <h1>Scholarship Application</h1>
    <h2>Eligibility Criteria</h2>
    <ul>
      <li>Must be a high school senior or current college student.</li>
      <li>Minimum GPA of 3.0 on a 4.0 scale.</li>
      <li>Demonstrated involvement in community service and leadership activities.</li>
    </ul>
    <h2>Required Documents</h2>
    <ul>
      <li>Completed Scholarship Application Form.</li>
      <li>Official academic transcripts.</li>
      <li>Two letters of recommendation (one academic, one community service).</li>
      <li>Personal statement (500 words) detailing your academic goals, leadership experiences, and commitment to community service.</li>
      <li>Resume highlighting extracurricular activities, awards, and honors.</li>
    </ul>
    <h2>Submission Guidelines</h2>
    <ul>
      <li>Applications must be submitted by [Application Deadline Date].</li>
      <li>All documents should be emailed to [Scholarship Application Email Address] or mailed to [Physical Address].</li>
      <li>Late or incomplete applications will not be considered.</li>
    </ul>
    </div>
      </section>
  
      //6
     

    </>
  );
};

export default YourComponent;
