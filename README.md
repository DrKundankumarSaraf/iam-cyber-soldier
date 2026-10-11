# I AM CYBER SOLDIER

Cyber Security Industrial Training & Internship platform with hands-on practical learning.

## Project Structure

```text
iam-cyber-soldier/
├── frontend/          # React + Vite + Tailwind CSS frontend
│   ├── public/        # Static assets and syllabi documents
│   ├── src/           # React source code
│   ├── scripts/       # Utility scripts (DOCX → PDF conversion)
│   └── ...
├── backend/           # Node.js + Express API server
│   ├── config/        # Database configuration
│   └── ...
└── *.docx             # Course content source documents
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev        # Starts on http://localhost:5173
```

### Backend

```bash
cd backend
npm install
npm run dev        # Starts on http://localhost:5000 (Node --watch)
npm start          # Starts without watch mode
```

### Environment Variables

Copy `backend/.env.example` to `backend/.env` and fill in the values:

```bash
cp backend/.env.example backend/.env
```

| Variable | Description |
|---|---|
| `PORT` | Backend server port (default: `5000`) |
| `CLIENT_URL` | Frontend origin for CORS (default: `http://localhost:5173`) |
| `MONGODB_URI` | MongoDB Atlas connection string (optional for local dev) |
| `JWT_SECRET` | Secret key for JSON Web Tokens |

## Tech Stack

- **Frontend:** React 19, Vite 8, Tailwind CSS 4
- **Backend:** Node.js, Express 5, Mongoose
- **Database:** MongoDB Atlas (optional for local development)
