
export const month_string = (month) => {
    let month_st = "";
    switch (month) {
        case 0:
            month_st = "Enero";
            break;
        case 1:
            month_st = "Febrero";
            break;
        case 2:
            month_st = "Marzo";
            break;
        case 3:
            month_st = "Abril";
            break;
        case 4:
            month_st = "Mayo";
            break;
        case 5:
            month_st = "Junio";
            break;
        case 6:
            month_st = "Julio";
            break;
        case 7:
            month_st = "Agosto";
            break;
        case 8:
            month_st = "Septiembre";
            break;
        case 9:
            month_st = "Octubre";
            break;
        case 10:
            month_st = "Noviembre";
            break;
        case 11:
            month_st = "Diciembre";
            break;
        default:
            break;
    }

    return month_st;
}