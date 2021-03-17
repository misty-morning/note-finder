export enum ENote {
    C,
    CSharp,
    D,
    DSharp,
    E,
    F,
    FSharp,
    G,
    GSharp,
    A,
    ASharp,
    B,
}
// export enum ENote {
//     C = 'C',
//     CSharp = 'C#',
//     D = 'D',
//     DSharp = 'D#',
//     E = 'E',
//     F = 'F',
//     FSharp = 'F#',
//     G = 'G',
//     GSharp = 'G#',
//     A = 'A',
//     ASharp = 'A#',
//     B = 'B',
// }

export type TNoteNames = Record<ENote, string>;

export const NOTE_NAMES: TNoteNames = {
    [ENote.C]: 'C',
    [ENote.CSharp]: 'C#',
    [ENote.D]: 'D',
    [ENote.DSharp]: 'D#',
    [ENote.E]: 'E',
    [ENote.F]: 'F',
    [ENote.FSharp]: 'F#',
    [ENote.G]: 'G',
    [ENote.GSharp]: 'G#',
    [ENote.A]: 'A',
    [ENote.ASharp]: 'A#',
    [ENote.B]: 'B',
}

// interface INote {
//     name: string;
//     latinName: string;
// }

// const NOTES = {
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
//     [ENote.CSharp]: {
//         name: 'C#',
//         latinName: 'До диез'
//     },
//     [ENote.D]: {
//         name: 'D',
//         latinName: 'Рэ'
//     },
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
//     [ENote.C]: {
//         name: 'C',
//         latinName: 'До'
//     },
// }