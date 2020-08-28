const formatDate =(date: string): string => {

    const dateFormated = new Date(date);

    const day = dateFormated.getDate() > 9
        ?  dateFormated.getDate() : `0${dateFormated.getDate()}`

    const mounth = (dateFormated.getMonth() + 1 ) > 9
        ?  dateFormated.getMonth() +1 : `0${dateFormated.getMonth() +1 }`

    const year = dateFormated.getFullYear()
    return `${day}/${mounth}/${year}`;
}

export  default formatDate