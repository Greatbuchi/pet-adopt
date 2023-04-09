import Pet from "./Pet";

const Results = ({ pets, isLoading }) => {
  if (isLoading) {
    return (
      <div className="search">
        <div className="loading-pane">
          <h2 className="loader">🐶</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
