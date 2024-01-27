import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../contexts/AuthContext";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL;

function UserProfilePage() {
  const [userProfile, setUserProfile] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(undefined);

  // useEffect(() => {
  //   const getUserProfile = async () => {
  //     try {
  //       const storedToken = localStorage.getItem("authToken");

  //       if (storedToken) {
  //         const userProfileResponse = await axios.get(
  //           `${API_URL}/api/user/${user._id}`,
  //           { headers: { Authorization: `Bearer ${storedToken}` } }
  //         );

  //         setUserProfile(userProfileResponse.data);
  //       } else {
  //         setErrorMessage("User not logged in");
  //       }
  //     } catch (error) {
  //       const errorDescription = error.response.data.message;
  //       setErrorMessage(errorDescription);
  //     }
  //   };

  //   const getUserEvents = async () => {
  //     try {
  //       const storedToken = localStorage.getItem("authToken");

  //       if (storedToken) {
  //         const userEventsResponse = await axios.get(
  //           `${API_URL}/api/events/${user._id}`,
  //           { headers: { Authorization: `Bearer ${storedToken}` } }
  //         );

  //         setUserEvents(userEventsResponse.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user events:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getUserProfile();
  //   getUserEvents();
  // }, [user._id]);

  if (errorMessage) return <div>{errorMessage}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        {userProfile && (
          <>
            <h1>{userProfile.name}</h1>
            <div>
              <p>
                <strong>Email:</strong> {userProfile.email}
              </p>
            </div>
          </>
        )}
      </div>
      <div>
        <h2>Events Created by {userProfile.name}</h2>
        <ul>
          {userEvents.map((event) => (
            <li key={event._id}>{event.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfilePage;
