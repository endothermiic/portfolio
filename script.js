
var resume = "https://github.com/endothermiic/latex_docs/blob/main/Resume/resume.pdf";
var spotify = "https://open.spotify.com/user/31jv33ofdl44sovqmxgycvurdqwq?si=72edd027a03d4019";
var github = "https://github.com/endothermiic/";
var srccode = "https://github.com/endothermiic/portfolio";
var email = 'mailto:christina.pizzonia@mail.utoronto.ca';
var emailnomail = 'christina [dot] pizzonia [at] mail [dot] utoronto [dot] ca';
var linkedin = "https://www.linkedin.com/in/christina-pizzonia-05ab1a14a/";
// Current working directory
var cwd = "/home/cpizzonia"; // default location

// Mini filesystem
var fs = {
    "/": { type: "dir", children: ["home"] },
    "/home": { type: "dir", children: ["cpizzonia"] },
    "/home/cpizzonia": { type: "dir", children: ["projects", "github", "linkedin", "resume", "src", "email"] },

    // Projects directory
    "/home/cpizzonia/projects": { type: "dir", children: ["space_invaders", "autonomous_robot", "sauna_redesign", "manhattan_plots"] },

    // Project files
    "/home/cpizzonia/projects/space_invaders": { type: "file", command: () => window.open("https://github.com/endothermiic/space_invaders", "_blank") },
    "/home/cpizzonia/projects/autonomous_robot": { type: "file", command: () => window.open("https://github.com/endothermiic/autonomous_robot", "_blank") },
    "/home/cpizzonia/projects/sauna_redesign": { type: "file", command: () => window.open("https://docs.google.com/presentation/d/1E1__1gkfL-J-T4yYeGk8QzZPa56Gy8qQq15TEvjyjhc/edit?usp=sharing", "_blank") },
    "/home/cpizzonia/projects/manhattan_plots": { type: "file", command: () => window.open("https://my.locuszoom.org/gwas/482189/", "_blank") },

    // Other links to open
    "/home/cpizzonia/github": {
        type: "file",
        command: function (term) {
            openLink(term, github, "github");
        }
    },
    "/home/cpizzonia/linkedin": {
        type: "file",
        command: function (term) {
            openLink(term, linkedin, "linkedin");
        }
    },
    "/home/cpizzonia/resume": {
        type: "file",
        command: function (term) {
            openLink(term, resume, "resume");
        }
    },
    "/home/cpizzonia/email": {
        type: "file",
        command: function (term) {
            openLink(term, email, "email");
        }
    }

    // "/home/cpizzonia/github": { type: "file", command: () => openLink(github) },
    // "/home/cpizzonia/linkedin": { type: "file", command: () => openLink(linkedin) },
    // "/home/cpizzonia/resume": { type: "file", command: () => openLink(resume) },
    // "/home/cpizzonia/src": { type: "file", command: () => openLink(srccode) },
    // "/home/cpizzonia/email": { type: "file", command: () => window.open(email, "_blank") }
};


help = [
    'email          best place to contact me (warning: opens in new tab)\n' +
    'github         my github profile (warning: opens in new tab)\n' +
    'help           you know what this does\n' +
    'linkedin       connect with me? (warning: opens in new tab)\n' +
    'projects       some cool stuff I\'ve done\n' +
    'resume         display resume (warning: opens in new tab)\n' +
    'skills         languages and software I use often\n' +
    'src            source code for this site (warning: opens in new tab)\n' +
    'whoami         who is endothermiic, really?'
    // 'reflections         WEEKLY SEMI-RANDOM OBSERVATIONS',
    // 'hidden         IT\'S A SECRET',
]

var whoami = "Hello! I'm Christina. I'm currently a 4th electrical engineering student at " + '<a href="https://www.utoronto.ca/" target="_blank">UofT</a>.<br>' +
    "I am someone who enjoys learning all kinds of things, which has lent itself to a diverse portfolio of projects and work experiences." +
    " Most recently, I have worked as a digital design engineer at Cadence Design Systems, working on high-speed SerDes PCIe PHY, and served as Editor-in-Chief of " +
    '<a href="https://cannon.skule.ca" target="_blank">The Cannon</a>, the official magazine of the Engineering Society.' +
    ' I have taken courses in RTL design, computer architecture and digital signal processing, but am also interested in power systems. I am currently in the process of completing a capstone project centred on optimizing scheduling for EV charging in MATLAB.\n';
//^insert rough timelinehere?

