import CarsList from 'components/CarsList/CarsList';
import FavoritesCarsList from 'components/FavoritesCarsList/FavoritesCarsList';

const FavoritesPage = () => {
  return (
    <div>
      <h2>FavoritesPage</h2>
      <FavoritesCarsList />
      <CarsList />
    </div>
  );
};

export default FavoritesPage;
