class App extends React.Component {
    render() {
        let slots = ["🍎", "🍊", "🍐"];
        function randomSlot() {
            let s = slots[Math.floor(Math.random() * slots.length)]
            return s;
        };
        return (
            <div>
                <Machine
                    s1={randomSlot()}
                    s2={randomSlot()}
                    s3={randomSlot()}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));