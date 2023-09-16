import axios from 'axios';
import CarCard from 'components/CarCard/CarCard';
import { useEffect, useState } from 'react';

const CarsList = () => {
  const [listCars, setListCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://6488bd1e0e2469c038fe48d9.mockapi.io/advert?p=${page}&l=8`)
      .then(({ data }) => setListCars(prev => [...prev, ...data]))
      .catch();
  }, [page]);

  const handlePageChange = () => {
    console.log('button click');
    setPage(page + 1);
  };

  return (
    <div>
      <ul>
        {listCars.map(car => (
          <CarCard
            key={car.id}
            img={car.img}
            make={car.make}
            model={car.model}
            year={car.year}
            rentalPrice={car.rentalPrice}
            address={car.address}
            rentalCompany={car.rentalCompany}
            type={car.type}
            id={car.id}
            functionalities={car.functionalities}
          />
        ))}
      </ul>
      <button type="button" onClick={handlePageChange}>
        Load more
      </button>
    </div>
  );
};

export default CarsList;
