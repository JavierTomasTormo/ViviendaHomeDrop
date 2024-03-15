function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
    return new Promise((resolve, reject) => {



        $.ajax({
            url: sUrl,
            type: sType,
            dataType: sTData,
            data: sData
        }).done((data) => {

            // const firstObject = data[0];
            // const firstKey = Object.keys(firstObject)[0];

            // console.log(firstKey, data);

            resolve(data);

        }).fail((jqXHR, textStatus, errorThrown) => {
            reject(errorThrown);
        });
    });
}