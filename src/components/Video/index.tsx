import Player from "react-player";
import { next, useCurrentLesson } from "../../Store/slices/player";
import { useAppDispatch, useAppSelector } from "../../Store";
import { Loader } from "../Loader";

export function Video(){
  const isCourseLaoding = useAppSelector(state=>state.player.isLoading)
  const dispatch = useAppDispatch()
  const {currentLesson} = useCurrentLesson()
  function handlePlayNext(){
    dispatch(next())
  }

  return(
    <div className="w-full bg-zinc-950 aspect-video">
    {isCourseLaoding ? (
        <Loader/>
      
    ):(
      <Player  
      width="100%"
      height="100%"
      controls
      playing
      url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
      onEnded={handlePlayNext}
    />
    )}
    
  </div>
  )
}