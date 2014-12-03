// construct the specific html table needed to paste into selenium
function createSS(str_arr,config_obj){
    //alert(str_arr[0].length);
    // basic validation: x columns pasted, first row needs to be there
    var finalSeleniumString = '';

    //validate!
    if(!validateStrArr(str_arr,config_obj)){ return false;}

    for(i=1; i < str_arr.length; i++){

        // each page entry is iterated here
        finalSeleniumString += jsSeleniumBuilder.makeCommand('pause','1000','') + '\n';
        finalSeleniumString += jsSeleniumBuilder.makeCommand('click','id=ctl03_BaseSelectionDetail1_BaseButtonAdd','') + '\n';
        finalSeleniumString += jsSeleniumBuilder.makeCommand('pause','1000','') + '\n';
        finalSeleniumString += jsSeleniumBuilder.makeCommand('type','id=ctl03_BaseSelectionDetail1_ctl01_BaseTextBoxDescription',str_arr[i][0]) + '\n';
        finalSeleniumString += jsSeleniumBuilder.makeCommand('type','id=ctl03_BaseSelectionDetail1_ctl01_BaseTextBoxMinutes',str_arr[i][6]) + '\n';
        finalSeleniumString += jsSeleniumBuilder.makeCommand('type','id=ctl03_BaseSelectionDetail1_ctl01_BaseTextBoxSegment',str_arr[i][4]) + '\n';
        finalSeleniumString += jsSeleniumBuilder.makeCommand('click','id=ctl03_BaseSelectionDetail1_BaseButtonSave','') + '\n';

    }
    //console.log(finalSeleniumString);
    return finalSeleniumString;


}

function createSSPreview(str_arr,config_obj){

    var seleniumPreviewTable = '<table class="table table-bordered"><tr><th>Lesson Number/Name</th><th>Segment</th><th>Minutes</th></tr> \n';
    //validate!
    if(!validateStrArr(str_arr,config_obj)){ return false;}
    for(i=1; i < str_arr.length; i++){

        // each page entry is iterated here

        seleniumPreviewTable += '<tr><td>' + str_arr[i][0] + '</td>';
        seleniumPreviewTable += '<td>' + str_arr[i][4] + '</td>';
        seleniumPreviewTable += '<td>' + str_arr[i][6] + '</td></tr>\n';


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
        str_arr[0][2] != config_obj.reqcolnames[2]
        ||
        str_arr[0][3] != config_obj.reqcolnames[3]
        ||
        str_arr[0][4] != config_obj.reqcolnames[4]
        ||
        str_arr[0][5] != config_obj.reqcolnames[5]
        ||
        str_arr[0][6] != config_obj.reqcolnames[6]){
        alert('row with column names required, please');
        return false;
    }  //Resource	Object ID	Contribution	Extra Credit	Term	Honors
    return true;
}
