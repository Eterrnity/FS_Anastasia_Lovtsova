import './App.css';
import ListOfAnimals from "./components/ListOfAnimals/ListOfAnimals";
import React from "react";

class App extends React.Component {

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <h1>Поиск домашних животных</h1>
                    <ListOfAnimals/>
                </header>
            </div>
        );
    }
}

export default App;
