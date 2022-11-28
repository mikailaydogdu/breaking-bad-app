import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

function Detail() {
  const { char_id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
  }, [char_id])
  return (
    <div>
      {char && (
        <div style={{paddingBottom:"10px",width:"500px",display:"block", marginLeft:"auto", marginRight:"auto", border:"20px", borderRadius:"5%", textAlign:"center"}}>
          <img style={{ width: "100%", height: "400px" }} src={char.img} alt="Character" />
          <h3>name: {char.name}</h3><hr />
          <h3>occupation: {char.occupation}</h3><hr />
          <h3>portrayed: {char.portrayed}</h3><hr />
          <h3>nickname: {char.nickname}</h3><hr />
          <h3>appearance: {char.appearance}</h3>

        </div>
      )}
    </div>
  )
}

export default Detail;
