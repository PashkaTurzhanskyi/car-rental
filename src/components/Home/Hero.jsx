const { HeroTitle, HeroDescription, HeroLink } = require('./Hero.styled');

const Hero = () => {
  return (
    <>
      <HeroTitle>Welcome to Car rental App</HeroTitle>
      <HeroDescription>Travel comfortably in Ukraine!</HeroDescription>
      <HeroLink to="/catalog">Let's rent your dream car!</HeroLink>
    </>
  );
};

export default Hero;
