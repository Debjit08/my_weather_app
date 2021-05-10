import React from "react";

class MyTodaysTemp extends React.Component{

    constructor(props) {
        super(props);
        console.log("i AM Constructor...")

        this.state = {
            name:"Prateek"
        }
    }

    // eventBinding (fun binding) - 4 type of fun Binding - only 2
    changeName = (event) => {
        alert("Hello.. I am Change Name " + event.target.value )
    }

    changeData = (name) => {
        alert("Hello I am " + name)
    }

    render() {
        console.log("i AM Render...")
        return(
            <div>
                <h1>Hello to All.. I am {this.state.name}</h1>
                <button value="I love Python..." onClick={this.changeName}>Click Me....</button>
                <button value="I love Python..." onClick={() => this.changeData("Prateek")}>Click Me....</button>
                </div>
        )

    }



}

export default MyTodaysTemp















