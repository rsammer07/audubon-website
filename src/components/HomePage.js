import { Link } from 'react-router-dom'


const HomePage = ({ birds }) => {
    return (
      <div>
        <h2>Home Page</h2>
        <div>
          {birds.map((bird) => (
            <div key={bird.name} >
              <Link to={`/bird/${bird.name}`}>
                <img src={bird.image} alt={bird.name} />
              </Link>
              <p>{bird.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default HomePage