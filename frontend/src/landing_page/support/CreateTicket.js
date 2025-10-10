import React from "react";

function CreateTicket() {
  // Define support topics
  const supportTopics = [
    {
      title: "Account Opening",
      icon: "fa fa-user-plus",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "NRI Account Opening",
        "Charges at Equitrade",
        "Equitrade IDFC FIRST Bank 3-in-1 Account",
        "Getting Started"
      ]
    },
    {
      title: "Trading and Markets",
      icon: "fa fa-chart-line",
      links: [
        "Trading FAQs",
        "Corporate Actions",
        "Stock and IPO",
        "Futures and Options",
        "Currency Trading",
        "Commodity Trading",
        "BTST/Trade for Trade"
      ]
    },
    {
      title: "Funds",
      icon: "fa fa-money-bill-wave",
      links: [
        "Fund Withdrawal",
        "Adding Funds",
        "Bank Mandates",
        "eMandates for NACH",
        "Auto Sweep",
        "Billing and Payments"
      ]
    },
    {
      title: "Your Equitrade Account",
      icon: "fa fa-user-circle",
      links: [
        "Login credentials",
        "DP ID and Client ID",
        "Nomination",
        "Transfer of shares and funds",
        "Changing bank details",
        "Signature and Photo ID",
        "User Management"
      ]
    },
    {
      title: "Products and Charges",
      icon: "fa fa-list",
      links: [
        "Brokerage and Charges",
        "Margin and Leverage",
        "Equitrade Products",
        "Order Types",
        "Corporate Actions",
        "Segments and Instruments",
        "Holiday Calendar"
      ]
    },
    {
      title: "Technology",
      icon: "fa fa-laptop",
      links: [
        "Kite Web",
        "Kite Mobile",
        "Pitstop Mobile",
        "Kite Mobile 2.0 Beta",
        "Kite APIs",
        "Equitrade Mobile",
        "Coin Web and Mobile"
      ]
    }
  ];

  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-lg-10 mx-auto">
          <h1 className="fs-2 mb-5">To create a ticket, select a relevant topic</h1>
          
          <div className="row">
            {supportTopics.map((topic, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h4 className="card-title mb-4">
                      <i className={topic.icon} aria-hidden="true"></i> {topic.title}
                    </h4>
                    {topic.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex} 
                        href="#" 
                        className="d-block text-decoration-none text-muted mb-2"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
