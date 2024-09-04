import React, { useEffect, useRef } from 'react';

function TradingViewWidget({ symbol }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": symbol,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_advanced_chart"
    });

    containerRef.current.appendChild(script);

    return () => {
        if(!containerRef)
      containerRef.current.innerHTML = ''
    };
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div id="tradingview_advanced_chart" style={{ height: '100vh', width: '100%' }}></div>
    </div>
  );
}

export default TradingViewWidget;
