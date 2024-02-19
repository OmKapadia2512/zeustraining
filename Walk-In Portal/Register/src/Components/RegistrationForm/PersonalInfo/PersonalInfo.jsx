import React from 'react';
import usePersonalInfoStore from '../Store/personalInfoStore';
import './Style.css';

const PersonalInfo = ({ editMode }) => {
  const {
    firstName, lastName, email, phoneNumberCode,phoneNumber, portfolioUrl,
    referredEmployeeName, sendJobNotification, preferredJobRoles,
    setField, toggleSendJobNotification, togglePreferredJobRole,
  } = usePersonalInfoStore();

  return (
    <>
      <form className="body1">
        <div className="left">
          <div className="fname">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              disabled={!editMode}
              value={firstName}
              onChange={(e) => setField('firstName', e.target.value)}
            />
          </div>

          <div className="lname">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              placeholder="Watson"
              disabled={!editMode}
              value={lastName}
              onChange={(e) => setField('lastName', e.target.value)}
            />
          </div>

          <div className="mail">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              placeholder="Johnwatson@example.com"
              disabled={!editMode}
              value={email}
              onChange={(e) => setField('email', e.target.value)}
            />
          </div>

          <div className="phoneno">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <span>+</span>
            <input className="code" type="text" disabled={!editMode} value={phoneNumberCode} onChange={(e) => setField('phoneNumberCode', e.target.value)} />
            <input className="number" type="text" id="phoneNumber" value={phoneNumber} disabled={!editMode} onChange={(e) => setField('phoneNumber', e.target.value)}/>
          </div>

          {editMode && (
            <div className="resume">
              <label className="lab">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#1F7A54"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
                </svg>
                <input type="file" className="hidden" name="file1" />
                <span>UPLOAD RESUME</span>
              </label>
            </div>
          )}

          <div className="portfoliourl">
            <label htmlFor="portfolioUrl">Enter Portfolio URL (if any)</label>
            <input
              type="text"
              id="portfolioUrl"
              name="url"
              placeholder="www.johndoe.com"
              disabled={!editMode}
              value={portfolioUrl}
              onChange={(e) => setField('portfolioUrl', e.target.value)}
            />
          </div>

          <div className="preferredjob">
          <label htmlFor="preferredRoles">Preferred Job Roles*</label>
          <div className="checks">
            <div className="check1">
              <input
                type="checkbox"
                id="instructionalDesigner"
                disabled={!editMode}
                checked={preferredJobRoles.instructionalDesigner}
                onChange={() => togglePreferredJobRole('instructionalDesigner')}
              />
              <label htmlFor="instructionalDesigner">Instructional Designer</label>
            </div>

            <div className="check2">
              <input
                type="checkbox"
                id="softwareEngineer"
                disabled={!editMode}
                checked={preferredJobRoles.softwareEngineer}
                onChange={() => togglePreferredJobRole('softwareEngineer')}
              />
              <label htmlFor="softwareEngineer">Software Engineer</label>
            </div>

            <div className="check3">
              <input
                type="checkbox"
                id="softwareQualityEngineer"
                disabled={!editMode}
                checked={preferredJobRoles.softwareQualityEngineer}
                onChange={() => togglePreferredJobRole('softwareQualityEngineer')}
              />
              <label htmlFor="softwareQualityEngineer">Software Quality Engineer</label>
            </div>
          </div>
        </div>

          <div className="referred">
            <label htmlFor="referred">If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</label>
            <input
              type="text"
              id="referredEmpName"
              name="referredEmpName"
              placeholder=""
              disabled={!editMode}
              value={referredEmployeeName}
              onChange={(e) => setField('referredEmployeeName', e.target.value)}
            />
          </div>

          <div className="sendjobnotification">
            <input
              type="checkbox"
              id="sendJobNotification"
              disabled={!editMode}
              checked={sendJobNotification}
              onChange={toggleSendJobNotification}
            />
            <label htmlFor="sendJobNotification">Send me job related updates via mail</label>
          </div>
        </div>

        <div className="right">
          <label className="lab" htmlFor="uploadDisplayPicture">
            <input type="file" className="hidden" name="file1" id="uploadDisplayPicture" disabled={!editMode} />
            <span>UPLOAD DISPLAY PICTURE</span>
            <p>Max. image size: 5 MB</p>
          </label>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
