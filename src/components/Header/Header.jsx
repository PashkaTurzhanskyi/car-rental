import { NavigationLink, NavList, PageHeader } from './Header.styled';

const Header = () => {
  return (
    <PageHeader>
      <nav>
        <NavList>
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/catalog">Catalog</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/favorites">Favorites</NavigationLink>
          </li>
        </NavList>
      </nav>
    </PageHeader>
  );
};

export default Header;
