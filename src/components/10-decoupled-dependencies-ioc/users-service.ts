// --> This service is inside "10-decoupled-dependencies-ioc" directory
// just because is only part of this example (Decouple Dependencies Using IoC 
// Containers in Vue with TypeScript and InversifyJS)

import HttpClient from './http-client'
import { TYPES } from './types'
import { inject, injectable } from 'inversify'

@injectable()
export default class UsersService {

    // Using "constructor injection" to inject the "HttpClient"
    constructor(@inject(TYPES.HttpClient) private http) { }

    getUsers() : Promise<any> {
        return this.http.get('http://jsonplaceholder.typicode.com/users')
    }
}