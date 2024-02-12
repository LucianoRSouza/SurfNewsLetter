# Use the official Python image as a base image
FROM python:3.8

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files for installing dependencies
COPY requirements.txt .

# Install Flask and other dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the port on which the Flask application will run
EXPOSE 5001

# Command to run the Flask application
CMD ["python", "app.py"]
