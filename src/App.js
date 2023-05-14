import { useState } from "react";
import axios from "../node_modules/axios/index";


function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=a093e7772b51453ca867a20dac1e8185')
      
      setData(response.data)

    } catch (e) {
      console.log(e)
    }
   
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>}
    </div>
  );
}

export default App;
