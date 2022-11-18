const Input = () => {
    return (
        <form className="todoInput line flex flex-col ml-8 pt-8 pb-5">
            <input className="bg-gray-100 border border-solid border-gray-300 rounded-md w-max p-1" type="text" placeholder="Type New Todo"/>
            <input className="bg-blue-500 text-white rounded-md w-24 p-1 mt-2 cursor-pointer" type="submit" value="Add Todo" />
        </form>
    );
}

export default Input; 