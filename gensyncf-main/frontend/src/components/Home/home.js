import React from 'react';
import {Link} from 'react-router-dom';
import VideoCover from 'react-video-cover';
import ImageSlider from './Images';
import styles from './home.module.css';
import company from './Company.jpeg';
const Home = () => {

  return (
    // <>
    <div className={styles.main_body}>
      {/* <Link to={'/profile'}>Profile</Link> */}
      <div id={styles.loop}>
        {/* <h1><span>Tomorrow starts with</span> <b>GenSync</b>, where mentorship meets opportunities</h1> */}
          <h1><span>Where mentorship meets opportunities! &nbsp; </span></h1>
          <h1><span>Where mentorship meets opportunities! &nbsp; </span></h1>
          <h1><span>Where mentorship meets opportunities! &nbsp; </span></h1>
      </div>

      <section className={styles.main}>
        <VideoCover
          videoOptions={{
            src: 'https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-4519-large.mp4',
            autoPlay: true,
            loop: true,
            muted: true,
          }}
        />
        <div className={styles['first-part']}>
          <h1 className={styles.delay_zoom_out}>Welcome to GenSync</h1>
        </div>
      </section>
      <section className={styles.slider}>
        <ImageSlider />
      </section>
      <section className={styles.member}>
        <div className={styles.started}>
          <h1>Register now to be a member today !!!</h1>
          <Link to="/register"><button className={styles.regButton}>Register Now !</button></Link>
        </div>
        </section>
 
      <section className={styles['recruiters-container']}>
        {/* <h1>BPIT Key Recruiters</h1> */}
        <div className={styles.recruiters}>
          <img
            id={styles.placement_data}
            src={company}
            alt="placement-image"
          />
        </div>
      </section>
      
      <section className={styles.location}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.1754647932676!2d77.11202237815834!3d28.73213218749075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013761946a2b%3A0x64b03b9154d81343!2sPocket%208%2C%20Sector%2011B%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1680676703789!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
    // < />
  );
};

export default Home;

// import {Link} from 'react-router-dom';
// import style from "./home.module.css";
// // import "./home.css";
// import ImageSlider from "./Images";
// function Home() {
//   return (
//     <>

//       <section className='main'>
//       <Link to={'/profile'}>Profile</Link>
//         <img className='image-bg' src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/mckinsey%20explainers/what%20is%20gen%20z/what%20is%20gen%20z__1421908540_hero_1536x864.jpg?cq=50&mw=767&cpy=Center" alt='img'/>
//         <div id='first-part'>
//           <h1>Welcome to GenSync</h1>
//         </div>
//       </section>
//       <section className='slider'>
//         <ImageSlider />
//       </section>
//       <section className='recruiters-container'>
//         <h1>BPIT Key Recruiters</h1>
//         <div className='recruiters'>
//         <img id="placement-data" src="https://imgtr.ee/images/2023/10/23/c6254522e734c7bcf52cfef2d34c8941.png" alt="placement-image"/>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;

// // import {Link} from 'react-router-dom';
// // import style from "./home.module.css";
// // import ImageSlider from "./Images";
// // function Home() {
// //   return (
// //     <>
// //       <div className='main'>
// //         <h1>Welcome to Gensync!!</h1>
// //         <Link to={'/profile'}>Profile</Link>
// //         {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
// //         a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
// //         <ImageSlider />
// //       </div>
// //     </>
// //   );
// // }

// // export default Home;
