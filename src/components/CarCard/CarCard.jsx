import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './CarCard.module.css';

const CarCard = ({
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  id,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(prev => !prev);
    console.log(id, make);
    const data = { id, make };
    console.log(data);
  };

  return (
    <li className={css.cardCar}>
      <div className={css.thumb}>
        <img className={css.img} src={img} alt={make} width="401px" />
      </div>
      <h2>
        {make}
        <span>{model},</span>
        {year}
      </h2>
      <span>{rentalPrice}</span>
      <p>
        {address.split(', ')[1]} | {address.split(', ')[2]} | {rentalCompany} |{' '}
        {type} | {model} | {id} |{' '}
        {functionalities[0].split(' ').slice(0, 2).join(' ')}
      </p>
      <button className={css.button} type="button" onClick={handleClick}>
        Learn more
      </button>
      {showModal && (
        <Modal
          img={img}
          make={make}
          model={model}
          year={year}
          address={address}
          id={id}
          // year={year}
          type={type}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
          description={description}
          accessories={accessories}
          functionalities={functionalities}
          rentalConditions={rentalConditions}
          mileage={mileage}
          rentalPrice={rentalPrice}
          onClose={handleClick}
        />
      )}
    </li>
  );
};

export default CarCard;
