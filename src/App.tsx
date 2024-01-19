import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
	AuthorizationPage,
	Menu,
	RegistrationPage,
	StartupScreenPage,
	WelcomePage,
} from './pages';

function App() {
	const location = useLocation();
	return (
		<div className='container'>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<WelcomePage />} />
					<Route path='/authorization' element={<AuthorizationPage />} />
					<Route path='/registration' element={<RegistrationPage />} />
					<Route path='/welcome' element={<StartupScreenPage />} />
					<Route path='/menu' element={<Menu />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
