import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useEffect } from "react";
import { searchReducerActions } from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";


const ResultGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.searchReducer);

    const dispatch = useDispatch();

    useEffect(() => {

        // if (!query) return (<h1>Search media...</h1>);
        if (!query) return;

        const getData = async () => {
            try {

                dispatch(searchReducerActions.setLoading());

                let data = [];

                if (activeTab === 'photos') {
                    let response = await fetchPhotos(query);
                    data = response.results.map((item, idx) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }))
                }
                if (activeTab === 'videos') {
                    let response = await fetchVideos(query);
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }))
                }

                // console.log(data);
                dispatch(searchReducerActions.setResults(data))
            }
            catch (err) {
                dispatch(searchReducerActions.setError(err.message))
            }
        }

        getData();
    }, [query, activeTab])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className="flex justify-between gap-5 flex-wrap w-full px-10 overflow-auto borderx border-green-500x">
            {results.map((result, idx) => {
                return (
                    <div key={idx}> 
                            <ResultCard result={result} />
                    </div>
                )
            })}
        </div>
    )
}

export default ResultGrid
