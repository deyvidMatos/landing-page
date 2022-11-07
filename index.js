import { projects } from "./projectsArray.js";
import { toRender } from "./render.js"

window.addEventListener('DOMContentLoaded', function(){
    toRender(projects)
});

toRender()