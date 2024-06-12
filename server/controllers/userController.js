exports.userInfo = (req, res) => {
    res.json({ yourdata: "You got the data from backend 123", user: req.user });
};
exports.getUser = (req, res) => {
    return res.json(req.user);
};

const Project = require("../models/Project");
const User = require("../models/User");

exports.saveProject = async (req, res) => {
    console.log("save project hit")
    try {
        const { projectId, projectName, htmlCode, cssCode, jsCode } = req.body;
        const name = projectName;
        const html = htmlCode;
        const css = cssCode;
        const js = jsCode;
        const userId = req.user.id;
        console.log(projectId, name, html, css, js, userId);
        // return;
        let project;

        if (projectId) {
            // Update existing project
            project = await Project.findOneAndUpdate(
                { _id: projectId, createdBy: userId },
                { name, "code.html": html, "code.css": css, "code.js": js },
                { new: true }
            );
            // Todo
            // if (!project) {
            //     return res
            //         .status(404)
            //         .json({
            //             error: "Project not found or user not authorized",
            //         });
            // }
            res.status(200).json({new:false,msg:"Code Saved!"})

        } else {
            // Create new project
            project = new Project({
                name,
                code: { html, css, js },
                createdBy: userId,
            });
            await project.save();
            res.status(200).json({new:true, message: 'Project saved successfully', projectId: project._id,username: req.user.username });
        }

        // res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getProjectById = async (req, res) => {
    console.log("get project by id hit")
    // return
    try {
        const { projectId } = req.params;
        
        // Find the project by ID
        const project = await Project.findById(projectId).populate('createdBy', 'username');
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        // Send the project data as response
        res.status(200).json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getPinProjects = async(req,res)=>{
    try{
        const userId = req.user.id
        const pinProjects = await Project.find({createdBy:userId}).populate('createdBy', 'username');
        res.json({status:200,pinProjects})
    }
    catch(error){
        console.error('Error fetching project:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.test = (req,res)=>{
    res.send("user test route")
}