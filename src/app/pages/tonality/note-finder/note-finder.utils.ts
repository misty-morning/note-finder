import { ENote, NOTE_NAMES } from 'src/app/models/notes';

export const getNoteName = (note: ENote, octave: number) => {
    return `${NOTE_NAMES[note]}${octave}`;
}

export const getNotesNames = (notes: ENote[], octave: number) => {
    return notes.map((note: ENote) => getNoteName(note, octave));
}

export const getNotesNamesForSeveralOctaves = (noteNumbers: ENote[], startOctave: number, endOctave: number) => {
    let notes = []
    if (endOctave - startOctave < 0) return notes;

    for (let i = startOctave; i <= endOctave; i++) {
        notes = notes.concat(
            getNotesNames(noteNumbers, i)
        );
    }

    // console.log("result", notes)
    return notes;
}