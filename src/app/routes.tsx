import { createBrowserRouter } from 'react-router';
import { SplashScreen } from './screens/SplashScreen';
import { HomeScreen } from './screens/HomeScreen';
import { BudgetJarsScreen } from './screens/BudgetJarsScreen';
import { DecisionScreen } from './screens/DecisionScreen';
import { FraudScreen } from './screens/FraudScreen';
import { ProgressScreen } from './screens/ProgressScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: SplashScreen,
  },
  {
    path: '/home',
    Component: HomeScreen,
  },
  {
    path: '/budget-jars',
    Component: BudgetJarsScreen,
  },
  {
    path: '/decision',
    Component: DecisionScreen,
  },
  {
    path: '/fraud',
    Component: FraudScreen,
  },
  {
    path: '/progress',
    Component: ProgressScreen,
  },
]);
