import { Component, createEffect, createRenderEffect } from 'solid-js';
import { createStore } from 'solid-js/store'
import { Logger } from './StoreLogger'

export const [store, setStore] = createStore({ name: '' })

export const App: Component = () => {


    return <>
        <h1>Solid Forms Binding</h1>
        <input placeholder='hello' use:bind={[store, setStore, 'name']} />
        <Logger />
    </>
};

function bind(el: any, accessor: any) {
    const [s, set, key] = accessor();
    el.addEventListener("input", (e: any) => set(key, e.currentTarget.value));
    createRenderEffect(() => el.value = s[key]);
}
