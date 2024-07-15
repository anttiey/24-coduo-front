import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './pages/Main';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global.style';
import theme from './styles/theme';
import OnBoardingPage from './pages/OnboardingPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/room/:roomId',
      element: <OnBoardingPage />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;
