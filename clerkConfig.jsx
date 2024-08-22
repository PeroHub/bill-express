// clerkConfig.ts
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";

export const ClerkProviderWrapper = ({ children }) => {
  return (
    <ClerkProvider frontendApi={Constants.manifest.extra.clerkFrontendApi}>
      {children}
    </ClerkProvider>
  );
};
