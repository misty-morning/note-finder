export enum EMode {
    MAJOR,
    NATURAL_MINOR,
    HARMONIC_MINOR,
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
    [EMode.NATURAL_MINOR]: {
        name: 'Натуральный минор',
        formula: [0, 2, 3, 5, 7, 8, 10],
    },
    [EMode.HARMONIC_MINOR]: {
        name: 'Гармонический минор',
        formula: [0, 2, 3, 5, 7, 8, 11],
    },
};
