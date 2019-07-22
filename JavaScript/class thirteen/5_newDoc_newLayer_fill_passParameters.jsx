function createNewDoc(){
    // debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
    // $.level = 1;
    // debugger; // launch debugger on next line

    app.preferences.rulerUnits = Units.INCHES;
    var newDocumentRef = app.documents.add(8.5, 11, 72, "Filling a Layer");
    return newDocumentRef;
}

function createNewLayer(myDoc){
    app.preferences.rulerUnits = Units.INCHES;
    app.preferences.typeUnits = TypeUnits.POINTS;

    var docRef = myDoc;

    var layerRef = docRef.artLayers.add();
    layerRef.name = "layer2fill";
    var fillColor = new SolidColor();
    fillColor.rgb.red  = 0;
    fillColor.rgb.green = 255;
    fillColor.rgb.blue = 0;
    app.activeDocument.selection.fill( fillColor );
}


// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// in case we double clicked the file
app.bringToFront();

var targetDoc = createNewDoc();
createNewLayer(targetDoc);

