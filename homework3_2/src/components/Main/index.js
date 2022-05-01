export function Main() {
    let items = [];
    for (var i = 0; i < 4; i++) {
        items.push(
            <p key={"Lorem" + i}>
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            </p>
        );
    }
    return (   
        <div className="App-main">   
            <h1 className="Main-header">This is a header title</h1>
            {items}
        </div>
    );
}