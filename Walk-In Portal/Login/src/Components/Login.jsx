import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { useLoginStore } from "../ReactStore/Store";
import axios from "axios";
import { publishLoginEvent } from "../ReactStore/Store";

const Login = () => {
  console.log("hello from Login");
  const { userLogin } = useLoginStore();
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const mySetCookie = (cookieKey, cookieValue) => {
    document.cookie = `${cookieKey}=${cookieValue}; path=/`;
  };

  const removeCookie = (cookieKey) => {
    document.cookie = `${cookieKey}=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
  };

  useEffect(() => {
    removeCookie("token");
    const userLoginDetails = {
      isUserLoggedIn: false,
      userDetails: {},
    };
    publishLoginEvent(userLoginDetails);
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();

    const query = `
      query Login($userEmail: String!, $userPassword: String!) {
        checkLogin(loginCredentials: { userEmail: $userEmail, userPassword: $userPassword }) {
          id
          guid
          first_name
          last_name
          email
          profile_pic
          token
        }
      }
    `;

    const variables = {
      userEmail: email,
      userPassword: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/graphql",
        { query, variables },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          },
          
        }
      );
        console.log(response)
      const result = response.data.data.checkLogin;
      console.log(result)
      if (result) {
        mySetCookie("token", result.token);

        const userLoginDetails = {
          isUserLoggedIn: true,
          userDetails: result,
        };
        userLogin(result);

        publishLoginEvent(userLoginDetails);
        navigateTo("/driveList");
      }
    } catch (error) {
      console.error("Error in handleLogin:", error.message);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.chead}>
          <div className={styles.right}>Log in</div>
        </div>
        <div className={styles.cbody}>
          <form onSubmit={handleLogin}>
            <div className={styles.usermail}>
              <input
                type="email"
                placeholder="Email ID*"
                value={email}
                onChange={handleEmailChange}
              />
              <Link to="#">FORGOT EMAIL ID?</Link>
            </div>

            <div className={styles.userpass}>
              <input
                type="password"
                placeholder="Password*"
                value={password}
                onChange={handlePasswordChange}
              />
              <Link to="#">FORGOT PASSWORD?</Link>
            </div>

            <div className={styles.remindbox}>
              <div className={styles.inn}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <p>Remember Me</p>
              </div>
            </div>

            <div className={styles.submitbtn}>
              <input type="submit" value="LOG IN" />
            </div>

            <div className={styles.lastsec}>
              <p className={styles.notreg}>Not registered yet?</p>
              <p className={styles.creac}>
                <Link to="/registration/personalInfo">CREATE AN ACCOUNT</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
