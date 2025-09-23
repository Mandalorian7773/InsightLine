// API utility functions for future backend integration
// This file is prepared for when the backend is implemented separately

// Helper function to make API calls with token
// Update the base URL when backend is deployed
export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('token');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  // TODO: Replace with actual backend URL when deployed
  const API_BASE_URL = '/api';
  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  
  return response.json();
};

// Auth API functions - ready for backend integration
// These will connect to the separate backend when it's implemented
export const authAPI = {
  // Will connect to: POST /api/auth/login
  login: async (email: string, password: string) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // Will connect to: POST /api/auth/logout
  logout: async () => {
    return apiRequest('/auth/logout', {
      method: 'POST',
    });
  },

  // Will connect to: GET /api/auth/me
  getCurrentUser: async () => {
    return apiRequest('/auth/me');
  },
};

// Additional API functions for future features
// These will connect to the separate backend when implemented
export const documentsAPI = {
  // Will connect to: GET /api/documents
  getDocuments: async () => {
    return apiRequest('/documents');
  },
};

export const notificationsAPI = {
  // Will connect to: GET /api/notifications
  getNotifications: async () => {
    return apiRequest('/notifications');
  },
};