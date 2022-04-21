export interface DetailsElements {
    name: string,
    abilities: Array<{ ability: { name: string } }>,
    moves: Array<{ move: { name: string, url: string } }>,
    sprites: { front_default: string , front_shiny: string },
    stats: Array<{ base_stat: number, stat: { name: string }}>,
    types: Array<{ type: { name: PokemonType } }>,
}

type PokemonType = "bug"|"dark"|"dragon"|"electric"|"fairy"|"fighting"|"fire"|"flying"|"ghost"|"grass"|"ground"|"ice"|"normal"|"poison"|"psychic"|"rock"|"steel"|"water";