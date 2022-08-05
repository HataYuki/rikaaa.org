import {useState, useEffect} from 'react'

let memo: boolean | null = null;

export const useIsDark = () => {
    const [isDark, setIsDark] = useState((memo === null) ? false : memo)
    let darkModeMediaQuery: any = null

    const handleMatchMedia = (event: any) => {
        memo = event.matches
        setIsDark(event.matches)
    }

    useEffect(() => {
        if (darkModeMediaQuery !== null) return

        darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        memo = darkModeMediaQuery.matches
        setIsDark(darkModeMediaQuery.matches)


        darkModeMediaQuery.addEventListener('change', handleMatchMedia)

        return (): void => {
            darkModeMediaQuery.removeEventListener('change', handleMatchMedia)
        }
    })

    return isDark
}

