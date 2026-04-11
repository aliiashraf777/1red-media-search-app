import { useDispatch } from 'react-redux';
import { collectionReducerActions } from '../redux/features/collectionSlice';

const ResultCard = ({ result }) => {

    const dispatch = useDispatch();

    const addToCollection = (result) => {
        dispatch(collectionReducerActions.addCollection(result))
        dispatch(collectionReducerActions.addedToast())
    }

    return (
        <div className='w-[22vw] h-70 bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-800 hover:border-white/75 transition relative'>
            <a
                className="h-full"
                target="_blank"
                href={result.url}
            >
                {result.type === 'photo'
                    ?
                    <img
                        src={result.src}
                        alt="img"
                        className='w-full h-full object-cover object-center'
                    />
                    :
                    ''
                }

                {result.type === 'video'
                    ?
                    <video
                        src={result.src}
                        autoPlay
                        muted
                        loop
                        className='w-full h-full object-cover object-center'
                    ></video>
                    :
                    ''
                }

                {result.type === 'gif' ? '' : ''}
            </a>

            <button
                className="bg-blue-600 text-white rounded px-3 py-1 font-medium cursor-pointer hover:bg-blue-700 absolute top-5 right-5 active:scale-95"
                onClick={() => addToCollection(result)}
            >
                Save
            </button>

            <div id="bottom" className="w-full px-4 py-6 absolute bottom-0 flex justify-between items-center gap-2.5">
                <h2 className="text-white text-lg font-semibold capitalize">
                    {result.title}
                </h2>

                {/* <button className="bg-blue-600 text-white rounded px-3 py-1 font-medium cursor-pointer hover:bg-blue-700">
                    Save
                </button> */}
            </div>
        </div>
    )
}

export default ResultCard
