// construct the specific html table needed to paste into selenium
function createSS(str_arr,config_obj){
    //alert(str_arr[0].length);
    // basic validation: x columns pasted, first row needs to be there
    var finalSeleniumString = '';
    var ignoreHonorsBool = $('#ignore_honors_cbx').prop('checked');

    //validate!
    if(!validateStrArr(str_arr,config_obj)){ return false;}

    for(i=1; i < str_arr.length; i++){

        if(ignoreHonorsBool && str_arr[i][5] == 1){   // bypass record if it's honors and the checkbox to ignore is checked
        } else {
            // each page entry is iterated here
            finalSeleniumString += jsSeleniumBuilder.makeCommand('waitForEditable','id=ctl04_BaseSelectionDetail1_BaseButtonAdd','') + '';
            finalSeleniumString += jsSeleniumBuilder.makeCommand('click','id=ctl04_BaseSelectionDetail1_BaseButtonAdd','') + '\n';
            finalSeleniumString += jsSeleniumBuilder.makeCommand('waitForValue','id=ctl04_BaseSelectionDetail1_ctl01_BaseTextBoxSegment','0') + '\n';
            finalSeleniumString += jsSeleniumBuilder.makeCommand('type','id=ctl04_BaseSelectionDetail1_ctl01_BaseTextBoxDescription',str_arr[i][0]) + '\n';
            finalSeleniumString += jsSeleniumBuilder.makeCommand('type','id=ctl04_BaseSelectionDetail1_ctl01_BaseTextBoxMinutes',str_arr[i][2]) + '\n';
            finalSeleniumString += jsSeleniumBuilder.makeCommand('type','id=ctl04_BaseSelectionDetail1_ctl01_BaseTextBoxSegment',str_arr[i][1]) + '\n';
            finalSeleniumString += jsSeleniumBuilder.makeCommand('click','id=ctl04_BaseSelectionDetail1_BaseButtonSave','') + '\n';
            finalSeleniumString += jsSeleniumBuilder.makeCommand('waitForVisible','id=ctl04_BaseSelectionDetail1_baseValidationSummary','') + '';

        }

    }
    //console.log(finalSeleniumString);
    return finalSeleniumString;


}

function createSSPreview(str_arr,config_obj){

    var seleniumPreviewTable = '<table class="table table-bordered"><tr><th>'+config_obj.reqcolnames[0]+'</th><th>'+config_obj.reqcolnames[1]+'</th><th>'+config_obj.reqcolnames[2]+'</th></tr> \n';
    var ignoreHonorsBool = $('#ignore_honors_cbx').prop('checked');
    //validate!
    if(!validateStrArr(str_arr,config_obj)){ return false;}
    for(i=1; i < str_arr.length; i++){

        console.log(str_arr[i][0]);
        console.log(str_arr[i][1]);
        console.log(str_arr[i][2]);

        console.log('--------------------------');
        // each page entry is iterated here
        if(ignoreHonorsBool && str_arr[i][5] == 1){   // bypass record if it's honors and the checkbox to ignore is checked
        } else {
            seleniumPreviewTable += '<tr><td>' + str_arr[i][0] + '</td>';
            seleniumPreviewTable += '<td>' + str_arr[i][1] + '</td>';
            seleniumPreviewTable += '<td>' + str_arr[i][2] + '</td></tr>\n';
        }

    }
    seleniumPreviewTable += '</table>';

    return seleniumPreviewTable;
}

function validateStrArr(str_arr,config_obj){
    if(str_arr[0].length != config_obj.reqcols){

        alert('expected '+config_obj.reqcols+' columns copied from the Educator Grade Builder Export');
        return false;
    }
    if(  str_arr[0][0] != config_obj.reqcolnames[0]
        ||
        str_arr[0][1] != config_obj.reqcolnames[1]
        ||
        str_arr[0][2] != config_obj.reqcolnames[2]){
        alert('row with column names required, please');
        return false;
    }  //Resource	Object ID	Contribution	Extra Credit	Term	Honors
    return true;
}
