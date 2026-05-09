import axios from 'axios';
// import secureLocalStorage from 'react-secure-storage';

const axiosClient = axios.create({
  baseURL: '/edl_ict/daily_v2K2Eu4SCHt8dpmrjcaA/d4MgpBhnUPGeK',
  withCredentials: true,
});

// Request Interceptor
axiosClient.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };

    // Add Bearer Token if it exists
    //  const token = secureLocalStorage.getItem('token');
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Handle success responses
    // if (response.status === 200 || response.status === 201) {
    //   // return response?.data; // Return only the data for cleaner usage
    //   return response; 
    // }
    return response;
  },
  (error) => {
    if (error.response) {
      const response = error.response;
      if (response?.data?.code === 401 && response?.data?.error === "Unauthorized") {
        // Handle unauthorized access (e.g., token expiration)
        console.log("Unauthorized", error.response);
        console.warn('Token expired or unauthorized, redirecting to login...');
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        localStorage.removeItem('token');
        localStorage.removeItem('eoffice_token');
        localStorage.removeItem('authStore');
        localStorage.removeItem('sideMenu');
        window.location.replace('/auth/login');
      } else {
        console.error(
          `API Error: ${response.status} - ${response.statusText}`
        );
      }
    } else {
      console.error('Network/Server Error:', error.message);
    }

    // Re-throw the error for further handling
    return Promise.reject(error);
  }
);

export default axiosClient;
