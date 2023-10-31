var skylanders = [
    {name: "Whirlwind", element: "Air", catchphrase: "Twists of Fury!", imageUrl: "whirlwind.png"},
    {name: "Lightning Rod", element: "Air", catchphrase: "One Strike and You're Out!", imageUrl: "lightningrod.png"},
    {name: "Sonic Boom", element: "Air", catchphrase: "Full Scream Ahead!", imageUrl: "sonicboom.png"},
    {name: "Warnado", element: "Air", catchphrase: "For the Wind!", imageUrl: "warnado.png"},
    {name: "Terrafin", element: "Earth", catchphrase: "It's Feeding Time!", imageUrl: "terrafin.png"},
    {name: "Prism Break", element: "Earth", catchphrase: "The Beam is Supreme!", imageUrl: "prismbreak.png"},
    {name: "Dino-Rang", element: "Earth", catchphrase: "Come 'Rang or Shine!", imageUrl: "dinorang.png"},
    {name: "Bash", element: "Earth", catchphrase: "Rock and Roll!", imageUrl: "bash.png"},
    {name: "Eruptor", element: "Fire", catchphrase: "Born to Burn!", imageUrl: "eruptor.png"},
    {name: "Flameslinger", element: "Fire", catchphrase: "Let the Flames Begin!", imageUrl: "flameslinger.png"},
    {name: "Ignitor", element: "Fire", catchphrase: "Slash and Burn!", imageUrl: "ignitor.png"},
    {name: "Sunburn", element: "Fire", catchphrase: "Roast N' Toast!", imageUrl: "sunburn.webp"},
    {name: "Zook", element: "Life", catchphrase: "Locked and Loaded!", imageUrl: "zook.webp"},
    {name: "Stump Smash", element: "Life", catchphrase: "Drop The Hammer!", imageUrl: "stumpsmash.webp"},
    {name: "Stealth Elf", element: "Life", catchphrase: "Silent but Deadly!", imageUrl: "stealthelf.webp"},
    {name: "Camo", element: "Life", catchphrase: "Fruit Punch!", imageUrl: "camo.webp"},
    {name: "Double Trouble", element: "Magic", catchphrase: "Boom Shock-A-Laka!", imageUrl: "doubletrouble.webp"},
    {name: "Spyro", element: "Magic", catchphrase: "All Fired Up!", imageUrl: "spyro.webp"},
    {name: "Voodood", element: "Magic", catchphrase: "Axe First, Questions Later!", imageUrl: "voodood.webp"},
    {name: "Wrecking Ball", element: "Magic", catchphrase: "Wreck-N-Roll!", imageUrl: "wreckingball.webp"},
    {name: "Boomer", element: "Tech", catchphrase: "Bring the Boom!", imageUrl: "boomer.webp"},
    {name: "Drill Sergeant", element: "Tech", catchphrase: "Licensed to Drill!", imageUrl: "drillsergeant.webp"},
    {name: "Drobot", element: "Tech", catchphrase: "Blink and Destroy!", imageUrl: "drobot.webp"},
    {name: "Trigger Happy", element: "Tech", catchphrase: "No Gold, No Glory!", imageUrl: "triggerhappy.webp"},

];

var randomSkylander = skylanders[Math.floor(Math.random() * skylanders.length)];
var attempts = 0;

function checkGuess() {
    var guess = document.getElementById('guessInput').value;
    var result = document.getElementById('result');
    
    if(guess.toLowerCase() === randomSkylander.name.toLowerCase()) {
        result.textContent = "Correct! The Skylander was " + randomSkylander.name;
        displaySkylanderImage(randomSkylander);
    } else {
        attempts++;
        result.textContent = "Incorrect. Try again!";
        
        if(attempts >= 2) {
            result.textContent += " Hint: The Skylander's catchphrase is '" + randomSkylander.catchphrase + "'.";
            
            if(attempts >= 4) {
                result.textContent += " Another hint: The Skylander's element is " + randomSkylander.element + ".";
            }
            
            if(attempts >= 6) {
                result.textContent += " Final hint: The Skylander's name starts with '" + randomSkylander.name.charAt(0) + "'.";
            }
        }
    }
}

function displaySkylanderImage(skylander) {
    var table = document.getElementById('skylanderTable');
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    var img = document.createElement('img');
    img.src = skylander.imageUrl;
    cell.appendChild(img);
}