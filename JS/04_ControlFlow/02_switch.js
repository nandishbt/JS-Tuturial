// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = "feb"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        
    case "march":
        console.log("march");
        break;
        
    case "april":
        console.log("april");
        break;
       

    default:
        console.log("default case match");
        break;
} // feb, march

//if we dont add break then all remaining case below it execute until it reaches any break  (except default)