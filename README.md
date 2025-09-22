# 🚀 Professional Task Board

A modern, interactive task management application built with Node.js, Express.js, and MongoDB Atlas. Features a beautiful, responsive UI with real-time statistics, smooth animations, and professional design patterns.

![Task Board Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-18+-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue) ![Express.js](https://img.shields.io/badge/Express.js-5.1.0-lightgrey)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Interactive Design** - Smooth animations and hover effects
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Professional Styling** - Gradient backgrounds, shadows, and modern typography
- **Real-time Statistics** - Live counters for task statuses
- **Status Management** - Visual status badges with color coding
- **Date Management** - Start date and due date with proper validation

### 🔧 **Technical Features**
- **MVC Architecture** - Clean separation of concerns
- **RESTful API** - Standardized HTTP methods and endpoints
- **MongoDB Atlas** - Cloud database integration
- **Error Handling** - Comprehensive error management
- **Form Validation** - Client and server-side validation
- **Real-time Updates** - Instant UI updates after operations

### 📊 **Task Management**
- ✅ **Create Tasks** - Add new tasks with title, description, dates, and status
- ✅ **View Tasks** - Beautiful table display with task details
- ✅ **Edit Tasks** - Inline editing with form pre-population
- ✅ **Delete Tasks** - Confirmation dialogs for safe deletion
- ✅ **Status Updates** - Quick status cycling (Pending → In Progress → Completed)
- ✅ **Date Validation** - Start date cannot be after due date

## 🏗️ Architecture

This project follows the **Model-View-Controller (MVC)** pattern with proper separation of concerns:

### Project Structure
```
taskboard-project/
├── config/
│   └── database.js          # MongoDB Atlas connection
├── controllers/
│   └── taskController.js    # Business logic and API handlers
├── middleware/
│   └── errorHandler.js      # Centralized error handling
├── models/
│   └── Task.js             # Mongoose schema and validation
├── routes/
│   └── taskRoutes.js       # API route definitions
├── public/
│   └── index.html          # Professional frontend interface
├── server.js               # Application entry point
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎯 Design Patterns

### 1. **Model-View-Controller (MVC)**
- **Model**: `models/Task.js` - Data structure and database operations
- **View**: `public/index.html` - Interactive user interface
- **Controller**: `controllers/taskController.js` - Business logic and request handling

### 2. **Repository Pattern**
- Mongoose models act as repositories for data access
- Abstracts database operations from business logic

### 3. **Middleware Pattern**
- Error handling middleware for centralized error management
- CORS and JSON parsing middleware

### 4. **RESTful API Pattern**
- Standardized HTTP methods (GET, POST, PUT, DELETE)
- Consistent endpoint naming conventions

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd taskboard-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB Atlas:**
   - Create a MongoDB Atlas account
   - Create a new cluster
   - Get your connection string
   - Update `config/database.js` with your connection string

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Access the application:**
   Open your browser and go to `http://localhost:3000`

## 📋 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/tasks` | Get all tasks | - |
| GET | `/api/tasks/:id` | Get single task | - |
| POST | `/api/tasks` | Create new task | `{title, description, startDate, dueDate, status}` |
| PUT | `/api/tasks/:id` | Update task | `{title, description, startDate, dueDate, status}` |
| DELETE | `/api/tasks/:id` | Delete task | - |

### Example API Usage

**Create a new task:**
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "startDate": "2024-01-15",
    "dueDate": "2024-01-20",
    "status": "pending"
  }'
```

**Get all tasks:**
```bash
curl http://localhost:3000/api/tasks
```

## 🎨 Frontend Features

### **Interactive Elements**
- **Animated Background** - Floating gradient orbs
- **Card Hover Effects** - Lift and scale animations
- **Button Animations** - Shimmer and scale effects
- **Status Badges** - Color-coded with hover effects
- **Form Validation** - Real-time validation with error messages

### **Responsive Design**
- **Mobile-First** - Optimized for all screen sizes
- **Touch-Friendly** - Large buttons and touch targets
- **Adaptive Layout** - Grid system that adjusts to screen size

### **User Experience**
- **Loading States** - Spinners and loading indicators
- **Empty States** - Helpful messages when no tasks exist
- **Success/Error Alerts** - Toast notifications for user feedback
- **Smooth Transitions** - 60fps animations throughout

## 📊 Task Schema

```javascript
{
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  startDate: {
    type: String,
    required: [true, 'Start date is required']
  },
  dueDate: {
    type: String,
    required: [true, 'Due date is required']
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  createdAt: Date,    // Auto-generated
  updatedAt: Date     // Auto-generated
}
```

## 🛠️ Development

### **Development Mode**
```bash
npm run dev
```
Runs the server with nodemon for automatic restarts on file changes.

### **Production Mode**
```bash
npm start
```
Runs the server in production mode.

## 📦 Dependencies

### **Production Dependencies**
- **express** (^5.1.0) - Web framework
- **mongoose** (^8.16.0) - MongoDB object modeling
- **cors** (^2.8.5) - Cross-origin resource sharing

### **Development Dependencies**
- **nodemon** (^3.0.0) - Development auto-restart

## 🔒 Security Features

- **Input Validation** - Server-side validation for all inputs
- **Error Handling** - Comprehensive error management
- **CORS Protection** - Cross-origin request security
- **MongoDB Atlas** - Secure cloud database

## 🎯 Performance Optimizations

- **Efficient Queries** - Optimized MongoDB queries
- **Client-side Caching** - Reduced API calls
- **Responsive Images** - Optimized asset loading
- **Minified CSS** - Reduced file sizes

## 🚀 Deployment

### **MongoDB Atlas Setup**
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update the connection string in `config/database.js`
5. Whitelist your IP address in Atlas

### **Environment Variables**
Create a `.env` file (optional):
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskboard
PORT=3000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🏆 Key Benefits

1. **Professional Design** - Modern, attractive UI with smooth animations
2. **Scalable Architecture** - Easy to extend and maintain
3. **Cloud Integration** - MongoDB Atlas for reliable data storage
4. **Responsive Design** - Works on all devices
5. **Real-time Updates** - Instant feedback and updates
6. **Error Handling** - Comprehensive error management
7. **Performance** - Optimized for speed and efficiency

## 📞 Support

If you have any questions or need help with the project, please open an issue or contact the development team.

---

**Built with ❤️ using Node.js, Express.js, MongoDB Atlas, and modern web technologies.**