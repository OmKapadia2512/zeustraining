import { create } from "zustand";

import pubsub from "UtilityMFE/Pubsub";
console.log("hello header store")

export const useNavigationStore = create((set) => ({
  isUserLoggedIn: false,
  userDetails: {},
  userLoginInfo: (isUserLoggedIn, userDetails) =>
    set((state) => ({
      isUserLoggedIn,
      userDetails,
    })),
}));

const udpateLocalStore = (user) => {
  console.log(user)
  const { userLoginInfo } = useNavigationStore.getState();
  const isUserLoggedIn = user.isUserLoggedIn;
  const userDetails = user.userDetails;
  userLoginInfo(isUserLoggedIn, userDetails);
};

const subscribeToLoginEvent = () => {
  console.log("inside subscribeToLoginEvent")
  pubsub.subscribe("USER_LOGIN", udpateLocalStore);
};

subscribeToLoginEvent();