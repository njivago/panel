import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './components/theme/useTheme';
import { classNames } from './utils';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={classNames('app', {}, [theme])}>                                                                                    
      <button onClick={toggleTheme}>Change theme to {theme}</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPageAsync />} />
            <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;