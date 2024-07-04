// import Watch from "./pages/watch/watch";
import { lazy, Suspense } from "react";
const Watch = lazy(() => import('./pages/watch/watch'));

function App() {
    return (
        <>
            <Suspense>
                <Watch />
            </Suspense>
        </>
    );
}

export default App;