const constructMutationObject = (personalInfo, education, professionalQualification) => {
  const jobRoleMap = {
    instructionalDesigner: 1,
    softwareEngineer: 2,
    softwareQualityEngineer: 3,
  };

  const techMap = {
    Java: 1,
    Python: 2,
    JavaScript: 3,
    React: 4,
    SQL: 5,
  };

  const preferredJobRoles = [];
  for (const role in personalInfo.preferredJobRoles) {
    if (personalInfo.preferredJobRoles[role]) {
      preferredJobRoles.push(jobRoleMap[role]);
    }
  }

  const familiarTechnologies = [];
  for (const techName in professionalQualification.technologiesFamiliar) {
    if (professionalQualification.technologiesFamiliar[techName]) {
      familiarTechnologies.push(techMap[techName]);
    }
  }

  const expertiseTechnologies = [];
  for (const techName in professionalQualification.technologiesExpertise) {
    if (professionalQualification.technologiesExpertise[techName]) {
      expertiseTechnologies.push(techMap[techName]);
    }
  }

  let experiencedQualification = {};
  if (professionalQualification.applicantType === "experience") {
   
    experiencedQualification = {
      experience_year: parseInt(professionalQualification.yearsOfExperience),
      current_ctc: professionalQualification.currentCTC,
      expected_ctc: professionalQualification.expectedCTC,
      notice_period: professionalQualification.noticePeriod,
      notice_period_end: professionalQualification.noticePeriodEndDate,
      notice_period_duration: parseInt(professionalQualification.noticePeriodDuration),
      expertiseTechnologies: expertiseTechnologies,
    };
  }

  const userInput = {
    personalInfo: {
      first_name: personalInfo.firstName,
      last_name: personalInfo.lastName,
      email: personalInfo.email,
      password:"abcder",
      phone_no: personalInfo.phoneNumber,
      portfolio_url: personalInfo.portfolioUrl,
      preferred_Job_roles_id: preferredJobRoles,
      resume: "abcd.pdf",
    },
    educationalQualification: {
      aggregate_percentage: 70,
      passing_year: parseInt(education.yearOfPassing),
      degree: education.qualification,
      stream: education.stream,
      college: education.college,
      college_city: education.collegeLocation,
    },
    professionalQualification: {
      applicant_type: professionalQualification.applicantType,
      applied_test: professionalQualification.appearedForTest,
      familiarTechnologies: familiarTechnologies,
      ...(professionalQualification.applicantType === "experience" && {
        experienced_qualification: experiencedQualification,
      }),
    },
  };

  return userInput;
};

export default constructMutationObject;
