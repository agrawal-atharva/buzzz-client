import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SelfProfile from './pages/SelfProfile';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Login />} />
				<Route exact path='/feed' element={<Feed />} />
				<Route
					exact
					path='/userProfile/:profileId/:currentUserId'
					element={<Profile />}
				/>
				<Route exact path='/selfProfile/:id' element={<SelfProfile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
