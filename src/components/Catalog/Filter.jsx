import Select from 'react-select';
import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './Filter.module.css';

const Filter = () => {
  const [brandList, setBrandList] = useState([]);
  const [brandChosen, setBrandChosen] = useState('');
  console.log(brandChosen);
  const [priceChosen, setPriceChosen] = useState('');
  console.log(priceChosen);
  const [price, setPrice] = useState([]);

  const optionsBrand = brandList
    .filter((item, index, array) => array.indexOf(item) === index)
    .map(item => ({ value: item, label: item }));

  const optionsPrice = price
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort((a, b) => a - b)
    .map(item => ({ value: item, label: item }));

  useEffect(() => {
    axios
      .get('https://6488bd1e0e2469c038fe48d9.mockapi.io/advert')
      .then(({ data }) => {
        setBrandList(data.map(({ make }) => make));
        setPrice(
          data.map(({ rentalPrice }) =>
            rentalPrice.slice(1, rentalPrice.length)
          )
        );
      })
      .catch();
  }, []);

  // const handleBrandChoose = () => {};

  return (
    <div className={css.filter}>
      <div>
        <p>Car brand</p>
        <Select
          options={optionsBrand}
          onChange={event => setBrandChosen(event.value)}
          placeholder="Enter the text"
        />
      </div>
      <div>
        <p>Price/ 1 hour</p>
        <Select
          options={optionsPrice}
          onChange={event => setPriceChosen(event.value)}
          placeholder="To $"
        />
      </div>
      <div>
        <p>Сar mileage / km</p>
        <input placeholder="From" />
        <input placeholder="To" />
      </div>
      <button type="submit">Search</button>
    </div>
  );
};

export default Filter;
