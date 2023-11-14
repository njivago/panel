import './styles/index.scss';
import { useTheme } from 'app/providers/themes';
import classNames from 'classNames';
import { Router } from './providers/routing';
import { Navbar } from 'widgets/navigation';
import { Sidebar } from 'widgets/sidebar';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <Router />
        </div>
      </Suspense>                                                                              
    </div>
  )
}

export default App;