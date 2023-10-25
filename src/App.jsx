import AddTodo from './components/AddTodo'
import Container from './components/Container'
import Todos from './components/Todos'

function App() {
	return (
		<Container>
			<AddTodo />
			<Todos />
		</Container>
	)
}

export default App
