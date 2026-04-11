import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchReducerActions } from "../redux/features/searchSlice";


const SearchBar = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('form submitted');

        dispatch(searchReducerActions.setQuery(text));

        setText('');
    }

    return (
        <div>
            <form
                action=""
                className='flex gap-5 p-10 bg-gray-900'
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder='Search media...'
                    required
                    className='w-full px-4 py-2 text-xl rounded outline-none border border-gray-500 hover:border-white/55 active:border-white/55 transition duration-300'
                    value={text}
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setText(e.target.value)
                    }}
                />
                <button
                    className='px-4 py-2 text-xl text-gray-300 uppercase rounded outline-none border border-gray-500 hover:border-white/55 active:border-white/55 transition duration-300 cursor-pointer active:scale-95'
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar
