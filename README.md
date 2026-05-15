# Food Reels Premium - MERN Food Discovery

Food Reels is a professional-grade MERN platform where food vendors upload immersive short-preparation videos (reels), allowing users to verify food quality and kitchen hygiene before placing real-time orders.

## 💎 Features

- **Premium Immersive Feed**: Vertical video reels with hover-to-play functionality.
- **Glassmorphic UI**: Modern, high-end design system with smooth transitions.
- **Dual Role Access**: Seamless switching between User and Vendor (Partner) modes.
- **Real-time Prep Tracking**: Watch the cooking process live through verified reels.
- **Partner Analytics**: Real-time order tracking and revenue stats for vendors.
- **Responsive Design**: Fully optimized for mobile and desktop experiences.
- **ImageKit Integration**: High-performance video storage and optimization.

## 🚀 Tech Stack

- **Frontend**: React 19, Vite, Vanilla CSS (Premium Utility System), Lucide Icons
- **Backend**: Node.js, Express 5
- **Database**: MongoDB with Mongoose
- **Auth**: JWT-based secure session management via HTTP-only cookies
- **Media**: ImageKit.io for video hosting

## 📂 Project Structure

```txt
.
├── backend
│   ├── src
│   │   ├── controllers     # Auth, Food, and Order logic
│   │   ├── db              # MongoDB connection
│   │   ├── middlewares     # Auth and error handling
│   │   ├── models          # Mongoose schemas
│   │   ├── routes          # API endpoints
│   │   └── services        # Business logic layers (Storage, etc.)
│   ├── .env.example        # Backend environment template
│   ├── server.js           # Server entry point
│   └── package.json
├── frontend
│   ├── src
│   │   ├── components/ui    # Atomic UI components
│   │   ├── features/        # Modular domain logic
│   │   ├── hooks/           # Custom React hooks
│   │   ├── layouts/         # App shell layouts
│   │   ├── lib/             # API client and helpers
│   │   ├── styles/          # Design system tokens
│   │   ├── App.jsx          # Root component
│   │   └── main.jsx
│   ├── .env.example        # Frontend environment template
│   └── package.json
├── .gitignore              # Root git ignore
└── README.md
```

## 🛠️ Setup & Installation

### 1. Environment Configuration

#### Backend Configuration
Create `backend/.env` using `backend/.env.example` as a template:
```env
PORT=3000
CLIENT_URL=http://localhost:5173
MONGO_URI=mongodb://127.0.0.1:27017/food-view
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
```

#### Frontend Configuration
Create `frontend/.env` using `frontend/.env.example` as a template:
```env
VITE_API_URL=http://localhost:3000/api
```

### 2. Backend Installation
```bash
cd backend
npm install
npm run dev
```

### 3. Frontend Installation
```bash
cd frontend
npm install
npm run dev
```

## 🔌 API Reference

### Authentication
- `POST /api/auth/user/register` - Register User
- `POST /api/auth/user/loginUser` - Login User
- `POST /api/auth/foodpartner/register` - Register Vendor
- `POST /api/auth/foodpartner/login` - Login Vendor

### Food & Reels
- `GET  /api/food` - Fetch all reels
- `POST /api/food` - Upload new reel (Multipart/Video)

### Orders
- `POST /api/orders` - Place new order
- `GET  /api/orders/me` - User order history
- `GET  /api/orders/partner` - Partner incoming orders
- `PATCH /api/orders/:id/status` - Update order status

## 🛡️ Notes
- **Security**: Auth utilizes secure HTTP-only cookies. No sensitive credentials are hardcoded in the source.
- **Environment**: Ensure all `.env` files are correctly configured before starting the servers.
- **Performance**: Reels are lazy-loaded and optimized via ImageKit.
- **Fallbacks**: Implements demo data for a seamless initial experience without a DB connection.

## 📄 License
This project is for educational purposes. Feel free to use and modify.
