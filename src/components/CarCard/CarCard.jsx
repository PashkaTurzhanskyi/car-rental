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
}) => {
  return (
    <li>
      <img src={img} alt={make} width="400px" />
      <h2>
        {make}
        <span>{model},</span>
        {year}
      </h2>
      <span>{rentalPrice}</span>
      <p>
        {address.split(', ')[1]} | {address.split(', ')[2]} | {rentalCompany} |{' '}
        {type} | {model} | {id} | {functionalities[0]}
      </p>
      <button type="button">Learn more</button>
    </li>
  );
};

export default CarCard;
