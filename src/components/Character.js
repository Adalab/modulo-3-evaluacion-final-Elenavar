import '../styles/components/Character.scss';
import { Link } from 'react-router-dom';

function Character(props) {
  return (
    <li key={props.character.id} className="character">
      <Link className="character__link" to={`character/${props.character.id}`}>
        <img
          className="character__link--img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
        />
        <div className="character__link--info info">
          <h2 className="info__name">{props.character.name}</h2>
          <p className="info__specie">{props.character.specie}</p>
        </div>
      </Link>
    </li>
  );
}

export default Character;
