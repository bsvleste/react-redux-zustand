import { Loader2 } from "lucide-react";

export function Loader(){
  return(
    <div className="flex h-full items-center justify-center">
        <Loader2 className="animate-spin h-5 w-5  text-white" />
    </div>
  )
}