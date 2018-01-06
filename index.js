

var nodeExcel  = require('excel-export');
var util = require('util');

module.exports = {

    exportXls : function(headers,data,sheetsname){

        if(typeof sheetsname === 'undefined'){
            sheetsname = [];
            data.forEach( (d,i)=>{
                sheetsname.push(`sheet_${i}`);
            })
        }

        if(util.isArray( sheetsname ) === false){
            throw new Error('sheetsname should be array')
        }

        if(util.isArray( headers) === false){
            throw new Error('headers should be array')
        }

        if(util.isArray( data) === false){
            throw new Error('data should be array')
        }

        var confs = [];
        headers.forEach( (h,i)=>{
            confs.push(parseObj(h,data[i]));
        })        
        
        sheetsname.forEach( (sh,i)=>{
            confs[i].name = sh
        })
        return nodeExcel.execute(confs);
    }

}

function parseObj(headers, sheetdata){
        
    var conf = {};
    conf.cols = [];
    conf.rows = [];
    conf.cols = headers.map( hd => {
        return {
            caption:hd,
            type:'string'                    
        }
    })

    sheetdata.forEach( entry =>{

        var row = [];
        Object.keys(entry).forEach( k=>{
            if(typeof entry[k] === 'undefined'){
                row.push('');
            }else if(util.isArray(entry[k])){
                row.push(entry[k].join(';'));
            }else{
                row.push(entry[k]);
            }
        })
        conf.rows.push(row); 
    })

    return conf;
}