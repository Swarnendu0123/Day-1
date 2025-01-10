import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => setDataArr(data));
  });

  return (
    <div>
      {dataArr.map((data) => (
        <Post data={data} />
      ))}
    </div>
  );
}

export default App;



function Post({ data }) {
  return (
    <div className="profile">
      <h1>{data.author}</h1>
      <img src={data.download_url} alt="" width={200} height={200}/>


      <button>like</button>
      <button>disline</button>
      
    </div>
  );
}
