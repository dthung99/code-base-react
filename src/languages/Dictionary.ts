// Dictionary interface (simplified version)
export interface Dictionary {
  common: {
    language: string;
    title: string;
    underDevelopment: {
      title: string;
      message: string;
    };
  };

  auth: {
    login: string;
    logout: string;
    register: string;
    welcomeBack: string;
    signInToAccount: string;
    continueWithGoogle: string;
    continueWithMicrosoft: string;
  };

  sideBar: {
    home: string;
    history: string;
    billing: string;
    setting: string;
  };

  home: {
    description: string;
  };
}
