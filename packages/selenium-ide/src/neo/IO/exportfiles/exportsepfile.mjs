/**
 * file format
 * | click | abbb|
 * | open  | abb |
 */

import browser from "webextension-polyfill";
import {exportRobotFile} from "./exportrobotfile";
import {createBlob} from "../filesystem";

/**
 * export all
 * @param project  side project
 */
export function exportSepFile(project) {

  if (project == null) {
    return;
  }
  let out_string = project.name + "\n";
  out_string+="| root | "+project.url +" |\n"
  for (let testcase of project.tests) {
    out_string += testcase.name + "\n";
    let avg=avgempty(testcase)
    for (let command of testcase.commands) {
      out_string+="| "+command.command+calcEmpty(command.command.length,avg)+" | "+command.target+" | "+command.value+" |";
      if(command.comment && command.comment.length>1){
        out_string+= " #"+command.comment+" |";
      }
      out_string+="\n";
    }
  }
  return out_string;
}

/**
 * for Extention to save as file
 * @param project
 */
export function downloadProjectAsSepFile(project) {
  browser.downloads.download({
    filename: project.name + ".robot",
    url: createBlob("application/json", exportRobotFile(project)),
    saveAs: true,
    conflictAction: "overwrite"
  });
}

let previousFile = null;
export function createBlob(mimeType, data) {
  const blob = new Blob([data], {
    type: "text/plain"
  });
  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (previousFile !== null) {
    window.URL.revokeObjectURL(previousFile);
  }
  previousFile = window.URL.createObjectURL(blob);
  return previousFile;
}


/**
 * calc space number
 * @param testcase
 * @return {number}
 */
function avgempty(testcase) {
  const average = arr => arr.reduce((acc, val) => acc.length + val.length, 0) / arr.length;
  let list=testcase.commands.map((command)=>command.command);
  return Math.round(average(list));
}
function calcEmpty(curr,avg){
  let out="";
  if(curr>avg)
    return "";
  if(curr==avg)
    return "";
  for(let i=0;i<avg-curr;i++){
    out+=" ";
  }
  return out;
}


