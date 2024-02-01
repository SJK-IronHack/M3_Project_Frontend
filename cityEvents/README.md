# City Events - Frontend

## Description

City Events Frontend is the user interface for the City Events application, where users can discover, organize, and manage events happening in the city. This application allows users to log in, view a carousel of event listings on the homepage, add, update, and remove events, as well as leave comments on events.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/SJK-IronHack/M3_Project_Frontend.git

2. Navigate to the project directory:

cd city-events-client

3. Install dependencies:

npm install

4. Create a .env file in the root directory and set the appropriate environment variables (e.g., REACT_APP_API_URL for the backend API URL).

REACT_APP_API_URL=http://localhost:5000/api
5. Run the application:

npm run dev
The application will be accessible at http://localhost:3000.

6. Features
User Authentication:

Users can sign up, log in.
Authentication is handled securely with tokens.

7. Event Carousel:

The homepage features a carousel of event listings.
Users can scroll through the carousel to view upcoming events.

8. Event Management:

Users can add new events to the city events.
Events can be updated, allowing users to modify event details.
Users can remove events.

9. Comments:

Users can leave comments on events to share thoughts or ask questions.
Comment functionality enhances user interaction and engagement.

10. Folder Structure
The project's folder structure follows a standard React application structure. Key folders include:

src/components: Contains React components used in the application.
src/services: Holds service files responsible for making API calls.
src/pages: Defines main application pages.
src/utils: Contains utility functions and constants.

11. Dependencies
Key dependencies used in the City Events Frontend include:

react and react-dom: Core React libraries.
react-router-dom: For handling routing within the application.
Mantine: For styling purposes
