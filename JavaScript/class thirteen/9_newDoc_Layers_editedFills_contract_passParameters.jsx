function createNewDoc(){
    // debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
    // $.level = 1;
    // debugger; // launch debugger on next line

    app.preferences.rulerUnits = Units.INCHES;
    var newDocumentRef = app.documents.add(8.5, 11, 72, "Filling a Layer");
    return newDocumentRef;
}

function createNewLayer(myDoc,myLayerName,myColor){
    app.preferences.rulerUnits = Units.INCHES;
    app.preferences.typeUnits = TypeUnits.POINTS;

    var docRef = myDoc;

    var layerRef = docRef.artLayers.add();
    layerRef.name = myLayerName;
    app.activeDocument.selection.fill( myColor );
}

function trimLayer(myDoc,myLayerName,myAmount){
    app.preferences.rulerUnits = Units.POINTS;
    var docRef = myDoc;
    var layerRef = docRef.artLayers.getByName(myLayerName);
    
    app.activeDocument.activeLayer = layerRef;  
    
    app.activeDocument.selection.selectAll();
    var myEdges = app.activeDocument.selection.bounds;
    alert(myEdges);
    // var coordinates = myEdges.split(" pt,");
    // alert(coordinates);
    alert(myEdges[0]);
    alert(myEdges[1]);
    alert(myEdges[2]);
    alert(myEdges[3]);
    // app.activeDocument.selection.contract(new UnitValue (100, "px"));
    // yes, this should work, but it doesn't.  Why?
    // It's because of how PS defines selectAll.
    // It's the WHOLE layer.  So infinity - 100 is still infinity!
    app.activeDocument.selection.clear();    
}


// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// in case we double clicked the file
app.bringToFront();

var docOne = createNewDoc();
var fillColor = new SolidColor();
fillColor.rgb.red  = 0;
fillColor.rgb.green = 255;
fillColor.rgb.blue = 0;
createNewLayer(docOne,"fill_layer",fillColor);

fillColor = new SolidColor();
fillColor.rgb.red  = 255;
fillColor.rgb.green = 0;
fillColor.rgb.blue = 255;
createNewLayer(docOne,"fill_partLayer",fillColor);

trimLayer(docOne,"fill_partLayer");

