var term;
jQuery(function($) {
    var id = 1;
    term = $('#terminal').terminal(function(command, term) {
        var commands = command.split(/(\s+)/);

        if (command == 'help') {
            term.echo("available commands are\n    ls - List current directory\n    whoami - Tells you what user you are\n    cat [filename] - Outputs file contents\n    echo - Outputs the input\n");
        } else if (command == 'test'){
            term.push(function(command, term) {
                if (command == 'help') {
                    term.echo('if you type ping it will display pong');
                } else if (command == 'ping') {
                    term.echo('pong');
                } else {
                    term.echo('unknown command ' + command);
                }
            }, {
                prompt: 'test> ',
                name: 'test'
            });
        } else if (command == "uwu" || command == ":3" || command == "owo") {
            term.echo(":3");
        } else if (commands[0] == "echo") {
            term.echo(command.replace(commands[0],''));
        } else if (command == "whoami") {
            term.echo('The Player');
        } else if (command == "the wheel weaves") {
            term.echo('as the wheel wills');
        }  else if (command == "ls") {
            term.echo('about.txt\nsocials.txt\nprojects.txt\n');
        } else if (commands[0] == "cat") {
            var aux;
            if (commands[2] == "about.txt") {
                term.echo("Currently a Computer Engineering student, I like working with computers, build RC airplanes, baking and reading.\nSelf-taught junior developer on C/C++, Java, Javscript, Python, Rust, HTML and CSS. \nThis website is hosted on my own server running on an old laptop.\nFurthermore, Im always looking for new things to learn and experience.");
            } else if (commands[2] == "socials.txt") {
                term.echo("LinkedIn: https://www.linkedin.com/in/jaime-nazar-anchorena-4a3093138/\nGithub: https://github.com/JaimeNA\nYoutube: https://www.youtube.com/@jawey1646\n");
            } else if (commands[2] == "projects.txt") {
                term.echo("Sugar Rocker\nWeb Server\nRC Airplane\nRobot\nSatellites Images\nEmulator\n");
            }  else {
                term.echo("File not found");
            }
            
        } else {
            term.echo("unknow command " + command);
        }
    }, {
        greetings: "Terminal emulator (use 'help' command if needed)"
    });
});
