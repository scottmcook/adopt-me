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
              name={pet.name}
              breed={pet.breed}
              images={pet.image}
              location={pet.location}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
