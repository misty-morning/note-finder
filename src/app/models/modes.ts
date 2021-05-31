export enum EMode {
    MAJOR,
    MINOR,
    HARMONIC_MAJOR,
    HARMONIC_MINOR,
    MINOR_PENTATONIC,
    MAJOR_PENTATONIC,
    LYDIAN,
    DORIAN,
    MIXOLYDIAN,
    PHRYGIAN,
    LOCRIAN,
}

interface IMode {
    name: string;
    formula: number[];
}

export type TModes = Record<EMode, IMode>;

export const MODES: TModes = {
    [EMode.MAJOR]: {
        name: 'Мажор',
        formula: [0, 2, 4, 5, 7, 9, 11],
    },
    [EMode.MINOR]: {
        name: 'Минор',
        formula: [0, 2, 3, 5, 7, 8, 10],
    },

    [EMode.HARMONIC_MAJOR]: {
        name: 'Гармонический мажор',
        formula: [0, 2, 4, 5, 7, 8, 11],
    },
    [EMode.HARMONIC_MINOR]: {
        name: 'Гармонический минор',
        formula: [0, 2, 3, 5, 7, 8, 11],
    },

    [EMode.MINOR_PENTATONIC]: {
        name: 'Минорная пентатоника',
        formula: [0, 3, 5, 7, 10],
    },
    [EMode.MAJOR_PENTATONIC]: {
        name: 'Мажорная пентатоника',
        formula: [0, 2, 4, 7, 9],
    },

    [EMode.LYDIAN]: {
        name: 'Лидийский',
        formula: [0, 2, 4, 6, 7, 9, 11],
    },
    [EMode.DORIAN]: {
        name: 'Дорийский',
        formula: [0, 2, 3, 5, 7, 9, 10],
    },
    [EMode.MIXOLYDIAN]: {
        name: 'Миксолидийский',
        formula: [0, 2, 4, 5, 7, 9, 10],
    },
    [EMode.PHRYGIAN]: {
        name: 'Фригийский',
        formula: [0, 1, 3, 5, 7, 8, 10],
    },
    [EMode.LOCRIAN]: {
        name: 'Локрийский',
        formula: [0, 1, 3, 5, 6, 8, 10],
    },
};
