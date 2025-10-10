import React, { useState } from "react";
import { 
  Assessment, 
  TrendingUp, 
  PieChart, 
  Compare, 
  Notifications, 
  CalendarToday,
  Savings,
  CurrencyExchange,
  BarChart,
  ShowChart,
  AccountBalance,
  Analytics,
  ArrowBack
} from "@mui/icons-material";

const Apps = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  const appData = [
    {
      id: 1,
      icon: <TrendingUp />,
      title: "Market Insights",
      description: "Real-time market analysis and trends",
      action: "View market trends and analysis",
      details: "Get real-time insights into market movements, sector performance, and emerging trends. Our algorithm analyzes thousands of data points to provide you with actionable intelligence."
    },
    {
      id: 2,
      icon: <PieChart />,
      title: "Portfolio Analyzer",
      description: "Detailed portfolio performance metrics",
      action: "Analyze your portfolio performance",
      details: "Comprehensive analysis of your portfolio including risk metrics, diversification analysis, and performance attribution. Track your investments against benchmarks."
    },
    {
      id: 3,
      icon: <Compare />,
      title: "Stock Comparer",
      description: "Compare multiple stocks side-by-side",
      action: "Compare stocks for better decisions",
      details: "Compare up to 5 stocks simultaneously with detailed financial metrics, performance charts, and analyst ratings to make informed investment decisions."
    },
    {
      id: 4,
      icon: <Assessment />,
      title: "Financial Reports",
      description: "Comprehensive financial statements",
      action: "Access detailed financial reports",
      details: "Access quarterly and annual financial statements, earnings reports, and management discussions for thousands of companies."
    },
    {
      id: 5,
      icon: <Notifications />,
      title: "Price Alerts",
      description: "Custom price notifications and alerts",
      action: "Set up price alerts for your stocks",
      details: "Create custom price alerts for your watchlist stocks. Get notified via email or push notification when prices cross your specified thresholds."
    },
    {
      id: 6,
      icon: <CalendarToday />,
      title: "Economic Calendar",
      description: "Important economic events and dates",
      action: "View upcoming economic events",
      details: "Stay informed about upcoming economic events, earnings announcements, and market-moving news with our comprehensive economic calendar."
    },
    {
      id: 7,
      icon: <Savings />,
      title: "SIP Calculator",
      description: "Systematic investment plan calculator",
      action: "Calculate your SIP investments",
      details: "Calculate the future value of your systematic investment plans with our advanced calculator. Adjust parameters to optimize your investment strategy."
    },
    {
      id: 8,
      icon: <CurrencyExchange />,
      title: "Currency Converter",
      description: "Real-time currency exchange rates",
      action: "Convert currencies instantly",
      details: "Get real-time currency exchange rates for 160+ currencies. Track historical exchange rates and set alerts for currency movements."
    },
    {
      id: 9,
      icon: <BarChart />,
      title: "Technical Analysis",
      description: "Advanced charting tools and indicators",
      action: "Perform technical analysis",
      details: "Advanced charting tools with 100+ technical indicators, drawing tools, and pattern recognition to support your trading decisions."
    },
    {
      id: 10,
      icon: <ShowChart />,
      title: "Market Screener",
      description: "Filter stocks based on criteria",
      action: "Screen stocks by your criteria",
      details: "Filter stocks based on fundamental, technical, and financial criteria. Save your screens for regular monitoring."
    },
    {
      id: 11,
      icon: <AccountBalance />,
      title: "IPO Tracker",
      description: "Upcoming and recent IPO information",
      action: "Track upcoming IPOs",
      details: "Track upcoming IPOs with detailed prospectus information, pricing details, and performance tracking after listing."
    },
    {
      id: 12,
      icon: <Analytics />,
      title: "Risk Analyzer",
      description: "Portfolio risk assessment tools",
      action: "Analyze portfolio risks",
      details: "Comprehensive risk analysis including Value at Risk (VaR), correlation analysis, and stress testing scenarios for your portfolio."
    }
  ];

  const handleAppClick = (app) => {
    setSelectedApp(app);
  };

  const handleBackClick = () => {
    setSelectedApp(null);
  };

  if (selectedApp) {
    return (
      <div className="app-detail">
        <div className="app-detail-header">
          <button className="back-button" onClick={handleBackClick}>
            <ArrowBack /> Back to Apps
          </button>
          <div className="app-detail-icon">{selectedApp.icon}</div>
          <h2>{selectedApp.title}</h2>
          <p>{selectedApp.description}</p>
        </div>
        
        <div className="app-detail-content">
          <div className="app-feature">
            <h3>Features</h3>
            <p>{selectedApp.details}</p>
          </div>
          
          <div className="app-stats">
            <h3>Key Metrics</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <h4>Accuracy</h4>
                <p>98.7%</p>
              </div>
              <div className="stat-card">
                <h4>Users</h4>
                <p>50K+</p>
              </div>
              <div className="stat-card">
                <h4>Rating</h4>
                <p>4.8/5</p>
              </div>
              <div className="stat-card">
                <h4>Updates</h4>
                <p>Real-time</p>
              </div>
            </div>
          </div>
          
          <button className="primary-button">Launch {selectedApp.title}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="apps-page">
      <div className="apps-header">
        <h2>Financial Tools & Applications</h2>
        <p>Enhance your trading experience with our suite of professional tools</p>
      </div>
      
      <div className="apps-grid">
        {appData.map((app) => (
          <div 
            className="app-card" 
            key={app.id}
            onClick={() => handleAppClick(app)}
          >
            <div className="app-icon">{app.icon}</div>
            <h3>{app.title}</h3>
            <p>{app.description}</p>
            <button 
              className="app-button"
              onClick={(e) => {
                e.stopPropagation();
                handleAppClick(app);
              }}
            >
              {app.action}
            </button>
          </div>
        ))}
      </div>
      
      <div className="apps-info">
        <h3>How to Use These Tools</h3>
        <p>Click on any application card above to access that tool. Each tool is designed to help you make better investment decisions with professional-grade analysis and insights.</p>
      </div>
    </div>
  );
};

export default Apps;