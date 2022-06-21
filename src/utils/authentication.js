const user = { id: 'wanted@gmail.com', pw: 'Wanted1!' };

export const login = (id, pw) => {
  if (id === user.id && pw === user.pw) return true;
  else return false;
};
