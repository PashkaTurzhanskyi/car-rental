import CarsList from 'components/CarsList/CarsList';
import { CatalogSection } from 'components/Catalog/CatalogPage.styled';
import Filter from 'components/Catalog/Filter';
import { Container } from 'components/Shared/Container.styled';

const CatalogPage = () => {
  return (
    <CatalogSection>
      <Container>
        <Filter />
        <CarsList />
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
