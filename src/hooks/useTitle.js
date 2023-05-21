import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`Sports Toy Cars Zone | ${title}`;
    },[title])
}
export default useTitle;