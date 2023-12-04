import './ListOfAnimals.css';
import React from "react";
import InfoAnimal from '../InfoAnimal/InfoAnimal';

class AnimalsService {
    animals = [
        {id: '1', kind: 'кот', nickname: 'Борис', age: 5, gender: 'м', typeOfFood: 'плотоядное'},
        {id: '2', kind: 'собака', nickname: 'Дакота', age: 6, gender: 'ж', typeOfFood: 'плотоядное'},
        {id: '3', kind: 'кролик', nickname: 'Несквик', age: 3, gender: 'м', typeOfFood: 'травоядное'},
        {id: '4', kind: 'кот', nickname: 'Бонни', age: 3, gender: 'ж', typeOfFood: 'плотоядное'},
        {id: '5', kind: 'кролик', nickname: 'Луна', age: 4, gender: 'ж', typeOfFood: 'травоядное'},
        {id: '6', kind: 'кот', nickname: 'Бруно', age: 7, gender: 'м', typeOfFood: 'плотоядное'},
        {id: '7', kind: 'собака', nickname: 'Эби', age: 8, gender: 'ж', typeOfFood: 'плотоядное'},
        {id: '8', kind: 'кот', nickname: 'Оскар', age: 4, gender: 'м', typeOfFood: 'плотоядное'}
    ]
    getAnimals() {
        return this.animals;
    }
}

class ListOfAnimals extends React.Component {

    state = {
        render: false,
        cats: false,
        all: true
    }
    onSelect = id => {
        this.setState({
            render: !this.state.render,
            id: id
        })
    }
    hideCats = () => {
        this.setState({
            cats: !this.state.cats,
            all: !this.state.all
        })
    }

    animals = new AnimalsService().getAnimals();

    render() {
        return (
            <div className="animals">
                {this.animals.map((animal) =>
                    <div onClick={() => this.onSelect(animal.id)} key={animal.id} className="animals-selected">
                        {this.state.all && <div>{animal.kind} {animal.nickname}</div>}
                        {this.state.render && this.state.id === animal.id && <InfoAnimal
                            nickname={animal.nickname}
                            kind={animal.kind}
                            age={animal.age}
                            gender={animal.gender}
                            typeOfFood={animal.typeOfFood}/>}
                        {this.state.cats && animal.kind !== 'кот' && <ListOfAnimals
                            nickname={animal.nickname}
                            kind={animal.kind}/> && <div>{animal.kind} {animal.nickname}</div>}
                    </div>
                )}
                <button className="btn" onClick={() => this.hideCats()}>
                    {this.state.cats ? 'Показать котиков' : 'Скрыть котиков'}
                </button>
            </div>
        );
    }
}

export default ListOfAnimals;