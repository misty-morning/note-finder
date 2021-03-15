export enum EMode {
    MAJOR,
    NATURAL_MINOR,
}

interface IMode {
    name: string;
    formula: any;
}

export type TModes = Record<EMode, IMode>;

export const MODES: TModes = {
    [EMode.MAJOR]: {
        name: 'Мажор',
        formula: null,
    },
    [EMode.NATURAL_MINOR]: {
        name: 'Натуральный минор',
        formula: null,
    }
};