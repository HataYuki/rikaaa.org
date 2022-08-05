import {useState, useEffect} from 'react'

export const useIsDark = () => {
    const [isDark, setIsDark] = useState(false)
    let darkModeMediaQuery: any = null

    const handleMatchMedia = (event: any) => setIsDark(event.matches)

    useEffect(() => {
        if (darkModeMediaQuery !== null) return

        darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        setIsDark(darkModeMediaQuery.matches)

        darkModeMediaQuery.addEventListener('change',handleMatchMedia)

        return (): void => {
            darkModeMediaQuery.removeEventListener('change',handleMatchMedia)
        }
    })

    return isDark
}

