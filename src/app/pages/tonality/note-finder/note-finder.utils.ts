import { ENote, NOTE_NAMES } from 'src/app/models/notes';

export const getNoteName = (note: ENote, octave: number) => {
    return `${NOTE_NAMES[note]}${octave}`;
}