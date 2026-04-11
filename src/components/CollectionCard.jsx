import { useDispatch } from "react-redux"
import { collectionReducerActions } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {

    const dispatch = useDispatch();

    const removeFromCollection = (item) => {
        dispatch(collectionReducerActions.removeCollection(item.id));
        dispatch(collectionReducerActions.removedToast())
    }

    return (
        <div className='w-[22vw] h-70 bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-800 hover:border-white/75 transition relative'>
            <a
                className="h-full"
                target="_blank"
                href={item.url}
            >
                {item.type === 'photo'
                    ?
                    <img
                        src={item.src}
                        alt="img"
                        className='w-full h-full object-cover object-center'
                    />
                    :
                    ''
                }

                {item.type === 'video'
                    ?
                    <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        className='w-full h-full object-cover object-center'
                    ></video>
                    :
                    ''
                }

                {item.type === 'gif' ? '' : ''}
            </a>

            <button
                className="bg-blue-600 text-white rounded px-3 py-1 font-medium cursor-pointer hover:bg-blue-700 absolute top-5 right-5 active:scale-95"
                onClick={() => removeFromCollection(item)}
            >
                Remove
            </button>

            <div id="bottom" className="w-full px-4 py-6 absolute bottom-0 flex justify-between items-center gap-2.5">
                <h2 className="text-white text-lg font-semibold capitalize">
                    {item.title}
                </h2>

                {/* <button
                    className="bg-blue-600 text-white rounded px-3 py-1 font-medium cursor-pointer hover:bg-blue-700 absolute top-5 right-5 active:scale-95"
                    onClick={() => console.log('removed')}
                >
                    Remove
                </button> */}
            </div>
        </div>
    )
}

export default CollectionCard
