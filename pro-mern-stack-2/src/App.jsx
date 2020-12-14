// const element = React.createElement('div', {title: 'Outer div'},
        //     React.createElement('h1', {className: 'yellow'}, 'Hello World!')
        // );
const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const helloContinents = Array.from(continents, c => `hello ${c}!`);
const message = helloContinents.join(' ');

const element = (
    <div title="Outer div">
        <h1>{message}</h1>
    </div>
);



ReactDOM.render(element, document.getElementById('content'));