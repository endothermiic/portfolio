
var resume = "https://github.com/endothermiic/latex_docs/blob/main/Resume/resume.pdf";
var spotify = "https://open.spotify.com/user/31jv33ofdl44sovqmxgycvurdqwq?si=72edd027a03d4019";
var github = "https://github.com/endothermiic/";
var srccode = "https://github.com/endothermiic/surfaces";
var email = 'mailto:christina.pizzonia@mail.utoronto.ca';
var linkedin = "https://www.linkedin.com/in/christina-pizzonia-05ab1a14a/";

help = [
    'email          BEST PLACE TO CONTACT ME\n' +
    'github         MY GITHUB PROFILE (WARNING: OPENS IN NEW TAB)\n' +
    'help           YOU KNOW WHAT THIS DOES\n' +
    'linkedin       CONNECT WITH ME? (WARNING: OPENS IN NEW TAB)\n' +
    'projects       SOME COOL STUFF I\'VE DONE\n' +
    'resume         DISPLAY RESUME\n' +
    'spotify        MUSIC IS MAGIC (WARNING: OPENS IN NEW TAB)\n' +
    'src            SOURCE CODE FOR THIS SITE (WARNING: OPENS IN NEW TAB)\n' +
    'whoami         WHO IS ENDOTHERMIIC, REALLY?\n'
    // 'reflections         WEEKLY SEMI-RANDOM OBSERVATIONS',
    // 'hidden         IT\'S A SECRET',
]

whoami = "Hi! I'm currently a 2nd year computer engineering student at the University of Toronto. ";

$('body').terminal({
    whoami: function () {
        this.echo(whoami);
    },
    help: function () {
        this.echo(help);
    },
    github: function () {
        this.echo("Link successfully opened: " + github);
        var githubLink = $('<a>', {
            href: github,
            target: '_blank',
            text: 'GitHub link' // You can change this text if needed
        }).get(0);

        var event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });

        githubLink.dispatchEvent(event);
    },
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

//orig js
function makeCommand(cmd) {
    switch (cmd.toLowerCase()) {
        case 'email':
            addLine('Opening mailto:<a href="mailto:christina.pizzonia@mail.utoronto.ca">christina.pizzonia@mail.utoronto.ca</a>...', "color2", 80);
            newTab(email);
            break;
        case 'resume':
            addLine("Opening Resume...", "color2", 0);
            newTab(resume);
            break;
        case 'github':
            addLine("Opening GitHub...", "color2", 0);
            newTab(github);
            break;
        case 'spotify':
            addLine("Opening Spotify...", "color2", 0);
            newTab(spotify);
            break;
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}
