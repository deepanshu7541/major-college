import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPostCard2 from './blog-post-card2';
import styles from './alumni.module.css';
import alumniData from './aluminiData.json'
const Alumni = () => {

  return (
    <div className={styles.home_container}>
      <div className={styles.list_item}>
        
        {alumniData.map((alumniData, index) => (
          <BlogPostCard2
            key={index}
            profile_src={alumniData.Profile || "https://cdn-icons-png.flaticon.com/512/4645/4645949.png"}
            rootClassName={styles.rootClassName3}
            name={alumniData.Name}
            branch={alumniData.Branch}
            company={alumniData.Company}
            package={alumniData.Package}
            linkedInURL={alumniData.LinkedInURL}
            // batch={alumniData.batch}
          ></BlogPostCard2>
        ))}
      </div>
    </div>
  );
};

export default Alumni;