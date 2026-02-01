
# 📈 Equitrade - Stock Trading Simulation Platform

**Equitrade** is a full-stack FinTech application designed to simulate real-time stock trading. It provides a risk-free environment for users to practice portfolio management, buy/sell stocks, and track market trends using live data.

Built with performance and data integrity in mind, this project implements **ACID-compliant transactions** to ensure accurate financial record-keeping.

## 🚀 Key Features

* **Real-Time Market Data:** Fetches and displays live stock prices using external financial APIs, ensuring users trade on current market values.
* **Transactional Integrity:** Implements MongoDB multi-document ACID transactions to ensure that wallet debits and stock credits happen atomically (preventing data inconsistencies).
* **Portfolio Analytics:** Visual dashboard displaying total asset value, profit/loss metrics, and holding distribution.
* **Secure Authentication:** JWT-based stateless authentication with bcrypt password hashing.
* **Watchlist Management:** Users can track favorite stocks and receive updates on price movements.

## 🛠️ Tech Stack

* **Frontend:** React.js, Redux Toolkit (State Management), Tailwind CSS / Material UI
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose ODM)
* **API:** [Insert API Name, e.g., Alpha Vantage / Finnhub]
* **Tools:** Git, Postman, JWT

## ⚙️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/equitrade.git](https://github.com/yourusername/equitrade.git)
    cd equitrade
    ```

2.  **Install Dependencies**
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the `server` directory and add:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    STOCK_API_KEY=your_api_key
    ```

4.  **Run the Application**
    ```bash
    # Run backend (from server folder)
    npm start

    # Run frontend (from client folder)
    npm start
    ```

## 🔮 Future Improvements

* Integration of WebSockets (Socket.io) for sub-second price updates.
* Adding AI-driven stock price prediction modules.
* Implementation of limit orders and stop-loss functionality.

---
**Author:** Srushti Bangre
