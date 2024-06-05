import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
  const [beer, setBeer] = useState();
  const {id} = useParams();
  
  const getBeer = async () => {
    //Deberas completar este fetch con el parametro correspondiente1
    const res = await fetch(`https://api.sampleapis.com/beers/ale/${id}`);
    const data = await res.json();
    setBeer(data);
  };

  useEffect(() => {
    getBeer();
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Cerveza numero {id}</h2>
      <div className="card">
        <img src={beer.image} alt="beer-detail" />
        <p>{beer.name}</p>
        <p>{beer.price}</p>
      </div>
      <button>Go back</button>
    </div>
  );
};

export default Beer