# Use official OpenJDK 11 image as base image
FROM openjdk:17-jdk-alpine


# Copy the packaged Spring Boot application JAR file into the container
COPY target/ms-gateway*.jar ms-gateway.jar

EXPOSE 9990


# Command to run the Spring Boot application when the container starts
CMD java -jar /ms-gateway.jar