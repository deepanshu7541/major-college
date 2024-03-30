import React from 'react';
import notices from './NoticesDateSheet.json'
import styles from './notices.module.css';

// const notices = [
//   {
//     Field: "Placement opportunity for LLB students of GGSIP University of the batch passing out in year 2024 in the company Tata Power Company Ltd",
//     Field1: "http://www.ipu.ac.in/Pubinfo2024/nt061223550%20(8).pdf"
//   },
//   {
//     Field: "Notice regarding Academic Audit of Affiliated Colleges for the Academic Year 2022-23",
//     Field1: "http://www.ipu.ac.in/Pubinfo2024/nt061223550%20(7).pdf"
//   },
//   {
//     Field: "Internship and Placement opportunities for students of B.Tech, M.Tech, B.Arch and M.Arch of GGSIP University of the batch passing out in year 2024 and 2025 in the company AtkinsRéalis",
//     Field1: "http://www.ipu.ac.in/Pubinfo2024/nt061223550%20(6).pdf"
//   }
// ];

const Notices = () => {
  return (
    <>
    <div className={styles.content}>
      <h1 className={styles.headi}>Notices</h1>
    </div>
    <div className={styles.maindiv}>
      {/* <h1>Notices</h1> */}
      <ul>
        {notices.map((notice, index) => (
          <li key={index} className={styles.lists}>
            {/* <strong>{notice.Title}</strong> */}
            <strong><a className={styles.focus} href={notice.Title_URL} target="_blank" rel="noopener noreferrer">{notice.Title}</a></strong>

            <br />
            {/* <a href={notice.Title_URL} target="_blank" rel="noopener noreferrer">
              View Notice
            </a> */}
            <br /><br />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Notices;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import fetchedNotices from '../../../Guru Gobind Singh Indraprastha University _Official Website_.json'

// const Notices = () => {
//   const [pdfList, setPdfList] = useState([]);

//   useEffect(() => {
//     const fetchPdfList = async () => {
//       try {
//         // Fetch the list of available PDFs
//         const response = await axios.get('http://localhost:3000/pdfs');
//         setPdfList(response.data);
//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//     };

//     fetchPdfList();
//   }, []);

//   // Function to fetch the content of a specific PDF
//   const fetchPdfContent = async (pdfId) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/pdfs/${pdfId}`);
//       console.log(response.data); // Assuming the response contains the PDF content
//     } catch (error) {
//       console.error('Fetch PDF content error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>PDF List</h2>
//       <ul>
//         {pdfList.map((pdfId, index) => (
//           <li key={index} onClick={() => fetchPdfContent(pdfId)}>
//             {pdfId}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notices;
