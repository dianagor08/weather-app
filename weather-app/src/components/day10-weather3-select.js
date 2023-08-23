import React from 'react';

export default function Select(props) {
    const [userInput, setUserInput] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState(null);

    const handleChange = (event) => {
        // Get the input from the user and save it in a state variable
        // event.target is the input element
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log('The form submitted with input: ' + userInput);
        setSelectedValue(() => userInput);
        event.preventDefault(); // Prevent default form submission behavior 
    }

    // const countries = [
    //     { country: "ca", name: 'Canada' },
    //     { country: 'us', name: 'USA' },
    //     { country: "eg", name: 'Egypt' }];
    const cities = props.data;
    return (
        <div className="container p-3 bg-warning">
            <i className='text-danger fw-bold'>Select component</i>
            <form onSubmit={handleSubmit} className=' row g-3'>
                <label className="col-sm col-form-label">
                    Choose your country:</label>
                <select value={userInput} onChange={handleChange}
                    className='form-select col-md'>
                    {cities.map((city, index) =>
                        <option key={city.country + index} value={`${city.name} , ${city.country}`}>
                            {city.name}, {city.country}</option>
                    )}
                </select>
                <div className="col-sm col-form-label">
                    <input type="submit" value="Submit" className="btn btn-primary mb-3" />
                </div>
            </form>

            {
                selectedValue &&
                <div> You selected {selectedValue} </div>
            }
        </div>
    );
}
