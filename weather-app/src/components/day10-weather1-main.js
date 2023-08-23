import Search from './day10-weather2-search';
import Body from './day10-weather4-body';

export default function Main() {
    return (
        <div className="container p-5 bg-primary">
            <i className='text-danger fw-bold'>Main component</i>
            <h2 className='m-3'>My React Weather Application</h2>
            <Search />
            <hr />
            <Body />
        </div>
    );
}