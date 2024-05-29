// DynamicDiv.js
import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CodeMirror from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import { langs } from "@uiw/codemirror-extensions-langs";

import { IoIosSettings } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";


const DynamicDiv = ({
  direction,
  btn,
  htmlCode,
  cssCode,
  jsCode,
  onHtmlChange,
  onCssChange,
  onJsChange,
  generateWeb,
}) => {
  return (
    <div className="h-screen">
      <div className="h-full w-full">
        <PanelGroup direction={direction} className=" h-72">
          {btn ? (
            <Panel className="border">
              <iframe
                title="Result"
                srcDoc={generateWeb()}
                sandbox="allow-scripts"
                className="h-full w-full"
              />
            </Panel>
          ) : null}
          {btn ? <PanelResizeHandle className="w-1 bg-blue-500" /> : null}
          <Panel>
            <PanelGroup
              direction={direction === "horizontal" ? "vertical" : "horizontal"}
            >
              <Panel className=" min-w-5 border bg-[#0d1117]">
                <div className="flex items-center justify-between pr-3">
                  <div className="flex w-fit items-center gap-1 border-t-2 border-gray-500 bg-[#333338] px-3 py-2">
                    <svg
                      viewBox="0 0 15 15"
                      className="h-4 w-4"
                      id="icon-file-html"
                    >
                      <rect fill="#FF3C41" width="15" height="15" rx="4"></rect>
                      <path
                        d="M10.97 2.29a.563.563 0 0 0-.495-.29.572.572 0 0 0-.488.277l-5.905 9.86a.565.565 0 0 0-.007.574c.102.18.287.289.495.289a.572.572 0 0 0 .488-.277l5.905-9.86a.565.565 0 0 0 .007-.574"
                        fill="#28282B"
                      ></path>
                    </svg>
                    <h2 className=" text-primary-dark">HTML</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-[#444857] p-2">
                      <IoIosSettings className="text-white" />
                    </div>
                    <div className="rounded bg-[#444857] p-2">
                      <FaAngleDown className="text-white" />
                    </div>
                  </div>
                </div>
                <CodeMirror
                  value={htmlCode}
                  height="800px"
                  theme={githubDark}
                  extensions={[[langs.html()]]}
                  onChange={onHtmlChange}
                  className="bg-red-500"
                ></CodeMirror>
              </Panel>
              <PanelResizeHandle />
              <Panel className=" bg-[#0d1117]">
                <div className="flex items-center justify-between pr-3">
                  <div className="flex w-fit items-center gap-1 border-t-2 border-gray-500 bg-[#333338] px-3 py-2">
                    <svg
                      viewBox="0 0 15 15"
                    //   class="file-type-icon"
                      id="icon-file-css"
                      className="h-4 w-4"
                    >
                      <rect fill="#0EBEFF" width="15" height="15" rx="4"></rect>
                      <path
                        d="M8 8.366l1.845 1.065a.507.507 0 0 0 .686-.181.507.507 0 0 0-.186-.685L8.5 7.5l1.845-1.065a.507.507 0 0 0 .186-.685.507.507 0 0 0-.686-.181L8 6.634v-2.13A.507.507 0 0 0 7.5 4c-.268 0-.5.225-.5.503v2.131L5.155 5.569a.507.507 0 0 0-.686.181.507.507 0 0 0 .186.685L6.5 7.5 4.655 8.565a.507.507 0 0 0-.186.685c.134.232.445.32.686.181L7 8.366v2.13c0 .271.224.504.5.504.268 0 .5-.225.5-.503V8.366z"
                        fill="#282828"
                      ></path>
                    </svg>
                    <h2 className=" text-primary-dark">CSS</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-[#444857] p-2">
                      <IoIosSettings className="text-white" />
                    </div>
                    <div className="rounded bg-[#444857] p-2">
                      <FaAngleDown className="text-white" />
                    </div>
                  </div>
                </div>
                <CodeMirror
                  value={cssCode}
                  height="800px"
                  theme={githubDark}
                  extensions={[[langs.css()]]}
                  onChange={onCssChange}
                  color="#1d1e22"
                ></CodeMirror>
              </Panel>
              <PanelResizeHandle />
              <Panel className="bg-[#0d1117]">
                <div className="flex items-center justify-between pr-3">
                  <div className="flex w-fit items-center gap-1 border-t-2 border-gray-500 bg-[#333338] px-3 py-2">
                    <svg
                      viewBox="0 0 15 15"
                    //   class="file-type-icon"
                      id="icon-file-js"
                      className="w-4 h-4"
                    >
                      <rect fill="#FCD000" width="15" height="15" rx="4"></rect>
                      <path
                        d="M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z"
                        fill="#282828"
                      ></path>
                    </svg>
                    <h2 className=" text-primary-dark">HTML</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-[#444857] p-2">
                      <IoIosSettings className="text-white" />
                    </div>
                    <div className="rounded bg-[#444857] p-2">
                      <FaAngleDown className="text-white" />
                    </div>
                  </div>
                </div>
                <CodeMirror
                  value={jsCode}
                  height="800px"
                  theme={githubDark}
                  extensions={[[langs.javascript()]]}
                  onChange={onJsChange}
                ></CodeMirror>
              </Panel>
            </PanelGroup>
          </Panel>
          {btn ? null : <PanelResizeHandle />}
          {btn ? null : (
            <Panel className="border">
              <iframe
                title="Result"
                srcDoc={generateWeb()}
                sandbox="allow-scripts"
                
                width="100%"
                height="800px"
              />
            </Panel>
          )}
        </PanelGroup>
      </div>
    </div>
  );
};

export default DynamicDiv;
