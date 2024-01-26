# Use an official OpenJDK runtime as a parent image
FROM adoptopenjdk:17-jre-hotspot

# Set the working directory in the container
WORKDIR /app

# Copy the application JAR file into the container
COPY target/*.jar /app/app.jar

# Expose the port that your Spring Boot application will run on
EXPOSE 8081

# Specify any environment variables if needed
# ENV VARIABLE_NAME=value

# Command to run the application when the container starts
CMD ["java", "-jar", "app.jar"]
