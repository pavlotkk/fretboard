const NoteColor = {
    C: "#FF8F8F",
    D: "#FFE342",
    E: "#979EA8",
    F: "#54C45E",
    G: "#6DB1FF",
    A: "#DEDEFF",
    B: "#E08FFF",

    get: function (value) {
        return this[value[0].toUpperCase()]
    }
}

function GetNoteStyle(note) {
    const color = NoteColor.get(note);

    if (note.length === 1) {
        return {
            border: `5px solid ${color}`,
            borderRadius: "50%",
            backgroundColor: color
        }
    } else if (note[1] === "#") {
        return {
            border: `5px solid ${color}`,
            borderRadius: "50%",
        }
    } else if (note[1].toLowerCase() === "b"){
        return {
            border: `5px double ${color}`,
            borderRadius: "50%",
        }
    } else {
        return {}
    }
}


export {NoteColor, GetNoteStyle};