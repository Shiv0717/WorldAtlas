import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../api/postapi'; // Ensure this API is correct
import CountryCard from '../components/Layout/CountryCard';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data); // Ensure res.data is the correct array of countries
    });
  }, []);

  return (
    <div>
      <ul>
        {countries.map((curCountry, index) => (
          // Using index or unique id like curCountry.cca3 if available
          <CountryCard country={curCountry} key={curCountry.cca3 || index} />
        ))}
      </ul>
    </div>
  );
};

export default Country;