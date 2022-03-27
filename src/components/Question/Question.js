import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='answer-area'>
                <h2>How does React work ?</h2>

                <p>React is a JavaScript library. It is not a framework. Creates user

                    interaction (UIs) in a predictable and effective way using the declaration

                    code. React works with the declaration code. To show you what we mean by

                    declaration code, we want you to think about the following code displayed as

                    an app. We use declaration code to construct sections, which is how we

                    display information. In fact, the components are reusable UI that allows you

                    to separate the application into different blocks that work independently.

                    The components accept the input for the data (prop) and return the React

                    object to display what should appear on the screen. They can interact with

                    other components by using props to create a more complex UI. React saves the

                    tree and will perform effective splitting calculations on the nodes.</p>

            </div>

            <div className='answer-area'>
                <h2>How does useState work ?</h2>

                <p>useState () is a hook that allows you to have flexibility in the active

                    components. useState hook is a special function that takes the original

                    position as an argument and returns the list of two entries. useState ()

                    stops the individual. state property. Returns the same members containing

                    two elements: the value of the current status, and the function you can call

                    a new value to update the status.Calling State () announces status

                    variables, values ​​in our state, that will be "saved" during operation.

                    calls. That means you are in State () guaranteed to return the same amount

                    every time you call it within your component.</p>
            </div>
        </div>
    );
};

export default Question;