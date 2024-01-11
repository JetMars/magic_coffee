import { Route, Routes } from 'react-router-dom';

import {
	AuthorizationPage,
	RegistrationPage,
	StartupScreenPage,
	WelcomePage,
} from './pages';

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<WelcomePage />} />
				<Route path='/authorization' element={<AuthorizationPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/welcome' element={<StartupScreenPage />} />
			</Routes>
		</div>
	);
}

export default App;
