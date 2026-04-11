
const Button = ({ text, onClick }) => {
    return (
        <button
            className='bg-gray-900 transition duration-200 px-5 py-2 rounded uppercase cursor-pointer active:scale-95 border border-gray-800 hover:border hover:border-white/55'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
