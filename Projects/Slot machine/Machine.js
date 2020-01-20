class Machine extends React.Component {
    render() {
        //object destructuring
        const { s1, s2, s3 } = this.props;
        let result;
        if (s1 == s2 && s1 == s3) {
            result = "Winner";
        } else {
            result = "Loser";
        }
        return (
            <div>
                {s1} {s2} {s3}
                <p>{result}</p>
            </div>
        )
    }
}

