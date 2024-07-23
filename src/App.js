import logo from './logo.svg';
import './App.css';
import BlogNav from './components/BlogNav';
import Posts from './components/Posts';

function App(){
    return(
<div className='App'>
<BlogNav/>
<Posts/>
</div>
    );
}

export default App;
