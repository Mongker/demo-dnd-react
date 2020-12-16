import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// JSX
import Container1 from './step1/index';

function App() {
	return (
		<div className='App'>
			<DndProvider backend={HTML5Backend}>
				<Container1 />
			</DndProvider>
		</div>
	);
}

export default App;
