import { useParams } from 'react-router-dom'

const View = ({ birds }) => {
    const { type } = useParams();

    const bird = birds.find((bird) => bird.type === type);

    if(!bird) {
        return <h1>No Matching Birds</h1>
    }
    return (
        <div>
            <h2>{bird.type}</h2>

            <p>Genus: {bird.genus}</p>
            <p>Conservation Status: {bird.conservationStatus}</p>
            <img src={bird.img} alt={bird.type} />
        </div>
    )
}

export default View