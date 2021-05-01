import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroe/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const { values, handleInputChange } = useForm({
    search: q,
  });
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    const { search } = values;
    history.push(`?q=${search}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4> Search Form </h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              placeholder="Fin your hero"
              className="form-control"
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn mt-3 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}

          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-warning">No hero found</div>
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
};
