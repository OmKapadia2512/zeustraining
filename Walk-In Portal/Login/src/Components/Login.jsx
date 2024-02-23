
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import useLoginStore from '../ReactStore/Store';

const Login = () => {
  const { email, password, rememberMe, setEmail, setPassword, setRememberMe } = useLoginStore();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.chead}>
          <div className={styles.right}>Log in</div>
        </div>
        <div className={styles.cbody}>
          <form onSubmit={handleSubmit}>
            <div className={styles.usermail}>
              <input type="email" placeholder="Email ID*" value={email} onChange={handleEmailChange} />
              <Link to="#">FORGOT EMAIL ID?</Link>
            </div>

            <div className={styles.userpass}>
              <input type="password" placeholder="Password*" value={password} onChange={handlePasswordChange} />
              <Link to="#">FORGOT PASSWORD?</Link>
            </div>

            <div className={styles.remindbox}>
              <div className={styles.inn}>
                <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
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
