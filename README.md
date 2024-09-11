# bh
# Project Name

This repository contains a web application featuring a Next.js frontend and a Django backend. The application includes a basic dashboard with multiple charts and utilizes Docker for easy setup.

## Project Structure

- **my-dashboard/**: Contains the frontend code for the Next.js application, including components and pages.
- **myproject/**: Contains the backend code for the Django application, including models, views, and APIs.
- **dbdata/**: Directory for database-related files and data (if applicable).
- **.DS_Store**: macOS system file (can be ignored).
- **README.md**: This file.
- **docker-compose.yml**: Configuration file for Docker to set up and run the frontend and backend services.
- **requirements.txt**: Python dependencies for the Django backend.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (for Next.js frontend)
- [Python 3](https://www.python.org/) (for Django backend)
- [Docker](https://www.docker.com/) (for containerized setup)

### Setting Up the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Maggie971/bh.git
   cd bh
   ```

2. **Set Up Docker**

   - Build and start the Docker containers using `docker-compose`:

     ```bash
     docker-compose up --build
     ```

   - This command will build and start both the Next.js frontend and the Django backend.

3. **Setting Up the Frontend (Next.js)**

   - Navigate to the `my-dashboard` directory:

     ```bash
     cd my-dashboard
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the development server:

     ```bash
     npm run dev
     ```

   - The frontend will be available at `http://localhost:3000`.

4. **Setting Up the Backend (Django)**

   - Navigate to the `myproject` directory:

     ```bash
     cd myproject
     ```

   - Create and activate a virtual environment:

     ```bash
     python -m venv venv
     source venv/bin/activate
     ```

   - Install dependencies:

     ```bash
     pip install -r requirements.txt
     ```

   - Run database migrations:

     ```bash
     python manage.py migrate
     ```

   - Start the Django development server:

     ```bash
     python manage.py runserver
     ```

   - The backend will be available at `http://localhost:8000`.

## API Endpoints

- **Candlestick Data**: `/api/candlestick-data/`
- **Line Chart Data**: `/api/line-chart-data/`
- **Bar Chart Data**: `/api/bar-chart-data/`
- **Pie Chart Data**: `/api/pie-chart-data/`

## Libraries and Tools Used

- **Next.js**: React framework for building the frontend.
- **Chart.js** (or similar): Charting library used for displaying charts.
- **Django**: Python framework for building the backend API.
- **Docker**: Tool for containerizing the application.

## Approach and Thought Process

This project was developed to integrate a modern frontend with a robust backend using Docker to streamline setup and deployment. The Next.js frontend dynamically fetches and displays data from the Django backend using RESTful API endpoints. Docker simplifies the development environment and ensures consistency across different setups.

## Additional Notes

If you encounter any issues or have questions, please refer to the documentation of Next.js, Django, and Docker for more detailed information.
