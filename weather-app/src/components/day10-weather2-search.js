// Use this API to search for cities: 
// https://openweathermap.org/api/geocoding-api
import React from 'react';
import Select from './day10-weather3-select';

export default function Search() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [cel, setCel] = React.useState(null);

    const handleChange = (event) => {
        // Get the input from the user and save it in a state variable
        // event.target is the input element
        setSearchTerm(parseInt(event.target.value));
    }

    const handleSubmit = (event) => {
        console.log('The form submitted with input: ' + searchTerm);
        setCel(() => (searchTerm - 32) / 1.8);
        event.preventDefault(); // Prevent default form submission behavior 
    }

    const searchResults = [
        {
            "name": "London",
            "local_names": {
                "af": "Londen",
                "ar": "لندن",
                "ascii": "London",
                "az": "London",
                "bg": "Лондон",
                "ca": "Londres",
                "da": "London",
                "de": "London",
                "el": "Λονδίνο",
                "en": "London",
                "eu": "Londres",
                "fa": "لندن",
                "feature_name": "London",
                "fi": "Lontoo",
                "fr": "Londres",
                "gl": "Londres",
                "he": "לונדון",
                "hi": "लंदन",
                "hr": "London",
                "hu": "London",
                "id": "London",
                "it": "Londra",
                "ja": "ロンドン",
                "la": "Londinium",
                "lt": "Londonas",
                "mk": "Лондон",
                "nl": "Londen",
                "no": "London",
                "pl": "Londyn",
                "pt": "Londres",
                "ro": "Londra",
                "ru": "Лондон",
                "sk": "Londýn",
                "sl": "London",
                "sr": "Лондон",
                "th": "ลอนดอน",
                "tr": "Londra",
                "vi": "Luân Đôn",
                "zu": "ILondon"
            },
            "lat": 51.5085,
            "lon": -0.1257,
            "country": "GB"
        },
        {
            "name": "London",
            "local_names": {
                "ar": "لندن",
                "ascii": "London",
                "bg": "Лондон",
                "de": "London",
                "en": "London",
                "fa": "لندن، انتاریو",
                "feature_name": "London",
                "fi": "London",
                "fr": "London",
                "he": "לונדון",
                "ja": "ロンドン",
                "lt": "Londonas",
                "nl": "London",
                "pl": "London",
                "pt": "London",
                "ru": "Лондон",
                "sr": "Лондон"
            },
            "lat": 42.9834,
            "lon": -81.233,
            "country": "CA"
        },
        {
            "name": "London",
            "local_names": {
                "ar": "لندن",
                "ascii": "London",
                "en": "London",
                "fa": "لندن، اوهایو",
                "feature_name": "London",
                "sr": "Ландон"
            },
            "lat": 39.8865,
            "lon": -83.4483,
            "country": "US",
            "state": "OH"
        },
        {
            "name": "London",
            "local_names": {
                "ar": "لندن",
                "ascii": "London",
                "en": "London",
                "fa": "لندن، کنتاکی",
                "feature_name": "London",
                "sr": "Ландон"
            },
            "lat": 37.129,
            "lon": -84.0833,
            "country": "US",
            "state": "KY"
        },
        {
            "name": "London",
            "local_names": {
                "ascii": "London",
                "ca": "Londres",
                "en": "London",
                "feature_name": "London"
            },
            "lat": 36.4761,
            "lon": -119.4432,
            "country": "US",
            "state": "CA"
        }
    ];
    return (
        <div className="container p-3 bg-success">
            <i className='text-danger fw-bold'>Search component</i>
            <form onSubmit={handleSubmit} className='my-3 row g-3'>
                <label className="col-sm-4 col-form-label">
                    Please enter city name:
                </label>
                <div className="col-sm-4">
                    <input type="text" value={searchTerm}
                        onChange={handleChange} className="form-control" />
                </div>
                <div className="col-sm-4">
                    <input type="submit" value="Search" className="btn btn-primary mb-3" />
                </div>
            </form>
            <Select data={searchResults} />
        </div>
    );
}


