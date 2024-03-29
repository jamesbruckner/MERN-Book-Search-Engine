import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//    headers: {
//           ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//    }
//   }
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });


function App() {
  return (
    <ApolloProvider client = {client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
