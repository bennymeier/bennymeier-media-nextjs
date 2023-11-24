export const calculateAge = () => {
  const dateOfBirth = '1996-08-09';
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  const difference = (today as any) - (birthDate as any);
  const ageInYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  return ageInYears;
};
