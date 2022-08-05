export const isUrl = (str:string) =>{
    try {
        new URL(str)
    }catch (e){
        return false
    }
    return true
}