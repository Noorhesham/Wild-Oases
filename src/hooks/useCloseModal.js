import {useEffect,useRef} from "react";
export function useCloseModal(close,listenCapturing=true){
    const ref=useRef();
    useEffect(function(){
        function handleClick(e){
          if(ref.current&&!ref.current.contains(e.target)) close();
        }
        document.addEventListener('click',handleClick,listenCapturing);
        document.addEventListener('scroll', close, true);
        return ()=>{document.removeEventListener('click',handleClick,listenCapturing)
        document.removeEventListener('scroll', close, true);
      }

      } ,[close])
      return ref;
}