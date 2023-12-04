function InfoAnimal(animal) {
    return(
        <div>
            <h2>Подробная информация о животном {animal.nickname}</h2>
            <p>Вид: {animal.kind}</p>
            <p>Кличка: {animal.nickname}</p>
            <p>Возраст: {animal.age}</p>
            <p>Пол: {animal.gender}</p>
            <p>Тип питания: {animal.typeOfFood}</p>
        </div>
    );
}

export default InfoAnimal;