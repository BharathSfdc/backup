const { exec, execSync } = require("child_process");
const fs = require("fs");
const jsonfromFile = require("./describeMetadata.json");
let describeResult = jsonfromFile["result"]["metadataObjects"];
            let metadataArray = new Array();
            describeResult.forEach(result=>{
                if(result["childXmlNames"]!==undefined){
                    result["childXmlNames"].forEach(element => {
                        metadataArray.push(element);
                    });
                }
                    metadataArray.push(result["xmlName"]);
                
                
            });
            fs.writeFileSync('./package-goldenorg.xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+"\n"+'<Package xmlns="http://soap.sforce.com/2006/04/metadata">'+"\n",function(err){

            });
            let loopComplete = false;
            metadataArray.forEach((element,i) => {
                    let cmd = "node goldenOrg.js "+element;
                    console.log(cmd);            
                    exec(cmd,(error, stdoutMetadata, stderr)=>{

                    });
                    if(i == metadataArray.length){
                        loopComplete = true;
                    }
                    
            });
            if(loopComplete){
                fs.readFileSync('./package-goldenorg.xml', (err, data) => {
                    // => null, <data>
                    if(!data.includes('<version>49.0</version></Package>')){
                        fs.appendFileSync('./package-goldenorg.xml','<version>49.0</version></Package>',function(err){
    
                        });
                    }
                  });
                }
            