import create from 'zustand';

const useProfessionalStore = create((set) => ({
  applicantType: 'fresher',
  yearsOfExperience: 0,
  currentCTC: 0,
  expectedCTC: 0,
  technologiesExpertise: {
    JavaScript: false,
    Angular: false,
    React: false,
    NodeJs: false,
    Others: false
  },
  technologiesFamiliar: {
    JavaScript: false,
    Angular: false,
    React: false,
    NodeJs: false,
    Others: false
  },
  otherTechnologiesExpertise: '',
  otherTechnologiesFamiliar: '',
  noticePeriod: false,
  noticePeriodEndDate: null,
  noticePeriodDuration: '2 months',
  appearedForTest: false,
  roleAppliedFor: '',
  setField: (field, value) => {
    if (field === 'technologiesExpertise' || field === 'technologiesFamiliar') {
      const newValue = { ...field, [value]: !field[value] };
      set((state) => ({ ...state, [field]: newValue }));
    } else {
      set((state) => ({ ...state, [field]: value }));
    }
  },
}));

export default useProfessionalStore;
