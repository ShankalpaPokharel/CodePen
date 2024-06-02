import React, { useState, useEffect } from "react";
import CodeEditorHeader from "../CodeEditorHeader";
import DynamicDiv from "../DynamicDiv";
import { useSelector } from "react-redux";
import {toast} from "react-toastify"
import axios from "axios"
import { useNavigate , useParams} from "react-router-dom";

import {apiUrl} from "../../constant/variables"

export default function CodeEditorPage() {
  const [activeDiv, setActiveDiv] = useState(1);
  const [direction, setDirection] = useState("vertical");
  const [btn, setBtn] = useState(false);
  const [htmlCode, setHtmlCode] = useState("<div>Hello, world!</div>");
  const [cssCode, setCssCode] = useState("body { background-color: #f0f0f0; }");
  const [jsCode, setJsCode] = useState('console.log("Hello, world!");');
  const [layout, setLayout] = useState(1);
  const [projectName, setProjectName] = useState("Untitled");
  const [saveButton,setSaveButton] = useState(true)
  
  const { username, projectId } = useParams();
  console.log("username, projectId",username, projectId)

  const navigate= useNavigate()

  const user = useSelector(state=>state.user.value)

  // 

  const handleScreenSizeChange = () => {
    if (window.innerWidth <= 768) {
      setDirection("vertical");
      setBtn(false);
      setLayout(1);
    }
  };

  useEffect(() => {
    // Initial check for screen size
    handleScreenSizeChange();

    // Add event listener for screen resize
    window.addEventListener("resize", handleScreenSizeChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);
  // console.log(layout);

  const handleButtonClick = (divNumber) => {
    setActiveDiv(divNumber);
    if (divNumber === 1) {
      setDirection("vertical");
      setBtn(false);
      setLayout(1);
    } else if (divNumber === 2) {
      setDirection("horizontal");
      setBtn(false);
      setLayout(2);
    } else if (divNumber === 3) {
      setDirection("horizontal");
      setBtn(true);
      setLayout(3);
    }
  };

  const generateWeb = () => {
    return `
        <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
        </html>
      `;
  };

 

  const fetchProjectData = async (projectId) => {
    try {
      const response = await axios.get(`${apiUrl}/api/user/getProject/${projectId}`, { withCredentials: true });
      if (response.status === 200) {
        console.log("fetch project response data",response.data)
        const projectData = response.data;
        setProjectName(projectData.name);
        setHtmlCode(projectData.code.html);
        setCssCode(projectData.code.css);
        setJsCode(projectData.code.js);
        if(user){
          // console.log("hi........",user.id,projectData.createdBy._id)
          if (user.id !== projectData.createdBy._id){
            setSaveButton(false)
          }
        }
       
      }
      
    } catch (error) {
      console.error('Error fetching project:', error);
    }
  };

  useEffect(() => {
    if (projectId) {
      fetchProjectData(projectId);
    }
  }, [projectId]);

  const handleSave = () =>{
    console.log(apiUrl)
    console.log("project id",projectId)
    console.log("handle save user",user)
    if (!user){
      toast.warn("Please Login to Save")
      return
    }
    if(!projectName){
      toast.error("Please save the project name")
      return
    }
    axios.post(`${apiUrl}/api/user/save`,{projectId,projectName,htmlCode,cssCode,jsCode},{withCredentials: true})
    .then((response)=>{
      
      console.log("response....")
      console.log(response.data)
      if(response.data?.new){
        const res = response.data
        navigate(`/${res.username}/pen/${res.projectId}`);
      }
      if(!response.data.new){
        toast.success(response.data?.msg)
      }
    })
    .catch((error)=>{
      console.log("error..",error)
    })
    
   
  }

  return (
    <div className="flex min-h-screen flex-col">
      <CodeEditorHeader
        projectName={projectName}
        setProjectName={setProjectName}
        onSave={handleSave}
        saveButton = {saveButton}
      />

      {/* <div className="text-green-700">
        <button onClick={() => handleButtonClick(1)}>Button 1</button>
        <button onClick={() => handleButtonClick(2)}>Button 2</button>
        <button onClick={() => handleButtonClick(3)}>Button 3</button>
      </div> */}

      <div className={`flex-1 border-t-[0.5px] border-gray-700`}>
        <DynamicDiv
          layout={layout}
          direction={direction}
          btn={btn}
          htmlCode={htmlCode}
          setHtmlCode={setHtmlCode}
          cssCode={cssCode}
          setCssCode={setCssCode}
          jsCode={jsCode}
          setJsCode={setJsCode}
          onHtmlChange={(val) => setHtmlCode(val)}
          onCssChange={(val) => setCssCode(val)}
          onJsChange={(val) => setJsCode(val)}
          generateWeb={generateWeb}
          
        />
      </div>
    </div>
  );
}
