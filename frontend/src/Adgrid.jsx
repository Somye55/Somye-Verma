import React, { useState, useEffect } from 'react';

const AdsGrid = ({ keyword }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/ads?keyword=${keyword}`, {
        headers: {
          "Access-Control-Allow-Origin": " *",
          "Content-Type": "application/json",
        }
      }
      );
      const data = await response.json();
      setAds(data);
    };
    fetchAds();
  }, [keyword]);

  return (
    <div className="grid">
      {ads.map((ad) => (
        <div key={ad._id} className="ad">
          <h3>{ad.companyName}</h3>
          <img src={ad.imageUrl} alt={ad.headline} width={100} />
          <p>{ad.primaryText}</p>
          <p>{ad.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AdsGrid;
