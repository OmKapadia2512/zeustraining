import create from 'zustand';

const usePersonalInfoStore = create((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumberCode: '',
  phoneNumber: '',
  portfolioUrl: '',
  referredEmployeeName: '',
  sendJobNotification: false,
  preferredJobRoles: {
    instructionalDesigner: false,
    softwareEngineer: false,
    softwareQualityEngineer: false,
  },
  setField: (field, value) => set((state) => ({ [field]: value })),
  toggleSendJobNotification: () => set((state) => ({ sendJobNotification: !state.sendJobNotification })),
  togglePreferredJobRole: (role) => set((state) => ({
    preferredJobRoles: {
      ...state.preferredJobRoles,
      [role]: !state.preferredJobRoles[role],
    },
  })),
}));

export default usePersonalInfoStore;
