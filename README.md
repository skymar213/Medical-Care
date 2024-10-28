# Medical Care

This project is a medical appointment management system designed with a **React** front end and a **Spring Boot** back end. It facilitates online appointment scheduling and provides personalized features for both patients and doctors.

## Project Structure

```plaintext
Medical-Care/
├── back-end/    # Spring Boot backend
└── front-end/     # React frontend
```
## Features
- **Appointment Management:**
 Patients can book appointments online, selecting their preferred date and time.
Doctors can accept or decline appointments based on their availability.

- **Filtering by Specialty and Search by Name:**
 Users can filter doctors by specialty and search by name to find a suitable healthcare professional.

- **Personalized User Profiles:**
Each patient and doctor has a personal profile for managing information and appointment preferences.

- **Doctor Details and Mapping:**
Patients can view details for each doctor, including specialty, availability, and a map for easy location access.
## Microservices
## Profile Management
- **Features :** CRUD (Create, Read, Update, Delete) operations for patient profiles, with authentication and authorization.
- **Technologies:** Spring Boot, MySQL.
- **Endpoints:**
- POST /api/profiles: Create a new patient profile.
- GET /api/profiles/{id}: Retrieve a patient profile.
- PUT /api/profiles/{id}: Update a patient profile.
- DELETE /api/profiles/{id}: Delete a patient profile.
- POST /api/login: User authentication.
## Appointment Management
- **Features:** Creation and retrieval of appointments.
- **Technologies:** Spring Boot, MySQL.
- **Endpoints:**
- POST /api/appointments: Create a new appointment.
- GET /api/appointments: Retrieve all appointments.
- GET /api/appointments/{doctorId}: Retrieve appointments for a specific doctor.
- GET /api/appointments/patient/{patientId}: Retrieve appointments for a specific patient.
## Basic Search
- **Features:** Search doctors by name, wilaya, or specialty.
- **Technologies:** Spring Boot, MySQL.
- **Endpoints:**
- GET /api/search?name={name}: Search doctors by name.
- GET /api/search?wilaya={wilaya}: Search doctors by wilaya.
- GET /api/search?specialty={specialty}: Search doctors by specialty.
## Advanced Search
- **Features:** Find doctors closest to the user’s location using geolocation permissions.
- **Technologies:** Spring Boot, MySQL, Geolocation Services.
- **Endpoints:**
- GET /api/advanced-search?latitude={latitude}&longitude={longitude}: Search for doctors nearest to the user's current location.
## Technologies
- **Front End:**
- React
- HTML, CSS, JavaScript
- Tailwind CSS
- **Back End:**
- Spring Boot
- MySQL 
- Docker and Kubernetes
## Getting Started
- **Prerequisites :**
- Node.js and npm for the front end
- Java 11+ and Maven for the back end
- MySQL
- Docker (optional)
## Frontend Setup (React)
- Navigate to the frontend directory:
```bash
cd front-end
```
- Install dependencies:
```bash
npm install
```
- Start the development server:
```bash
npm start
```
- **The front end should now be running on http://localhost:3000**

## Backend Setup (Spring Boot)
- Navigate to the backend directory:
```bash
cd back-end
```
- Set up the MySQL and MongoDB databases and update **application.properties.**
- Build the application:
```bash
mvn clean install
```
- Run the Spring Boot server:
```bash
mvn spring-boot:run
```
- **The back end should now be running on http://localhost:8080**

## Docker (Optional)
- To deploy using Docker:

- Build Docker images for both the front end and back end:
```bash
docker build -t <image-name> .
```
- Use docker-compose:
```bash
docker-compose up
```
 ### Contact
For further information or assistance, feel free to contact:

- **Merouane Boulanouar**
- **Email:** marwanboulanouar1@gmail.com
- **GitHub:** skymar213

**Thank you for using Medical-Care! If you find this project helpful, please consider giving it a star 🌟.**
