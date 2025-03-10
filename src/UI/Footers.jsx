import React from 'react'
import FooterApi from '../api/FooterApi.json'

const Footers = () => {
  return (
    <div className=''>
      <footer className="bg-gray-900 text-white py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FooterApi.map((curData, index) => {
            const { icon, title, details } = curData;
            return (
              <div key={index} className="text-center">
               
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-xs text-gray-400">{details}</p>
              </div>
            );
          })}
        </div>
      </footer>
      <div className="bg-gray-800 text-white py-4">
      <footer className="text-center">
        <p className="text-sm">Shiv kumar.</p>
        <p className="text-xs text-gray-400">© 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default Footers;
