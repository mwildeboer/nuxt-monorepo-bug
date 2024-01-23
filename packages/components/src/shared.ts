import { InjectionKey } from 'vue';
import { HelloWorldContext } from './types';

export const HELLO_WORLD_CONTEXT = Symbol() as InjectionKey<HelloWorldContext>;

export const HELLO_WORLD_CONTEXT_DEFAULT: HelloWorldContext = {
    hello: 'world',
};
