
var resume = "https://github.com/endothermiic/latex_docs/blob/main/Resume/resume.pdf";
var spotify = "https://open.spotify.com/user/31jv33ofdl44sovqmxgycvurdqwq?si=72edd027a03d4019";
var github = "https://github.com/endothermiic/";
var srccode = "https://github.com/endothermiic/portfolio";
var email = 'mailto:christina.pizzonia@mail.utoronto.ca';
var emailnomail = 'christina [dot] pizzonia [at] mail [dot] utoronto [dot] ca';
var linkedin = "https://www.linkedin.com/in/christina-pizzonia-05ab1a14a/";

help = [
    'email          best place to contact me (warning: opens in new tab)\n' +
    'github         my github profile (warning: opens in new tab)\n' +
    'help           you know what this does\n' +
    'linkedin       connect with me? (warning: opens in new tab)\n' +
    'projects       some cool stuff I\'ve done\n' +
    'resume         display resume (warning: opens in new tab)\n' +
    'skills         languages and software I use often\n' +
    'spotify        some of the music I enjoy (warning: opens in new tab)\n' +
    'src            source code for this site (warning: opens in new tab)\n' +
    'whoami         who is endothermiic, really?'
    // 'reflections         WEEKLY SEMI-RANDOM OBSERVATIONS',
    // 'hidden         IT\'S A SECRET',
]

whoami = "Hi! I'm Christina, and I'm currently a 2nd year computer engineering student at the University of Toronto 🐢.\n" +
    "I'm specializing in control systems and signal processing with a minor in artificial intelligence.";
//^insert rough timelinehere?

projects = [
    "Space Invaders: Worked with a partner to implement the retro arcade game Space Invaders in Verilog; design tested on a DE1-SoC FPGA connected to an external monitor with a VGA adapter.\n" +
    "Autonomous Robot: Designed and programmed an autonomous, line-following robot using Fusion360 and Arduinos to navigate a track using a bang-bang control algorithm.\n" +
    "Sauna Redesign (slides available @ https://docs.google.com/presentation/d/1E1__1gkfL-J-T4yYeGk8QzZPa56Gy8qQq15TEvjyjhc/edit?usp=sharing): Designed a fully off-grid sauna in Rhino/Photoshop for Concord Investments' President David Delaney; Milestones followed a waterfall methodology and were tracked in Microsoft Project.\n" +
    "Manhattan Plots (plots available @ https://my.locuszoom.org/gwas/482189/) : Performed a GWAS to determine single nucleotide polymorphisms influencing ERAP-2 expression in Utah residents with EU ancestry and Yoruba individuals from Nigeria in R with data from the 1000 Genomes project"
] //todo: embed audio, video - more details on projects beyond just resume!

skills = "Languages (>3 years experience): Verilog, C/C++, Python, MATLAB, LaTeX\n" + //TODO: fix math/eqn rendering 
    "Web-Development: HTML, CSS, JavaScript \n" +
    "Frameworks: Tensorflow, PyTorch\n" +
    "Hardware Design: AutoCAD, Altium, Multisim"

$('body').terminal({
    whoami: function () {
        this.echo(whoami);
    },
    email: function () {
        this.echo("Successfully opened draft to email " + emailnomail);
        openLink.call(this, email);
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
    }
}, {

    greetings:
        '               _       _   _                         _ _\n' +
        ' ___ _ __   __| | ___ | |_| |__   ___ _ __ _ __ ___ (_|_) ___ \n' +
        '/ _ \\ \'_ \\ / _` |/ _ \\| __| \'_ \\ / _ \\ \'__| \'_ ` _ \\| | |/ __|\n' +
        '| __/ | | | (_| | (_) | |_| | | |  __/ |  | | | | | | | | (__ \n' +
        '\\___|_| |_|\\__,_|\\___/ \\__|_| |_|\\___|_|  |_| |_| |_|_|_|\\___|\n' +
        ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\n' +
        '\nWelcome to the interactive webpage of endothermiic. For a list of available commands, type \'help\' (case sensitive)'

});


function openLink(link) {
    this.echo("The webpage " + link + " was successfully opened.");
    var linkElement = $('<a>', {
        href: link,
        target: '_blank',
    }).get(0);
    var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    linkElement.dispatchEvent(event);
}
