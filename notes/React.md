## Cheat-sheet

* https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/react.js

* http://www.developer-cheatsheets.com/react

## JSX

```jsx
const element = <h1>Hello, world!</h1>;
```

* JSX produces React "elements".

## Elements

* Elements are the smallest building blocks of React apps.

* An element describes what you want to see on the screen

  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

## Default props

* Write it inside your component before render( )

```jsx
static defaultProps = {
    <prop_name> :<prop_value>,
    <prop_name> :<prop_value>
}  
        Or
Component.defaultProps = {
    <prop_name> :<prop_value> 
}
```

## Simple component

```react
class  extends React.Component{
    render(){
        return(
        	<div>
            	
            </div>
        )
    }
}
```

```react
ReactDOM.render(App,document.getElementById('root'));
```

## React script for CRA

```css
npm install react-scnpm install react-scripts@latestripts@latest
```

## propTypes

 Type-checking features to verify that components receive props of the correct type.

```react
MyComponent.propTypes = { 
    handleClick: PropTypes.func.isRequired 
}
//  PropTypes.func part checks that handleClick is a function.
//  isRequired tells React that handleClick is a required property for that component.
```

