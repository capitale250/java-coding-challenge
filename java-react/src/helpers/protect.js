

export const ADMIN = (user) => {
  return process.env.REACT_APP_ADMIN_ROLE === user;
};
