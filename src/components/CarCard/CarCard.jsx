import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
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
  const [showBlueHeart, setShowBlueHeart] = useState(false);

  const handleClick = () => {
    setShowModal(prev => !prev);
  };

  const toggleHeart = () => {
    setShowBlueHeart(prev => !prev);
    window.localStorage.setItem(
      'favorites',
      JSON.stringify({
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
      })
    );
  };

  return (
    <li className={css.cardCar}>
      <div className={css.thumb}>
        <img className={css.img} src={img} alt={make} width="401px" />
        <div onClick={toggleHeart}>
          {!showBlueHeart ? (
            <AiOutlineHeart className={css.iconOutline} />
          ) : (
            <AiFillHeart className={css.iconFill} />
          )}
        </div>
      </div>
      <div className={css.modelAndPrice}>
        <h2 className={css.modelTitle}>
          {make}
          <span className={css.model}> {model}, </span>
          {year}
        </h2>
        <span className={css.modelTitle}>{rentalPrice}</span>
      </div>
      <p className={css.description}>
        {address.split(', ')[1]} <span className={css.delimeter}>|</span>{' '}
        {address.split(', ')[2]} <span className={css.delimeter}>|</span>{' '}
        {rentalCompany}
      </p>
      <p className={css.description}>
        {type} <span className={css.delimeter}>|</span> {model}{' '}
        <span className={css.delimeter}>|</span> {id}{' '}
        <span className={css.delimeter}>|</span>
        {'  '}
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
