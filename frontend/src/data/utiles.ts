import Cookies from "js-cookie";
import { REACT_APP_API_URL } from "src/env/index";

export function decodeAccessToken(accessToken:string) {
  try {
    const tokenParts = accessToken.split('.');
    if (tokenParts.length !== 3) {
      throw new Error('Invalid token');
    }
    const payload = JSON.parse(atob(tokenParts[1]));
    return payload;
  } catch (error) {
    console.error('Error decoding access token:', error);
    throw error;
  }
}

export async function refreshAccessToken() {
  try {
    const response = await fetch(`${REACT_APP_API_URL}/refresh`, {
      method: 'GET',
      credentials: 'include', 
    });
    
    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const data = await response.json();
    
    const { accessToken } = data;
    Cookies.set('accessToken', accessToken);
    return accessToken;
  } catch (error) {
    throw error;
  }
}

