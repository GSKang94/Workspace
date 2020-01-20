class Machine extends React.Component {
    render() {
        let props = this.props;
        let result;
        if (props.s1 == props.s2 && props.s1 == props.s3) {
            result = "Winner";
        } else {
            result = "Loser";
        }
        console.log(props)
        return (
            <div>
                {props.s1} {props.s2} {props.s3}
                <p>{result}</p>
            </div>
        )
    }
}

