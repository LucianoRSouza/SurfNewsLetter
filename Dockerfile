# Use the official Python image as a base image
FROM python:3.8

# Set the working directory in the container
WORKDIR /app

# Copy the backend application code into the container
COPY . .

# Install Flask and other dependencies
RUN pip install Flask flask-mysqldb

# Expose the port on which the Flask application will run
EXPOSE 5000

# Command to run the Flask application
CMD ["python", "app.py"]
