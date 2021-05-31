export const OCTAVE_LENGTH: number = 12;

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
