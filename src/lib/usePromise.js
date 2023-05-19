import { useEffect, useState } from "react";

export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false)
  const [resolve, setResolved] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved)
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return [loading, resolve, error]
}