//re nhanh switch case

var date = new Date()

var day = date.getDate();


switch(day)
{
    case 15:
    case 17:
    case 22:
        console.log('today not birthday');
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
