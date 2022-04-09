import './App.css';
import Header from "./components/Header";
import TheoryScalesPage from "./pages/TheoryScalesPage";

function App() {
    const menuItems = [
        {
            title: "Theory",
            isActive: true,
            subItems: [
                {
                    title: "Scales",
                    link: "#",
                    isActive: true
                },
            ]
        },
        {
            title: "Learn",
            subItems: [
                {
                    title: "Scales",
                    link: "#",
                },
            ]
        }
    ]

    return (
        <div className="App">
            <Header menuItems={menuItems}/>
            <main className="container">
                <TheoryScalesPage />
            </main>
        </div>
    );
}

export default App;
