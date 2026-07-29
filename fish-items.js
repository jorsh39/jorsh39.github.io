const additionalFish = [
  "Rock Porgy", "Striped Beakfish", "Dogtooth Tuna", "Parrotfish", "Japanese Huchen", "Sardine", "Japanese Char", "Walleye", "Japanese Dace", "Moray Eel", "Thamnaconus Modestus", "Elephantnose Fish", "Dolly Varden", "Demon Stinger", "Ocean Halibut", "Cardinal Tetra", "Ocellaris Clownfish", "Marbled Rockfish", "Bluefin Trevally", "Bonito", "Cutthroat Trout", "Pink Salmon", "Flounder", "Filefish", "Brook Trout", "Greater Amberjack", "Yellowfin Tuna", "Multicolorfin Rainbow", "King Salmon", "Silver Salmon", "Black Cod", "Grass Puffer", "Longnose Hawkfish", "Guppy", "Clownfish", "Climatius", "Indo-Pacific Blue Marlin", "Black Porgy", "Pacific Bluefin Tuna", "Smallscale Blackfish", "Cheiracanthus", "Cobia", "Coral Trout", "Mackerel Icefish", "Coalfish", "Bighead Carp", "California Corbina", "Mackerel", "Spanish Mackerel", "Saury", "Sea Bass", "Mahi-mahi", "Coelacanth", "Xiphactinus", "Giant Trevally", "Shortnose Gar", "Black Marlin", "Japanese Whiting", "Chum Salmon", "Alaskan Pollock", "White Sturgeon", "Steelhead", "Mackerel Tuna", "Smallmouth Bass", "Smallmouth Buffalo", "Grass Carp", "Pudgy Cuskeel", "Tarpon", "Giant Squid", "Tigerfish", "Hucho Taimen", "Fat Minnow", "Largehead Hairtail", "Needlefish", "Seahorse", "Emperor Angelfish", "Giant Grouper", "Dunkleosteus", "Chain Pike", "Oriental Butterflyfish", "Football Fish", "Moorish Idol", "Rainbow Runner", "Freshwater Prawn", "Barreleye", "Electric Eel", "Betta", "Giant Snakehead", "Flying Fish", "Dorado", "Japanese Pufferfish", "Trevally", "Nile Perch", "Red Snapper", "Napoleon Fish", "Catfish", "Blue Tang", "Showa Koi", "Shiroutsuri Koi", "Hikarimuji Koi", "Kohaku Koi", "Akamuji Koi", "Tancho Koi", "Royal Angelfish", "Rainbow Trout", "Pacific Herring", "Japanese Bullhead Shark", "Northern Pike", "Purple Queen", "Burbot", "Permit", "Hyneria", "Pacu", "Silver Carp", "Sailfish", "Pennant Coralfish", "Butterfly Fish", "Pink Anemonefish", "Papuan Black Bass", "Barracuda", "Barramundi", "Oilfish", "Porcupine Fish", "Hammerhead Shark", "Peacock Bass", "Bigmouth Buffalo", "Piranha", "Yellowtail Amberjack", "Halibut", "Pirarucu", "Longfin Yellowtail", "Forceps Fish", "Pteraspis", "Crucian Carp", "Brown Trout", "Brown Bullhead", "Platinum Alligator Gar", "Platinum Guppy", "Black Ghost Knifefish", "Black Bullhead", "Ocellated Snakehead", "Japanese Amberjack", "Bluegill", "Payara", "Sockeye Salmon", "Male Sockeye Salmon", "Sockeye Salmon (F)", "Helicoprion", "Sea Robin", "Great White Shark", "Bonefish", "Blotchy Sillago", "Arctic Grayling", "Arabesque Greenling", "Bothriolepis", "Striped Mullet", "Polypterus", "White Perch", "Murray Cod", "Striped Marlin", "Magoi", "Muskie", "Red Sea Bream", "Octopus", "John Dory", "Yellowfin Goby", "Auxis Rochei", "Ocean Sunfish", "N. Pacific Giant Octopus", "Goblin Shark", "Threespot Dascyllus", "Lionfish", "Milkfish", "Swordfish", "Black Sea Bream", "Black Rockfish", "Flapjack Octopus", "Clown Triggerfish", "Japanese Salmon", "Red-bellied Fusilier", "Wels Catfish", "Armored Catfish", "Black Bass", "Snakehead", "Frilled Shark", "King of Herrings", "Rooster Fish", "Lake Trout", "Red Emperor (Adult)", "Red Emperor (Young)", "Redtail Catfish", "Lenok", "Royal Knife Fish", "Rock Bass", "Rolfosteus Canningensis", "Longnose Gar", "Pond Smelt"
];

const imageFileOverrides = {
  "Indo-Pacific Blue Marlin": "Indo Pacific Blue Marlin.png",
  "Mahi-mahi": "Mahi Mahi.png",
  "Pink Anemonefish": "Pink Anemone.png",
  "Sockeye Salmon (F)": "Female Sockeye Salmon.png",
  "Red Sea Bream": "Red Seabream.png",
  "N. Pacific Giant Octopus": "N Pacific Giant Octopus.png",
  "Black Sea Bream": "Black Seabream.png",
  "Red-bellied Fusilier": "Red Bellied Fusilier.png",
  "King of Herrings": "King Of Herrings.png",
  "Red Emperor (Adult)": "Red Emperor Adult.png",
  "Red Emperor (Young)": "Red Emperor Child.png",
  "Royal Knife Fish": "Royal Knifefish.png"
};

const fishList = document.querySelector(".fish-list");
const saveButton = fishList.querySelector('input[type="submit"]');

additionalFish.forEach((fishName, index) => {
  const number = index + 20;
  const item = document.createElement("div");
  const image = document.createElement("img");
  const caught = document.createElement("input");
  const caughtLabel = document.createElement("label");
  const rank = document.createElement("input");
  const rankLabel = document.createElement("label");
  const rankImage = document.createElement("img");

  item.className = "fish-item";
  item.id = `fish-item-${number}`;
  item.dataset.fishName = fishName;

  image.className = "fish-image";
  image.src = `images/${imageFileOverrides[fishName] || `${fishName}.png`}`;
  image.alt = fishName;

  caught.type = "checkbox";
  caught.id = `fish${number}`;
  caughtLabel.htmlFor = caught.id;
  caughtLabel.textContent = fishName;

  rank.type = "checkbox";
  rank.id = `fishs${number}`;
  rankLabel.htmlFor = rank.id;
  rankImage.className = "s-image";
  rankImage.src = "images/*S Rank.png";
  rankImage.alt = "S rank?";
  rankLabel.append(rankImage);

  item.append(image, document.createElement("br"), document.createElement("br"));
  item.append(caught, caughtLabel, rank, rankLabel);
  fishList.insertBefore(item, saveButton);
});
