import React, { useState } from "react";
import "./style.css";
import useProfessionalStore from "../../Store/professionalStore";

const Professional = ({ editMode }) => {
  const [showAccordion, setShowAccordion] = useState(true);
  const [listUpQ, setListUpQ] = useState(true);

  const {
    applicantType,
    yearsOfExperience,
    currentCTC,
    expectedCTC,
    technologiesExpertise,
    technologiesFamiliar,
    otherTechnologiesExpertise,
    otherTechnologiesFamiliar,
    noticePeriod,
    noticePeriodEndDate,
    noticePeriodDuration,
    appearedForTest,
    roleAppliedFor,
    setField,
  } = useProfessionalStore();

  const openBox2 = () => {
    setShowAccordion(!showAccordion);
    setListUpQ(!listUpQ);
  };

  const handleApplicantTypeChange = (e) => {
    setField("applicantType", e.target.value);
  };

  return (
    <>
      <div className="accordion">
        <span className="heading">Professional Qualifications</span>
        <img
          src="../../../assets/icons/list-up.svg"
          alt="Expand"
          onClick={openBox2}
          style={{ display: listUpQ ? "block" : "none" }}
        />
        <img
          onClick={openBox2}
          src="../../../assets/icons/list-down.svg"
          alt="Collapse"
          style={{ display: listUpQ ? "none" : "block" }}
        />
      </div>

      <div className="applicant-type-container">
        <label>Applicant Type*</label>
        <div className="applicant-type">
          <div className="applicant-type-fresher">
            <input
              type="radio"
              name="applicant_type"
              id="fresher"
              value="fresher"
              checked={applicantType === "fresher"}
              onChange={handleApplicantTypeChange}
              disabled={editMode}
            />
            <label htmlFor="fresher" className="radio-label">
              Fresher
            </label>
          </div>
          <div className="applicant-type-experience">
            <input
              type="radio"
              name="applicant_type"
              id="experience"
              value="experience"
              checked={applicantType === "experience"}
              onChange={handleApplicantTypeChange}
              disabled={editMode}
            />
            <label htmlFor="experience" className="radio-label">
              Experience
            </label>
          </div>
        </div>
      </div>
      {showAccordion && (
        <div className="accordion-item">
          {applicantType === "experience" && (
            <>
              <div className="input-group">
                <label htmlFor="experience">Years of Experience*</label>
                <input
                  type="number"
                  placeholder="5"
                  id="experience"
                  value={yearsOfExperience}
                  disabled={editMode}
                  onChange={(e) =>
                    setField("yearsOfExperience", e.target.value)
                  }
                />
              </div>
              <div className="input-group">
                <label htmlFor="curr_ctc">Current CTC* (In Rupees)</label>
                <input
                  type="number"
                  placeholder="500000"
                  name="curr_ctc"
                  id="curr_ctc"
                  value={currentCTC}
                  onChange={(e) => setField("currentCTC", e.target.value)}
                  disabled={editMode}
                />
              </div>
              <div className="input-group">
                <label htmlFor="expected_ctc">Expected CTC* (In Rupees)</label>
                <input
                  type="number"
                  placeholder="6,50,000"
                  name="expected_ctc"
                  id="expected_ctc"
                  value={expectedCTC}
                  onChange={(e) => setField("expectedCTC", e.target.value)}
                  disabled={editMode}
                />
              </div>
              <div className="input-group">
                <label>
                  Select All The Technologies You Expertise In*
                </label>
                <div className="disp-flex">
                  <input
                    type="checkbox"
                    name="tech"
                    id="javascript"
                    onChange={(e) =>
                      setField("technologiesExpertise", "JavaScript")
                    }
                    checked={technologiesExpertise.JavaScript}
                    disabled={editMode}
                  />
                  <label
                    htmlFor="javascript"
                    className="checkbox"
                    style={{
                      margin: 0,
                      font: "normal 700 16px/20px QuickSand",
                      color: "#222",
                    }}
                  >
                    Javascript
                  </label>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="other_tech">
                  If others, please mention
                </label>
                <input
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                  value={otherTechnologiesExpertise}
                  name="other_tech"
                  id="other_tech"
                  onChange={(e) =>
                    setField("otherTechnologiesExpertise", e.target.value)
                  }
                  disabled={editMode}
                />
              </div>
            </>
          )}

          <div className="input-group">
            <label>
              Select All The Technologies You Are Familiar In*
            </label>
            <div className="disp-flex">
              <input
                type="checkbox"
                name="tech"
                id="javascript"
                checked={technologiesFamiliar.JavaScript}
                onChange={(e) =>
                  setField("technologiesFamiliar", "JavaScript")
                }
                disabled={editMode}
              />
              <label
                htmlFor="javascript"
                style={{
                  margin: 0,
                  font: "normal 700 16px/20px QuickSand",
                  color: "#222",
                }}
              >
                Javascript
              </label>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="other_tech">
              If others, please mention
            </label>
            <div style={{ padding: 0, margin: 0, marginTop: "0px" }}>
              <input
                style={{ width: "50%" }}
                type="text"
                placeholder=""
                value={otherTechnologiesFamiliar}
                name="other_tech"
                id="other_tech"
                onChange={(e) =>
                  setField("otherTechnologiesFamiliar", e.target.value)
                }
                disabled={editMode}
              />
            </div>
          </div>

          {applicantType === "experience" && (
            <>
              <div
                className="noticePeriod-container"
                style={{
                  display: showAccordion ? "block" : "none",
                  paddingLeft: 0,
                  paddingBottom: 0,
                  marginBottom: 0,
                }}
              >
                <label>
                  Are You Currently On Notice Period
                </label>
                <div className="noticePeriod">
                  <div className="noticePeriod-yes">
                    <input
                      type="radio"
                      name="notice_period"
                      id="on_notice"
                      value="yes"
                      checked={noticePeriod === true}
                      onChange={() => setField("noticePeriod", true)}
                      disabled={editMode}
                    />
                    <label htmlFor="on_notice" className="radio-label">
                      Yes
                    </label>
                  </div>
                  <div className="noticePeriod-no">
                    <input
                      type="radio"
                      name="notice_period"
                      id="not_on_notice"
                      value="no"
                      checked={noticePeriod === false}
                      onChange={() => setField("noticePeriod", false)}
                      disabled={editMode}
                    />
                    <label htmlFor="not_on_notice" className="radio-label">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="disp-flex">
                <div className="child-1">
                  <div className="input-group">
                    <label>
                      If Yes, when will your notice period end?*
                    </label>
                    <input
                      style={{ width: "98%" }}
                      type="date"
                      placeholder=""
                      value={noticePeriodEndDate}
                      name="notice_period_end_date"
                      id="notice_period_end_date"
                      onChange={(e) =>
                        setField("noticePeriodEndDate", e.target.value)
                      }
                      disabled={editMode}
                    />
                  </div>
                </div>
                <div className="child-2">
                  <div className="input-group">
                    <label>
                      How long is your notice period?* (Mention in months)*
                    </label>
                    <select
                      name="notice_time"
                      id="notice_time"
                      className="qual-select"
                      value={noticePeriodDuration}
                      onChange={(e) =>
                        setField("noticePeriodDuration", e.target.value)
                      }
                      disabled={editMode}
                    >
                      <option value="2 months" className="vale">
                        2 months
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          <div
            className="test-container"
            style={{
              display: showAccordion ? "block" : "none",
              paddingLeft: 0,
              paddingBottom: 0,
              marginBottom: 0,
            }}
          >
            <label>
              Have You Appeared For Any Test By Zeus in the past 12 months?
            </label>
            <div className="test">
              <div className="test-yes">
                <input
                  type="radio"
                  name="test_period"
                  id="on_test"
                  value="yes"
                  onChange={() => setField("appearedForTest", true)}
                  checked={appearedForTest === true}
                  disabled={editMode}
                />
                <label htmlFor="on_test" className="radio-label">
                  Yes
                </label>
              </div>
              <div className="test-no">
                <input
                  type="radio"
                  name="test_period"
                  id="not_on_test"
                  value="no"
                  onChange={() => setField("appearedForTest", false)}
                  checked={appearedForTest === false}
                  disabled={editMode}
                />
                <label htmlFor="not_on_test" className="radio-label">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>If Yes, which role did you apply for?</label>
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder=""
              value={roleAppliedFor}
              name="other_tech"
              id="other_tech"
              onChange={(e) => setField("roleAppliedFor", e.target.value)}
              disabled={editMode}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Professional;
