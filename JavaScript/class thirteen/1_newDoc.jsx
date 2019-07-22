function createNewDoc(){
    // debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
    // $.level = 0;
    // debugger; // launch debugger on next line

    var strtRulerUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.INCHES;

    var newDocumentRef = app.documents.add(8.5, 11, 72, "I did this via JavaScript");
    newDocumentRef = null;

    app.preferences.rulerUnits = strtRulerUnits;
}


// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// in case we double clicked the file
app.bringToFront();

createNewDoc();

