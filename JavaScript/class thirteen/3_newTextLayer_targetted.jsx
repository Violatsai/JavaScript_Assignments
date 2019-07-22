function createNewDoc(){
    // debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
    // $.level = 0;
    // debugger; // launch debugger on next line

    app.preferences.rulerUnits = Units.INCHES;
    var newDocumentRef = app.documents.add(8.5, 11, 72, "I did this via JavaScript");
}

function createTextLayer(){
//    var strtRulerUnits = app.preferences.rulerUnits;
//    var strtTypeUnits = app.preferences.typeUnits;
    app.preferences.rulerUnits = Units.INCHES;
    app.preferences.typeUnits = TypeUnits.POINTS;

    var docRef = app.documents.getByName("I did this via JavaScript");
//    alert("the docRef is " + docRef);

    // suppress all dialogs
    app.displayDialogs = DialogModes.NO;

    var textColor = new SolidColor;
    textColor.rgb.red = 0;
    textColor.rgb.green = 0;
    textColor.rgb.blue = 255;

    var newTextLayer = docRef.artLayers.add();
    newTextLayer.kind = LayerKind.TEXT;
    newTextLayer.textItem.contents = "Hello, World!";
    newTextLayer.textItem.position = Array(3, 3);
    newTextLayer.textItem.size = 36;
    newTextLayer.textItem.color = textColor;

    var newTextLayer = docRef.artLayers.add();
    newTextLayer.kind = LayerKind.TEXT;
    newTextLayer.textItem.contents = "Not exactly imaginative, but this is a coding class";
    newTextLayer.textItem.position = Array(1, 5);
    newTextLayer.textItem.size = 24;
    var newTextColor = new SolidColor;
    newTextColor.rgb.red = 255;
    newTextColor.rgb.green = 0;
    newTextColor.rgb.blue = 0;
    newTextLayer.textItem.color = newTextColor;
}


// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// in case we double clicked the file
app.bringToFront();

createNewDoc();
createTextLayer();

