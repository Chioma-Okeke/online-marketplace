import AuthProvider from "./context/AuthContext";
import { PageRoutes } from "./Routes";

function App() {

    return (
        <AuthProvider>
            <div className="selection:bg-[#a480b1] selection:text-white">
                <PageRoutes />
            </div>
        </AuthProvider>
    );
}

export default App;
