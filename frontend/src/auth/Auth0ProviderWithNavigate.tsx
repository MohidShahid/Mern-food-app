import { AppState, Auth0Provider, User } from '@auth0/auth0-react';

import { ReactNode } from 'react';

function Auth0ProviderWithNavigate({ children }: { children: ReactNode }) {
  const ClientID = import.meta.env.VITE_AUTH0_CLIENTID;
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState?: AppState , user?: User) =>{
    console.log('USER' , user)
  }
  return (
    <Auth0Provider domain={domain} clientId={ClientID} authorizationParams={{
      redirect_uri : redirectUri,
      audience,
    }}
    onRedirectCallback={onRedirectCallback}>{children}</Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate