import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponentin tila',
                exercises: 14
            }
        ]
    }

    return(
        <div>
            <Header course={course.name} />
            <Content osa1={course.parts[0].name} harkat1={course.parts[0].exercises}
                     osa2={course.parts[1].name} harkat2={course.parts[1].exercises}
                     osa3={course.parts[2].name} harkat3={course.parts[2].exercises} />
            <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    )
}

const Header = (props) => {
    console.log(props)
    return(
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <div>
            <p>
            {props.part} {props.exerciseAmount}
            </p>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part={props.osa1} exerciseAmount={props.harkat1} />
            <Part part={props.osa2} exerciseAmount={props.harkat2} />
            <Part part={props.osa3} exerciseAmount={props.harkat3} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>
                yhteensä {props.exercises} tehtävää
            </p>
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));

