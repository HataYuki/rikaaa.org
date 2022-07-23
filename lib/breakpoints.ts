import variables from "/styles/variables.module.sass";

interface Breakpoints {
    win_sp?: number
    win_small?: number
    win_medium?: number
    win_big?: number
    win_large?: number
}

export const BREAKPOINTS: Breakpoints | any = {}

for (const [key, value] of Object.entries(variables)) {
    BREAKPOINTS[key] = Number(value)
}
