import  create from 'zustand';

const useEducationStore = create((set) => ({
  listUp: true,
  showEducationDialog: true,
  yearOfPassing: "2020",
  qualification: "Bachelor in Technology (B.Tech)",
  stream: "Information Technology",
  college: "Pune Institute of Technology (PIT)",
  collegeLocation: "Mumbai",
  setField: (fieldName, value) => set((state) => ({ ...state, [fieldName]: value })),
}));

export default useEducationStore;
