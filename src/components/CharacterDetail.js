import { useParams } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

function CharacterDetail(props) {
  const params = useParams();
  const charFound = props.findCharacter(params.characterId);
  return (
    <>
      {charFound !== undefined ? (
        <article className="article">
          <div class="characterDetails">
            <img
              className="characterDetails__img"
              src={charFound.image}
              alt={`Foto de ${charFound.name}`}
            />
            <div className="characterDetails__text">
              <h2 className="charFocharacterDetails__text--name">
                {charFound.name}
              </h2>
              <p className="charFocharacterDetails__text--info">
                Status: {charFound.status}
              </p>
              <p className="charFocharacterDetails__text--info">
                Species: {charFound.specie}
              </p>
              <p className="charFocharacterDetails__text--info">
                Origin: {charFound.origin.name}
              </p>
              <p className="charFocharacterDetails__text--info">
                Episodes: {charFound.episodes}
              </p>
              <Link to="/">
                <p className="characterDetails__back">Back</p>
              </Link>
            </div>
          </div>
        </article>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default CharacterDetail;
