import React from 'react';
import PropTypes from 'prop-types';
import styles from './blog-post-card2.module.css';
// import alumniData from './aluminiData.json';

const BlogPostCard2 = (props) => {

  return (
    <div
      className={` ${styles['blog-post-card']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.profile_src}
        image_src={props.profile_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>{props.name}</span>
        </div>
        {/* <h1 className={styles['text2']}>{aluminiData.Name}</h1> */}
        <span className={styles['text1']}>{props.branch}</span>
        <span className={styles['text3']}>{props.company}</span>
        <span className={styles['text3']}>{props.package}</span>
        {/* <span className={styles['text3']}>{props.batch}</span> */}

        <div className={styles['container2']}>
          <div className={styles['profile']}>
            <a href={props.linkedInURL}><img
              alt={props.profile_alt}
              src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
              className={styles['image1']}
            /></a>
            <img
              alt={props.profile_alt}
              src="https://static-00.iconduck.com/assets.00/social-instagram-icon-2048x2048-xuel0xhc.png"
              className={styles['image1']}
            />
            <img
              alt={props.profile_alt}
              src="https://cdn.pixabay.com/photo/2021/05/22/11/38/whatsapp-6273368_1280.png"
              className={styles['image1']}
            />
            {/* <span className={styles['text4']}>{props.author}</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
  image_alt: 'image',
  label: 'ENTERPRISE',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  profile_src:
    'https://cdn-icons-png.flaticon.com/256/174/174857.png',
  title: 'Lorem ipsum dolor sit amet',
  profile_alt: 'profile',
  when: '3 days ago',
  author: 'Jane Doe',
}

BlogPostCard2.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  profile_src: PropTypes.string,
  title: PropTypes.string,
  profile_alt: PropTypes.string,
  when: PropTypes.string,
  author: PropTypes.string,
}

export default BlogPostCard2