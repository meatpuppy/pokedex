interface SpritesObject {
    front_default: string,
}

export interface PokemonCardElements {
    name:string,
    sprites: SpritesObject,
    id: number,
    pokemon:{url:string}
}