const { exec, execSync } = require("child_process");
const fs = require("fs");
const jsonfromFile = require("./describeMetadata.json");

let metadataCommand = "sfdx force:mdapi:describemetadata -u bharath.kanagaraj@team.telstra.com.retail.b2ccsbsqi --json";
//let listmetadataCommand = "sfdx force:mdapi:listmetadata -u bharath.kanagaraj@team.telstra.com.retail.b2ccsbsqi -m ";

            let args = process.argv;
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
            //debugger;
            let metadataTypeToMembersMap = {};
            //metadataArray.forEach(element => {
                    
                        let listmetadataCommand = "sfdx force:mdapi:listmetadata -u bharath.kanagaraj@team.telstra.com.retail.sqi77 --json -m ";
                        listmetadataCommand = listmetadataCommand.concat(args[2]);
                        console.log(listmetadataCommand);
                        exec(listmetadataCommand,(error, stdoutMetadata, stderr)=>{
                            fs.appendFileSync('./stdoutMetadata.json', '"'+args[2]+'"'+':'+stdoutMetadata,function(err){
                                // if(stdoutMetadata!==undefined){
                                //     let members = new Array();
                                //     let metadataType;
                                //     const stdoutMetadataFile = require("./examples.json");
                                //         stdoutMetadataFile.forEach(metadata => {
                                //             const HOUR = 1000 * 60 * 60;
                                //             const anHourAgo = Date.now() - HOUR;
                                //             const lastmodifiedDate = new Date(metadata["lastModifiedDate"]);
                                //             const lastmodifiedms =lastmodifiedDate.getTime();
                                //             if(lastmodifiedms > anHourAgo){
                                //                     //debugger;
                                //                     if(metadataTypeToMembersMap[metadata["type"]]) { 
                                //                         var arr = []; arr.push(metadataTypeToMembersMap[metadata["type"]]); 
                                //                         arr.push(metadata["fullName"]); metadataTypeToMembersMap[metadata["type"]]=arr; 
                                //                     } else{ 
                                //                         metadataTypeToMembersMap[metadata["type"]] = metadata["fullName"]; 
                                //                     }
                                //             }
                                //         });
                                //     console.log(metadataTypeToMembersMap);
                                //     //debugger;
                                //     for (const [key, value] of Object.entries(metadataTypeToMembersMap)) {
                                //         fs.appendFileSync('./package-goldenorg.xml','<types>'+"\n"+'<name>'+args[2]+'</name>',function(err){
                                            
                                //         });
                                //         if(Array.isArray(value)){
                                //         value.forEach(metadataMember => {
                                //             fs.appendFileSync('./package-goldenorg.xml','<members>'+metadataMember+"\n"+'</members>',function(err){

                                //             });
                                //         });
                                //     }else{
                                //         fs.appendFileSync('./package-goldenorg.xml','<members>'+value+"\n"+'</members>',function(err){

                                //         });
                                //     }
                                //         fs.appendFileSync('./package-goldenorg.xml','</types>',function(err){
                                            
                                //         });
                                    
                                //       }
                                      
                                      
                                //     // metadataTypeToMembersMap.forEach(member => {
                                //     //     fs.writeFile('./package-goldenorg.xml','<types>'+"\n"+'<members>'+member+"\n"+'<members>'+"\n"+'<types>'+"\n",function(err){
                                            
                                //     //     });
                                //     // });
                                // }
                            });
                            
                        });
                //});
                console.log('File Saved');
    