import Select from 'react-select';

const Filter = () => {
  const optionsBrand = [
    { value: 'Buick', label: 'Buick' },
    { value: 'Volvo', label: 'Volvo' },
    { value: 'Hummer', label: 'Hummer' },
    { value: 'Subaru', label: 'Subaru' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Lincoln', label: 'Lincoln' },
    { value: 'GMC', label: 'GMC' },
    { value: 'Hyundai', label: 'Hyundai' },
  ];
  const optionsPrice = [
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
  ];

  return (
    <div>
      <div>
        <p>Car brand</p>
        <Select options={optionsBrand} placeholder="Enter the text" />
      </div>
      <div>
        <p>Price/ 1 hour</p>
        <Select options={optionsPrice} placeholder="To $" />
      </div>
    </div>
  );
};

export default Filter;
