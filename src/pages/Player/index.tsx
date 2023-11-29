import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store";
import { loadCourse, useCurrentLesson } from "../../Store/slices/player";
import { MessageCircle} from "lucide-react";
import { Header } from "../../components/Header";
import { Video  } from "../../components/Video";
import { Module } from "../../components/Module";
  export function Player(){
    const dispatch = useAppDispatch()
    const modules = useAppSelector(state=> state.player.course?.modules)
    const {currentLesson} = useCurrentLesson()
    useEffect(()=>{
     if(currentLesson){
       document.title = `Assitindo: ${currentLesson.title}`
     }
    },[currentLesson])
    useEffect(()=>{
        dispatch(loadCourse())
      
    },[])
  return(
    <div className="bg-zinc-950 h-screen w-full text-zinc-100 flex justify-center items-center">
      <div className="flex w-[1008px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
            <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600" >
              <MessageCircle className="w-4 h-4" />
            Deixar feedback
            </button>
        </div>

      <main className="pr-80 relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
        <div className="flex-1">
          <Video/>
        </div>
        <aside className="divide-y-2 divide-zinc-900 scrollbar-thin  scrollbar-track-zinc-900 scrollbar-thumb-zinc-800 overflow-y-scroll w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900">
          {
            modules && modules.map((module,index)=>(
              <Module key={module.id} moduleIndex={index} title={module.title} amountOfLesson={module.lessons.length}  />  
            ))
          }
        </aside>
        </main>
      </div>
    </div>
  )
  }