projects = [ //also - menu for proejcts? ls type with each project getting its own subfolder?
    "Space Invaders: Worked with a partner to implement the retro arcade game Space Invaders in Verilog; design tested on a DE1-SoC FPGA connected to an external monitor with a VGA adapter.\n" +
    "Autonomous Robot: Designed and programmed an autonomous, line-following robot using Fusion360 and Arduinos to navigate a track using a bang-bang control algorithm.\n" +
    "Sauna Redesign (slides available @ https://docs.google.com/presentation/d/1E1__1gkfL-J-T4yYeGk8QzZPa56Gy8qQq15TEvjyjhc/edit?usp=sharing): Designed a fully off-grid sauna in Rhino/Photoshop for Concord Investments' President David Delaney; Milestones followed a waterfall methodology and were tracked in Microsoft Project.\n" +
    "Manhattan Plots (plots available @ https://my.locuszoom.org/gwas/482189/) : Performed a GWAS to determine single nucleotide polymorphisms influencing ERAP-2 expression in Utah residents with EU ancestry and Yoruba individuals from Nigeria in R with data from the 1000 Genomes project"
] //todo: embed audio, video - more details on projects beyond just resume!

skills = "Low-Level Languages: Verilog, C/C++, ARM Assembly \n" +
    "Data Analytics & ML: Python (inc. TensorFlow, Scikit-learn), MATLAB, R\n" +
    "Web Development: HTML, CSS, JavaScript\n" +
    "Tools: LaTeX, Microsoft Office, Git, VSCode, AutoCAD, Multisim/LTSpice"

$('body').terminal({
    whoami: function () {
        this.echo(whoami);
    },
    //temporary function to test image insertion; going to update projects over the next few weeks
    mpv: function () {
        this.echo($('<img src="images/front.png" width="200" ></img>'));
        this.echo($('<a href="https://www.utoronto.ca/">UofT</a>'));
    },
    pwd: function () {
        this.echo(cwd);
    },
    email: function () {
        this.echo("Successfully opened draft to email " + emailnomail);
        var linkElement = $('<a>', {
            href: email,
            target: '_blank',
        }).get(0);
        var event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        linkElement.dispatchEvent(event);
    },
    whoami: function () {
        this.echo(whoami, { raw: true }); // raw:true renders HTML
    },
    github: function () {
        openLink.call(this, github);
    },
    help: function () {
        this.echo(help);
    },
    linkedin: function () {
        openLink.call(this, linkedin);
    },
    projects: function () {
        this.echo(projects);
    },
    resume: function () {
        openLink.call(this, resume); //embed pdf into terminal / translate to ascii
    },
    skills: function () {
        this.echo(skills);
    },
    spotify: function () {
        openLink.call(this, spotify);
    },
    src: function () {
        openLink.call(this, srccode);
    },
    open: function (file) {
        if (!file) return this.error("open: missing file argument");
        var path = cwd === "/" ? "/" + file : cwd + "/" + file;
        if (fs[path] && fs[path].type === "file") {
            fs[path].command(this); // <-- THIS passes the terminal
        } else {
            this.error("open: " + file + ": No such file");
        }
    },
    ls: function () {
        var dir = fs[cwd];
        if (!dir || dir.type !== "dir") {
            this.error("ls: cannot access '" + cwd + "': Not a directory");
            return;
        }
        // list children with styling
        var list = dir.children.map(child => {
            var path = cwd === "/" ? "/" + child : cwd + "/" + child;
            var type = fs[path]?.type;
            if (type === "dir") return child + "/";
            else return child; // executables
        });
        this.echo(list.join("  "));
    },
    cd: function (path) {
        if (path === "..") {
            if (cwd !== "/") {
                cwd = cwd.split("/").slice(0, -1).join("/");
                if (cwd === "") cwd = "/";
            }
            return;
        }
        var newPath = cwd === "/" ? "/" + path : cwd + "/" + path;
        if (fs[newPath] && fs[newPath].type === "dir") {
            cwd = newPath;
        } else {
            this.error("cd: " + path + ": No such directory");
        }
    }
}, {
    prompt: function () { return 'cpizzonia@portfolio:: ' + cwd + ' > '; },
    greetings:


        '               _       _   _                         _ _\n' +
        ' ___ _ __   __| | ___ | |_| |__   ___ _ __ _ __ ___ (_|_) ___ \n' +
        '/ _ \\ \'_ \\ / _` |/ _ \\| __| \'_ \\ / _ \\ \'__| \'_ ` _ \\| | |/ __|\n' +
        '| __/ | | | (_| | (_) | |_| | | |  __/ |  | | | | | | | | (__ \n' +
        '\\___|_| |_|\\__,_|\\___/ \\__|_| |_|\\___|_|  |_| |_| |_|_|_|\\___|\n' +
        ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\n' +
        '\nWelcome to the interactive webpage of endothermiic. For a list of available commands, type \'help\' (case sensitive). NOTE: SITE IS CURRENTLY IN PROGRESS, SOME SECTIONS ARE INCOMPLETE.'

});


function openLink(term, link, label) {
    term.echo("successfully opened " + label);
    var linkElement = $('<a>', { href: link, target: '_blank' }).get(0);
    var event = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    linkElement.dispatchEvent(event);
}
