function lookup(destination, travelDay){
    if (destination == "Tokyo" && travelDay == 2){
        return "MAS 304©Tuesday©15:30©6:30©$650.00";
    }else if (destination == "Tokyo" && travelDay == 1){
        return "MAS 762©Monday©14:30©05:30©$600.00";
    }else if (destination == "London" && travelDay == 2){
        return "MAS 975©Tuesday©20:00©14:00©$500.00";
    }else if (destination == "London" && travelDay == 0){
        return "MAS 555©Sunday©12:00©12:00©$625.00";
        }
}