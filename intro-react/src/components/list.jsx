const List = () => {
    return (
        <div className="ml-8 pt-8">
            <h3 className="text-left text-2xl font-bold">Todos</h3>
            <div className="listing">
                <div className="flex items-center">
                    <input type="checkbox"/>
                    <p className="pl-2">Learn React</p>
                </div>
                <div className="flex items-center">
                    <input type="checkbox"/>
                    <p className="pl-2">Be Awesome!</p>
                </div>
            </div>  
        </div>
    );
}

export default List; 