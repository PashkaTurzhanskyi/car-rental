import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({
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
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={img} alt={make} width="400px" />
        <h2>
          {make}
          <span>{model},</span>
          {year}
        </h2>
        <p>
          {address.split(', ')[1]} | {address.split(', ')[2]} | Id:{id} | Year:
          {year} | Type:{type}
        </p>
        <p>
          Fuel Consumption:{fuelConsumption} | Engine Size:{engineSize}
        </p>
        <p>{description}</p>
        <h3>Accessories and functionalities:</h3>
        <p>
          {accessories[0]} | {accessories[1]} | {accessories[2]}
          {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
        </p>
        <h3>Rental Conditions:</h3>
        <p>
          {rentalConditions.split('\n')[0]}
          <span>{rentalConditions.split('\n')[1]}</span>
        </p>
        <p>
          {rentalConditions.split('\n')[2]}
          <span>Mileage:{mileage}</span>
          Price:{rentalPrice}
        </p>
        <a href="tel:+380730000000">Rental car</a>
      </div>
    </div>
  );
};

export default Modal;
