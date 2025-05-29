export function getAllNotes(req, res){
    res.status(200).send("You fetched all notes");
};

export function createNote(req, res){
    res.status(200).send("You created a new note");
};

export function updateNote(req, res){
    res.status(200).send("You updated the note");
};

export function deleteNote(req, res){
    res.status(200).send("Note deleted successfully");
}