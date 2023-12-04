import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              id={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={pet.city}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
