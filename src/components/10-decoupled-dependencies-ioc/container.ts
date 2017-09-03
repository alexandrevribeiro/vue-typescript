import { Container } from 'inversify'
import { TYPES } from './types'
import UsersService from './users-service'
import HttpClient from './http-client'
import getDecorators from 'inversify-inject-decorators' // Used to provide DI to Vue components

const container = new Container();

container.bind<UsersService>(TYPES.UsersService).to(UsersService)
container.bind<HttpClient>(TYPES.HttpClient).to(HttpClient)

const { lazyInject } = getDecorators(container);

export { container, lazyInject }