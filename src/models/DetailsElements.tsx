export interface DetailsElements {
    name: string,
    abilities: Array<{ ability: { name: string } }>,
    moves: Array<{ move: { name: string } }>,
    sprites: { front_default: string , front_shiny: string },
    stats: Array<{ base_stat: number, stat: { name: string }}>,
    types: Array<{ type: { name: string } }>,
}