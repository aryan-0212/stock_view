import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import TradingViewWidget from './StockMarketGraph';

function StockDetailsPage() {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=HX7RZN42UMUYZK3R`);
      const data = await response.json();
      setStockData(data);
    };

    fetchStockData();
  }, [symbol]);

  return (
    <>    
<Header/>
{stockData ? (
  <>
    <div className="container mx-auto p-4">
      {/* Title Section */}
      <h1 className="text-2xl font-bold mb-4">{stockData.Name}</h1>

      {/* Details Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Price Section */}
        {/* <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Price</h2>
          <p className="text-xl font-bold text-green-600">${stockData.AnalystTargetPrice}</p>
        </div> */}
  <div className="bg-gray-100 p-4 rounded-lg shadow-md">
  {/* <h2 className="text-lg font-semibold mb-4">Market Data</h2> */}

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Price</h2>
          <p className="text-xl font-bold text-green-600">${stockData.AnalystTargetPrice}</p>

  <div className="grid grid-cols-3 gap-4">
    {/* Market Capitalization */}
    <div>
      <span className="font-semibold">Market Cap: </span>
      <span>${stockData.MarketCapitalization}</span>
    </div>

    {/* Book Value */}
    <div>
      <span className="font-semibold">Book Value: </span>
      <span>${stockData.BookValue}</span>
    </div>

    {/* Dividend Per Share */}
    <div>
      <span className="font-semibold">Dividend Per Share: </span>
      <span>${stockData.DividendPerShare}</span>
    </div>

    {/* Dividend Yield */}
    <div>
      <span className="font-semibold">Dividend Yield: </span>
      <span>{(stockData.DividendYield * 100).toFixed(2)}%</span>
    </div>

    {/* Revenue Per Share */}
    <div>
      <span className="font-semibold">Revenue Per Share: </span>
      <span>${stockData.RevenuePerShareTTM}</span>
    </div>

    {/* Profit Margin */}
    <div>
      <span className="font-semibold">Profit Margin: </span>
      <span>{(stockData.ProfitMargin * 100).toFixed(2)}%</span>
    </div>

    {/* Price to Sales Ratio */}
    <div>
      <span className="font-semibold">P/S Ratio: </span>
      <span>{stockData.PriceToSalesRatioTTM}</span>
    </div>

    {/* Price to Book Ratio */}
    <div>
      <span className="font-semibold">P/B Ratio: </span>
      <span>{stockData.PriceToBookRatio}</span>
    </div>

    {/* Analyst Target Price */}
    <div>
      <span className="font-semibold">Analyst Target Price: </span>
      <span>${stockData.AnalystTargetPrice}</span>
    </div>
  </div>
  </div>

</div>


        {/* Description Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Description</h2>
          <p>{stockData.Description}</p>
        </div>
      </div>
    </div>

    <TradingViewWidget/>
    </>
):(
  <p>loding</p>
)}

    </>

  );
}

export default StockDetailsPage;
