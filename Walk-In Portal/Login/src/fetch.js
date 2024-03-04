import { publishLoginEvent } from "./ReactStore/Store";
import axios from "axios";

const GetSessionData = async () => {
  const getCookie = (name) => {
    const value = ` ${document.cookie}`; 
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const cookie = getCookie("token");
  if (cookie) {
    const query = `
      query authentication($token: String!) {
        authentication(token: $token) {
          id
          guid
          first_name
          last_name
          email
          profile_pic
        }
      }
    `;
    const variables = {
      token: cookie,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/graphql",
        {
          query,
          variables,
        },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          },
        }
      );

      const result = response.data.data?.authentication;

      const userLoginDetails = {
        isUserLoggedIn: true,
        userDetails: result,
      };
      console.log(result);
      publishLoginEvent(userLoginDetails);
    } catch (error) {
      console.error("Error in handleLogin:", error.message);
    }
  }
};

export default GetSessionData;
