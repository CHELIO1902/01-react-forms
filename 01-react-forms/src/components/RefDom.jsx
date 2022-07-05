import { useRef, useEffect } from 'react'

const RefDom = () => {
    const inputRef = useRef()

    useEffect(() => {
      console.log(inputRef.current);
      inputRef.current.focus()
    },[])
    

  return (
    <>
        <input ref={inputRef} type='text' />
    </>
  )
}

export default RefDom