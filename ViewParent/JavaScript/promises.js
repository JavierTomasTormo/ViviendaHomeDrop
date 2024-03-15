function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
//return false;
    return new Promise((resolve, reject) => {



        $.ajax({
            url: sUrl,
            type: sType,
            dataType: sTData,
            data: sData
        }).done((data) => {

            console.log(data);

            resolve(data);


//return false;

        }).fail((jqXHR, textStatus, errorThrown) => {
            reject(errorThrown);
        });
    });
}