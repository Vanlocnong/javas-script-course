//re nhanh switch case

var date = new Date()

var day = date.getDate();


switch(day)
{
    case 15:
    case 18:
    case 19:
        console.log('today not birthday1');
        break;
    // case 19:
    //     console.log('today not birhtday2');
    //     break;
    case 16:
        console.log('today not birthday3');
        // break;
    // case 16:
    //     console.log('Birhtday');
    //     break;
    default:
        console.log('ERROR')
}
