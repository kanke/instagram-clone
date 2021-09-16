import './styles/App.css';
import { lazy, Suspense } from 'react';
import ReactLoader from "./components/ReactLoader";

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

function App() {
    return (
        <Suspense fallback={<ReactLoader />}>
        <div className="App">
            <Dashboard />
        </div>
        </Suspense>
    );
}

export default App;
