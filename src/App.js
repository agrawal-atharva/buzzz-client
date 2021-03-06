import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import Login from './components/Login';
import Profile from './components/Profile/Profile';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Login />} />
				<Route exact path='/feed' element={<Feed />} />
				<Route exact path='/profile' element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
