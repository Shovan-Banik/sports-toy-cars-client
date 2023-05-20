import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}- Sports Toy Cars Zone`;
    },[title])
}
export default useTitle;