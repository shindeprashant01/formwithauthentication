// // DataList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DataList = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => setData(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <ul>
//       {data.map(item => <li key={item.id}>{item.title}</li>)}
//     </ul>
//   );
// };

// export default DataList;

// src/components/DataList/DataList.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/navbar';

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data from the API only when button is clicked
  const fetchData = () => {
    setLoading(true); // Start loading
    setError(null);   // Clear previous errors if any

    axios.get('https://jsonplaceholder.typicode.com/posts') // Example API
      .then((response) => {
        setData(response.data); // Set the data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Error fetching data'); // Set error message
        setLoading(false); // Stop loading on error
      });
  };

  return (
    <div>
      <Navbar/>
      <h2>Posts</h2>
      
      {/* Button to trigger the data fetch */}
      <button onClick={fetchData}>Load Posts</button>

      {/* Show loading message */}
      {loading && <div>Loading...</div>}

      {/* Show error message if there is an error */}
      {error && <div>{error}</div>}

      {/* Display the data once fetched */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;

