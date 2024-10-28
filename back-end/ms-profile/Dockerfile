# Use official OpenJDK 11 image as base image
FROM openjdk:11-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the packaged Spring Boot application JAR file into the container
COPY target/*.jar app.jar

# Expose the appropriate port
EXPOSE 8084

# Command to run the Spring Boot application when the container starts
CMD ["java", "-jar", "app.jar"]