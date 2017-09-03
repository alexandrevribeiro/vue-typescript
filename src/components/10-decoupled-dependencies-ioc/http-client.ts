// --> This class is inside "10-decoupled-dependencies-ioc" directory
// just because is only part of this example (Decouple Dependencies Using IoC 
// Containers in Vue with TypeScript and InversifyJS)

import { injectable } from 'inversify'

@injectable()
export default class HttpClient {

    get(url: string) : Promise<any> {
        return fetch(url).then(data => data.json());
    }
}