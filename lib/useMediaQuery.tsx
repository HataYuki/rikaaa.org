import {useCallback, useEffect, useState} from 'react'

type WidthPrefix = 'min' | 'max'

const createQuery = (width: number, prefix: WidthPrefix) =>
    `(${prefix}-width: ${width}px)`

export const useMediaQuery = (width: number, prefix: WidthPrefix = 'min') => {
    const query = createQuery(width, prefix)
    const [matchQuery, setMatchQuery] = useState<any>({})

    const handleQueryListener = useCallback(() => setMatchQuery(matchMedia(query)), [query])

    useEffect(
        () => {
            if (window) {
                setMatchQuery(matchMedia(query))
                if (matchQuery.matches) {
                    matchQuery?.addEventListener('change', handleQueryListener)
                    return () => matchQuery?.removeEventListener('change', handleQueryListener)
                }
            }
        },
        [handleQueryListener, query]
    )

    return matchQuery.matches
}

// https://zenn.dev/sakottishfold/articles/2e68f9755bf4ca