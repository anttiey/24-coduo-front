import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './pages/Main/Main';
import OnBoardingPage from './pages/OnboardingPage';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/Global.style';
import PairRoomPage from './pages/PairRoom/PairRoomPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/room/:roomId/onboarding',
      element: <OnBoardingPage />,
    },
    {
      path: '/room/:roomId',
      element: <PairRoomPage />,
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
