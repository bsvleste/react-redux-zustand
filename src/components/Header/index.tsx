import { useAppSelector } from "../../Store"
import { useCurrentLesson } from "../../Store/slices/player"
export function Header(){
   const {currentLesson,currentModule} = useCurrentLesson()
   const isCourseLaoding = useAppSelector(state=>state.player.isLoading)
   // const {currentModule,currentLesson} = useAppSelector((state) => {
  //   const { currentLessonIndex, currentModuleIndex } = state.player;
  //   const currentModule = state.player.course?.modules[currentModuleIndex];
  //   const currentLesson = currentModule?.lessons[currentLessonIndex];

  //   return { currentModule, currentLesson };
  // });
  if(isCourseLaoding){
    return <h1 className="text-2xl font-bold">Carregando....</h1>
  }
  
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">Modulo "{currentModule?.title}"</span>
    </div>          
  )
}