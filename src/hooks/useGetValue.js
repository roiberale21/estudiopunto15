import firebaseApp from '../../firebase'
import { useEffect, useRef, useState } from 'react'
import { getDatabase, ref, child, get } from 'firebase/database'


const useGetValue = (path, initialLoad = true) => {
  const [isLoading, setIsLoading] = useState(initialLoad)
  const snapshot = useRef('')
  const error = useRef(null)
  const isEmpty = useRef(false)

  const getValue = async () => {
    try {
      const database = getDatabase(firebaseApp)
      const rootReference = ref(database)
      const dbGet = await get(child(rootReference, path))
      const dbValue = dbGet.val()
      const dbExist = dbGet.exists()

      if (!dbExist) {
        isEmpty.current = true
      }
      snapshot.current = dbValue
    } catch (getError) {
      error.current = getError.message
    }
    setIsLoading(false)
  }

 

  useEffect(() => {
    if (isLoading) {
      getValue()
    }
  }, [isLoading])

  return {
    isLoading,
    isEmpty: isEmpty.current,
    snapshot: snapshot.current,
    error: error.current
  }
}
export default useGetValue;