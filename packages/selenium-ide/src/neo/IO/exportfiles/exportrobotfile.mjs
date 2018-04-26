import browser from "webextension-polyfill";
import {createBlob} from "../filesystem";
/**
 * export as robot text
 * @param project
 * @return {string}
 */
export function exportRobotFile(project) {

  if (project == null) {
    return;
  }
  let out_string = "*** "+project.name + " ****\n";
  out_string+="${root}    "+project.url +"\n"
  for (let testcase of project.tests) {
    out_string += testcase.name + "\n";
    for (let command of testcase.commands) {
      out_string+="    "+command.command+"    "+command.target+"    "+command.value+"\n";
    }
  }
  return out_string;
}

/**
 * for Extenstion save as file
 * @param project
 */
export function downloadProjectAsRobot(project) {
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
