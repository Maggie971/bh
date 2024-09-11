# Base image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY ./requirements.txt /app/


# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the Django project files
COPY . /app/

# Expose port 8000
EXPOSE 8000

# Run Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
