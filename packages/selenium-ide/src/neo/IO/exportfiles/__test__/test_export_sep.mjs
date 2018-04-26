//# let {exportSepFile}=require("../exportsepfile","moudle")
import {exportSepFile} from "../exportsepfile";
import {exportRobotFile} from "../exportrobotfile";

let data = {
  "id": "da204e38-8272-4de1-a392-8201f3636d3f",
  "name": "project",
  "url": "https://en.wikipedia.org",
  "tests": [
    {
      "id": "3d805d38-f725-4597-a965-ae78c3b8246e",
      "name": "aa playback",
      "commands": [
        {
          "id": "1ba6605c-2911-4b1a-90e8-e32bbaaab8a7",
          "comment": "Open the wikipedia Legislation article",
          "command": "open",
          "target": "/wiki/Legislation",
          "value": ""
        },
        {
          "id": "859d02d5-18dd-4391-ab6c-b9e0e387f9dd",
          "comment": "",
          "command": "click",
          "target": "link=enacted",
          "value": ""
        },
        {
          "id": "3fff2947-5c79-4d6f-b8f5-b85fd295a598",
          "comment": "",
          "command": "clickAt",
          "target": "link=parliamentary systems",
          "value": ""
        }
      ]
    },
    {
      "id": "06fe307c-ba3e-4ad0-80a8-fd66b66e7876",
      "name": "aab playback",
      "commands": [
        {
          "id": "0b208480-f234-4dc2-9b59-0543d9ff28dc",
          "comment": "",
          "command": "open",
          "target": "/wiki/River_Chater",
          "value": ""
        },
        {
          "id": "f96e7f74-056b-47c4-9251-2d3641fc0a7b",
          "comment": "",
          "command": "clickAt",
          "target": "link=River Welland",
          "value": ""
        },
        {
          "id": "90d1d520-c213-41e7-b354-ee4e9163568f",
          "comment": "",
          "command": "clickAt",
          "target": "link=floods of 1947",
          "value": ""
        },
        {
          "id": "e26039f3-d782-46c5-a2b8-d8cb4fab9cf7",
          "comment": "",
          "command": "clickAt",
          "target": "link=scapegoat",
          "value": ""
        }
      ]
    },
    {
      "id": "a9999e54-0c53-4391-b8c2-848d9ff22acb",
      "name": "aab type",
      "commands": [
        {
          "id": "50a02462-cdab-4f22-8a0e-f9f64772f563",
          "comment": "",
          "command": "open",
          "target": "/wiki/Main_Page",
          "value": ""
        },
        {
          "id": "1e985f9e-cf1e-4a80-9432-889cf0abb338",
          "comment": "",
          "command": "clickAt",
          "target": "id=searchInput",
          "value": ""
        },
        {
          "id": "1243ad40-5406-48e8-9dbb-9003b43f9460",
          "comment": "",
          "command": "type",
          "target": "id=searchInput",
          "value": "Selenium IDE"
        },
        {
          "id": "ef04b283-a159-490e-81b4-51b67db6ad89",
          "comment": "",
          "command": "clickAt",
          "target": "css=.mw-searchSuggest-link:first-child",
          "value": ""
        }
      ]
    }
  ],
  "suites": [
    {
      "id": "bb018ec9-520b-41fd-b0b2-447b1fbaff74",
      "name": "aaa suite",
      "tests": [
        "3d805d38-f725-4597-a965-ae78c3b8246e"
      ]
    },
    {
      "id": "df0aa008-cabf-426f-b2c0-a4445f5ec161",
      "name": "aaab suite",
      "tests": [
        "a9999e54-0c53-4391-b8c2-848d9ff22acb",
        "06fe307c-ba3e-4ad0-80a8-fd66b66e7876"
      ]
    }
  ],
  "urls": [
    "https://en.wikipedia.org"
  ]
};
console.log(exportSepFile(data));
console.log(exportRobotFile(data));

