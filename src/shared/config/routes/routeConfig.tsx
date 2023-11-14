import type { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Routes } from './constants';

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
};

export const routeConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [Routes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};