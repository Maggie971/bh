# bh

This repository contains a web application featuring a Next.js frontend with TypeScript and a Django backend. The application includes a basic dashboard with various charts and utilizes Docker for easy setup.

## Project Structure

- **my-dashboard/**: Contains the frontend code for the Next.js application using TypeScript, including components and pages.
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

3. **Setting Up the Frontend (Next.js with TypeScript)**

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

   - Install dependencies:

     ```bash
     pip install -r requirements.txt
     ```

   - Run the Django development server:

     ```bash
     python manage.py runserver
     ```

   - The backend will be available at `http://localhost:8000`.

## Features

- **Charts**: The dashboard includes Candlestick, Line Chart, Bar Chart, and Pie Chart.
- **TypeScript**: The Next.js frontend is built with TypeScript for type safety and improved development experience.
- **Docker**: Docker is used to containerize both the frontend and backend, simplifying the setup and deployment process.
- **Testing**: Basic unit and integration tests are included for the Django API and Next.js components.

## Additional Notes

- Ensure you have Docker installed and running before setting up the project.
- If you encounter any issues or have questions, feel free to open an issue in this repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
