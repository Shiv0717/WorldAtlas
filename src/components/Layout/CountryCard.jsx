import React from 'react';

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <div className="max-w-[1040px] m-auto p-4">
      {/* Grid container for the country cards */}
      <div className="gap-6">
        <div className="bg-black text-white border border-white rounded-lg shadow-lg overflow-hidden">
          {/* Display the flag */}
          <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(${flags.svg})` }}></div>

          {/* Display country details */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{name.common}</h2>
            <p className="text-sm"><strong>Capital:</strong> {capital}</p>
            <p className="text-sm"><strong>Population:</strong> {population}</p>
            <p className="text-sm"><strong>Region:</strong> {region}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
