import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/login/Login';
import Auth from './auth/Auth';
import App from './App';
import ProtectedRoute from './util/ProtectedRoute';
import Home from './portal/home/Home';
import KNN from './portal/models/KNN';
import LR from './portal/models/LR';
import SVC from './portal/models/SVC';
import BT from './portal/models/BinaryTree';
import NN from './portal/models/NeuralNetwork';
import NNB from './portal/models/NeuralNetworkBin';
import CNN from './portal/models/CNN';
import Redirect from './Redirect';
import Help from './auth/help/Help';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter basename={'/'}>
			<Routes>
				<Route path='*' element={<Redirect />} />
				<Route path='/' element={<Redirect />} />
				<Route path='/' element={<Auth />}>
					<Route path='login' element={<Login />} />
				</Route>
				<Route path="/" element={<App />}>
					<Route path='home' element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					} />
					<Route path='knn' element={
						<ProtectedRoute>
							<KNN />
						</ProtectedRoute>
					} />
					<Route path='lr' element={
						<ProtectedRoute>
							<LR />
						</ProtectedRoute>
					} />
					<Route path='svc' element={
						<ProtectedRoute>
							<SVC />
						</ProtectedRoute>
					} />
					<Route path='bt' element={
						<ProtectedRoute>
							<BT />
						</ProtectedRoute>
					} />
					<Route path='nn' element={
						<ProtectedRoute>
							<NN />
						</ProtectedRoute>
					} />
					<Route path='nnb' element={
						<ProtectedRoute>
							<NNB />
						</ProtectedRoute>
					} />
					<Route path='cnn' element={
						<ProtectedRoute>
							<CNN />
						</ProtectedRoute>
					} />
				</Route>
				<Route path='help' element={<Help />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
