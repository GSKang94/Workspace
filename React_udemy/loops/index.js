class App extends React.Component {
    render() {
        return (
            <div>
                <List
                    name="Gagan"
                    hobbies={['reading', 'movies', 'singing']}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));