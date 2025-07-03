'use client';

// Client-side cookie management
export const createCookies = (name, token) => {
  // Store in localStorage for client-side access
  localStorage.setItem(name, token);
};

export const deleteCookies = (name) => {
  localStorage.removeItem(name);
};
