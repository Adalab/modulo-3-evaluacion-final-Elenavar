import '../styles/components/FilterBySpecie.scss';
function FilterBySpecie() {
  return (
    <>
      <label className="specie" htmlFor="specie">
        Specie:
      </label>
      <select className="select" id="specie">
        <option value="all" selected>
          All
        </option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
}

export default FilterBySpecie;