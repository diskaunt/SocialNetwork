import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
	{ id: "1", name: "name", likesCount: "16", src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg", message: "Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi"},
	{ id: "2", name: "name", likesCount: "32", src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg", message: "I love Bananas "}
]

const dialogs = [
	{
		id: "1",
		name: "Dimych",
		src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
	},
	{
		id: "2",
		name: "Misha",
		src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
	},
	{
		id: "3",
		name: "Alina",
		src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
	},
	{
		id: "4",
		name: "Pasha",
		src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
	},
	{
		id: "5",
		name: "Vanes",
		src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
	},
];

const messages = [
	{
		id: "1",
		message: "Hi, how are you?",
		src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
	},
	{
		id: "2",
		message:
			"how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?",
		src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
	},
	{
		id: "3",
		message: "yo",
		src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
	},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
