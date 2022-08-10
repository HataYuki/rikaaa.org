require('dotenv').config()
const fs = require('fs')
import {getPostIndexList} from "./lib/posts";


const main = async () => {
    const data = await getPostIndexList()
    fs.writeFileSync('data.json', JSON.stringify(data))
    process.exit()

}

main()