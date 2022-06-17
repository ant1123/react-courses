export function Search ({placeholder, onSearchChange}) {
    return (
        <input type="text" className="contactSearch" 
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={placeholder ? placeholder : 'Search'}>
        </input>
    );
}