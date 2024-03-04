  import create from 'zustand';

  const useProfessionalStore = create((set) => ({
    applicantType: 'fresher',
    yearsOfExperience: 0,
    currentCTC: 0,
    expectedCTC: 0,
    technologiesExpertise: {
      Java:false,
      Python:false,
      JavaScript: false,
      Sql:false,
      React: false,
    },
    technologiesFamiliar: {
      Java:false,
      Python:false,
      JavaScript: false,
      Sql:false,
      React: false,

     
    },
    otherTechnologiesExpertise: '',
    otherTechnologiesFamiliar: '',
    noticePeriod: false,
    noticePeriodEndDate: '',
    noticePeriodDuration: '2 months',
    appearedForTest: false,
    roleAppliedFor: '',
    setField: (field, value) => {
      set((state) => {
        if (field === 'technologiesExpertise' || field === 'technologiesFamiliar') {
          const newValue = { ...state[field], [value]: !state[field][value] };
          return { ...state, [field]: newValue };
        } else {
          return { ...state, [field]: value };
        }
      });
    },
    
    
  }));

  export default useProfessionalStore;
