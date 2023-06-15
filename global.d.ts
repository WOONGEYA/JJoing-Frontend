declare global {
  export interface Window {
    google: {
      accounts: {
        id: {
          initialize: (options: GoogleAccountsOptions) => void;
          renderButton: (element: HTMLElement | null, options?: GoogleButtonOptions) => void;
          prompt: () => void;
        };
      };
    };
  }
}

export interface GoogleAccountsOptions {
  client_id: string;
  callback: (response: GoogleCallbackResponse) => void;
}

export interface GoogleCallbackResponse {
  credential: string;
}

export interface GoogleButtonOptions {
  theme?: string;
  width?: string;
  height?: string;
}
