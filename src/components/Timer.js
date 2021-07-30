import React, {useState, useRef} from 'react'

function padd(time) {
	return time.toString().padStart('2', 0)
}

function Timer() {
	const [title, setTitle] = useState('Let The Countdown begin');
	const [timeLeft, setTimeLeft] = useState(15);


	const minutes = padd(Math.floor(timeLeft / 60));
	const secs = padd(timeLeft - minutes * 60);
	return (
		<div>
			<h1 className="text-white">{title}</h1>

			<div className="text-white text-6xl">
				<span>{minutes}</span>
				<span>:</span>
				<span>{secs}</span>
			</div>

			<div className="flex space-x-1 justify-center">
				<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Start</button>
				<button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Stop</button>
				<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Reset</button>
			</div>
		</div>
	)
}

export default Timer
