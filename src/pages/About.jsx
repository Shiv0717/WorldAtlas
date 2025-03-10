import React from 'react'
import countryData from '../api/countryData.json'

const About = () => {
  return (
    <div className="max-w-[1040px] m-auto p-4">
      <section>
        <h2 className="text-2xl font-bold">Here are the Interesting Facts</h2>
        <h3 className="text-xl font-semibold">We're proud of</h3>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {countryData.map((country) => {
    const { id, countryName, capital, population, interestingFact } = country;
    return (
      <div className="card border border-white p-4 rounded-lg shadow-md bg-black text-white" key={id}>
        <div className="text-lg font-semibold mb-2">{countryName}</div>
        <p><span className="font-bold">Capital:</span> {capital}</p>
        <p><span className="font-bold">Population:</span> {population}</p>
        <p><span className="font-bold">Interesting Fact:</span> {interestingFact}</p>
      </div>
    );
  })}
</div>





    </div>
  )
}

export default About
