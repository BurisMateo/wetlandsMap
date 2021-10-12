import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IonButton } from '@ionic/react';


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <IonButton color='dark' onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </IonButton>
  );
};

export default LogoutButton;