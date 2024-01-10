import { Route, Routes } from 'react-router-dom';

import { AuthorizationPage, RegistrationPage, WelcomePage } from './pages';

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<WelcomePage />} />
				<Route path='/authorization' element={<AuthorizationPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
			</Routes>
		</div>
	);
}

export default App;
