import fs from 'fs';


export interface SaveFileUseCase {
    execute: (options: Options) => boolean
}


export interface Options {
    fileContent: string
    fileDestination?: string
    fileName?: string
}

export class SaveFile implements SaveFileUseCase {

    constructor(){
        
    }

    execute({
        fileContent, 
        fileDestination: fileDestionation = 'outputs', 
        fileName = 'table'
    }: Options): boolean {
        
        try {
            fs.mkdirSync(fileDestionation, {recursive: true})
            fs.writeFileSync(`${fileDestionation}/${fileName}.txt`, fileContent)
            return true
        } catch (error) {
            console.error(error)
            return false;
        }
        

    }


}