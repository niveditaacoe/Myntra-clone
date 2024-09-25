import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatus";
// import { fetchStatus } from "../store/fetchStatus";

const FetchItems = () => {
  const fetchStatus = useSelector(store => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(()=> {
    if(fetchStatus.fetchDone) return;
    // setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("https://api.npoint.io/09df5ddc7d2aa17bb809", { signal })
    .then((res) => res.json())
    .then(({default_items}) => {
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());
      
      dispatch(itemsActions.addInitialItems(default_items));
      // console.log("items fetched", default_items);
      // addInitialPosts(data.posts);
      // setFetching(false);
    });

    return() =>{
      // console.log("Cleaning up UseEffect.");
      controller.abort(); 
    };
  }, [fetchStatus,dispatch]);
  
  return<>
  {/* <div>
    Fetch Done: {fetchStatus.fetchDone}
    Currently fetching: {fetchStatus.currentlyFetching}
  </div> */}
  </>
}

export default FetchItems;