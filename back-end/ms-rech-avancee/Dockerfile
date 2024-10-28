# Use official OpenJDK 11 image as base image
FROM openjdk:17-jdk-alpine


# Copy the packaged Spring Boot application JAR file into the container
COPY target/ms-rech-avancee*.jar ms-rech-avancee.jar

EXPOSE 9993

# Command to run the Spring Boot application when the container starts
CMD java -jar /ms-rech-avancee.jar
