import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
	AuthorizationPage,
	Menu,
	OrderCard,
	RegistrationPage,
	StartupScreenPage,
	WelcomePage,
} from './pages';

function App() {
	const location = useLocation();

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className='container'>
				<AnimatePresence>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<WelcomePage />} />
						<Route path='/authorization' element={<AuthorizationPage />} />
						<Route path='/registration' element={<RegistrationPage />} />
						<Route path='/welcome' element={<StartupScreenPage />} />
						<Route path='/menu' element={<Menu />} />
						<Route path='/menu/:id' element={<OrderCard />} />
					</Routes>
				</AnimatePresence>
			</div>
		</QueryClientProvider>
	);
}

export default App;
