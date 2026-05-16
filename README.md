# 🚀 Smart URL Shortener

A modern full-stack Smart URL Shortener built using Node.js, Express.js, and MongoDB Atlas that converts long URLs into short, shareable links with QR code generation and custom short URL support.

---

## ✨ Features

- 🔗 Shorten long URLs instantly
- ✏️ Create custom short URLs
- 📱 Generate QR codes automatically
- ☁️ MongoDB Atlas cloud database integration
- 📋 Copy shortened URL with one click
- 🔄 Redirect to original URL
- ✅ URL validation
- 📊 Click tracking support
- 🎨 Modern responsive UI
- ⚡ REST API backend

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Packages Used
- shortid
- qrcode
- dotenv
- cors
- valid-url

---

## 📂 Project Structure

```bash
smart-url-shortener/
│
├── models/
│   └── Url.js
│
├── routes/
│   └── urlRoutes.js
│
├── public/
│   └── index.html
│
├── .env
├── package.json
├── package-lock.json
├── server.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/smart-url-shortener.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd smart-url-shortener
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in the root folder.

```env
MONGO_URI=your_mongodb_connection_string
```

### 5️⃣ Run Server

```bash
node server.js
```

---

## 🚀 Usage

Open browser:

```bash
http://localhost:5000
```

Paste a long URL and generate a smart shortened URL instantly.

---

## 🔥 API Endpoints

### Create Short URL

```http
POST /shorten
```

### Redirect URL

```http
GET /:code
```

### URL Analytics

```http
GET /analytics/:code
```

---

## 🌐 Deployment

### Backend
Deploy using Render

### Frontend
Deploy using Vercel

---

## 📸 Features Preview

✅ URL Shortening  
✅ QR Code Generation  
✅ Custom Short Links  
✅ Responsive UI  
✅ MongoDB Cloud Integration  
✅ REST API Backend  

---

## 🎯 Learning Outcomes

This project helped in learning:

- REST APIs
- Backend Development
- MongoDB Integration
- Express Routing
- QR Code Generation
- Cloud Database Connectivity
- Full Stack Development

---

## 👨‍💻 Author

### Balaji

GitHub:
https://github.com/BALAJINANI18

---

## ⭐ Future Improvements

- User Authentication
- Dashboard Analytics
- Download QR Code
- Expiry URLs
- Dark Mode
- Admin Panel
- Rate Limiting


---

## 📜 License

This project is licensed under the MIT License.
