// route to get logged in user's info (needs the token)
import { gql, useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK } from './mutations';
import { GET_ME } from './queries'

export const getMe = () => {
  const { data, loading, error } = useQuery(GET_ME);
  return { data, loading, error};
};

export const useAddUser = () => {
  const [addUserMutation, { data, loading, error }] = useMutation(ADD_USER);
  return {
    addUser: (username, email, password) => addUserMutation({ variables: { username, email, password} }),
    data,
    loading,
    error,
  };
};

export const loginUser = () => {
  const [loginUserMutation, { data, loading, error }] = useMutation(LOGIN_USER);
  return {
    loginUser: (email, password) => loginUserMutation({ variables: { email, password } }),
    data,
    loading,
    error,
  };
};

export const saveBook = () => {
  const [saveBookMutation, { data, loading, error }] = useMutation(SAVE_BOOK);
  return {
    saveBook: (bookInput) => saveBookMutation({ variables: { bookInput } }),
    data,
    loading,
    error,
  };
};

export const useDeleteBook = () => {
  const [removeBookMutation, { data, loading, error }] = useMutation(REMOVE_BOOK);
  return {
    deleteBook: (bookId) => removeBookMutation({ variables: { bookId }} ),
    data,
    loading,
    error,
  };
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
