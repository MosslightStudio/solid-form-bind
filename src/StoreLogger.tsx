import { Component, createEffect } from "solid-js"
import { store } from "./App"

export const Logger: Component = () => {
    createEffect(() => console.log(store.name))
    return <p> I am a logger, I log the store name which is: {store.name}</p>
}
