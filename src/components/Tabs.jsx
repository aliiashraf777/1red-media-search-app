import { useDispatch, useSelector } from "react-redux";
import { searchReducerActions, selectActiveTab } from "../redux/features/searchSlice";


const Tabs = () => {
    const tabs = ['photos', 'videos', 'GIF'];

    const dispatch = useDispatch();

    const handleOnClick = (tab) => {
        // console.log('before dispatch')
        dispatch(searchReducerActions.setActiveTab(tab));
        // console.log('after dispatch')
    }

    const activeTab = useSelector(selectActiveTab);

    return (
        <div className='flex gap-5 p-10'>
            {
                tabs.map((tab, idx) => {
                    return (
                        <button
                            key={idx}
                            className={`transition duration-200 px-5 py-2 bg-gray-900 border border-gray-800 rounded uppercase cursor-pointer active:scale-95 hover:border-white/55 ${activeTab === tab ? 'border-white/50' : 'border-gray-800'}`}
                            onClick={() => handleOnClick(tab)}
                        >
                            {tab}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Tabs
