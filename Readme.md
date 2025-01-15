# ToDo Application

This README provides clear instructions on how to install dependencies, run the application, and execute the tests for the ToDo Application.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager, included with Node.js)
- **Java** (version 11 or higher, required for Spring Boot)
- **MySQL** (for the backend database)
- **Git** (optional, for cloning the repository)

## Installation

### Backend (Spring Boot)

1. **Clone the Repository**

   If you haven't already cloned the repository, you can do so by running:

   ```bash
   git clone https://github.com/socratess/To-DoList_Application-FullStack
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd <backend/todolistapplication>
   ```

3. **Configure the Database**

   Update the `application.properties` file in the `src/main/resources` directory with your MySQL database credentials:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/<database_name>?useSSL=false&serverTimezone=America/Bogota
   spring.datasource.username=<your_username>
   spring.datasource.password=<your_password>
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
    spring.jpa.open-in-view=false
    server.port=your port
   
   spring.datasource.url=jdbc:mysql://localhost:3306/task_to_do_list?useSSL=false&serverTimezone=America/Bogota
    spring.datasource.username=root
    spring.datasource.password=
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.open-in-view=false
    server.port=8082
   ```



4. **Install Dependencies and Run the Server**

   Open a terminal in the backend directory and run:

   ```bash
   ./mvnw spring-boot:run
   ```

   This will start the Spring Boot server. The API documentation (Swagger UI) will be available at `http://localhost:8080/swagger-ui/`.

### Frontend (React)

1. **Navigate to the Frontend Directory**

   ```bash
   cd <FrontEnd/todolistapplications>
   ```

2. **Install Dependencies**

   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Start the Development Server**

   To start the application in development mode, run:

   ```bash
   npm start
   ```

   This will launch the application, and you can access it in your browser at `http://localhost:3000/`.

## Running the Application

1. **Start the Backend**

   Ensure the backend server is running as described above.

2. **Start the Frontend**

   Run the React development server as described above.


## License

Include license details here (if applicable).



