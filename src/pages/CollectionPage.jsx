import { useDispatch, useSelector } from "react-redux"
import { collectionReducerActions, selectCollectionItems } from "../redux/features/collectionSlice"
import CollectionCard from "../components/CollectionCard";
import Button from '../components/Button';


const CollectionPage = () => {

    const collection = useSelector(selectCollectionItems);

    const dispatch = useDispatch();

    const clearAllCollection = () => {
        dispatch(collectionReducerActions.clearCollection());
    }

    return (
        <div className="overflow-auto px-10 py-6 border-t border-gray-800">
            {
                collection.length > 0 ?
                    <>

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-medium">Your Collection</h2>

                            <Button text='remove all' onClick={clearAllCollection} />
                        </div>
                    </>
                    :
                    <h2 className="text-xl font-medium text-center uppercase underline underline-offset-4 pt-28">
                        Collection is Empty
                    </h2>
            }

            <div
                className='flex justify-start gap-5 flex-wrap w-full px-10x py-10x overflow-hidden min-h-screen bg-gray-950x'
            >
                {collection.map((item, idx) => {
                    return (
                        <CollectionCard key={idx} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default CollectionPage
