import { Box, Heading, Text, Image } from "@chakra-ui/react";
import woodImage from "../assets/Images/wood.png";
import React from "react";

// Interface of Cicilization Data
interface CivilizationData {
  History: string;
  Characteristics: string;
  CivilizationBonus: string;
  RoyalGuardUnits: string;
  UniqueUnits: string;
  UniqueBuildings?: string;
  UniqueResourses?: string;
  CultureBonus?: string;
  Wonders?: string;
  AgeUpAlliances?: string;
  Ceremonies?: string;
}

// Object Generator
const generateCivilizationData = (
  History: string,
  Characteristics: string,
  CivilizationBonus: string,
  RoyalGuardUnits: string,
  UniqueUnits: string,
  UniqueBuildings?: string, // ? : Not necessery parameter
  UniqueResourses?: string,
  CultureBonus?: string,
  Wonders?: string,
  AgeUpAlliances?: string,
  Ceremonies?: string
): CivilizationData => ({
  History,
  Characteristics,
  CivilizationBonus,
  RoyalGuardUnits,
  UniqueUnits,
  UniqueBuildings,
  UniqueResourses,
  CultureBonus,
  Wonders,
  AgeUpAlliances,
  Ceremonies,
});

// Civ Data
const civilizationData: Record<string, CivilizationData> = {
  British: generateCivilizationData(
    "In the New World, they were one of the most powerful colonizers, defeating multiple European powers. They eventually established thirteen colonies, which later revolted against the British Empire to form the United States of America",
    "The British civilization has a strong focus on economy and naval power",
    "Manor spawns a settler when built",
    "Musketeer (Redcoat), Hussar (King's Life Guard)",
    "Longbowman, Rocket",
    "Manor House"
  ),
  Dutch: generateCivilizationData(
    "Replacing the Spanish as the wealthiest nation in the 18th century, the Dutch were a key proponent in managing the resources and profits gained from colonial North and South America",
    "The Dutch civilization thrives as an economic powerhouse with a focus on trade, while also maintaining a strong naval presence",
    "Trains Merchants, unique villagers that cost coin instead of food and have lower train limit, but gather coin 15% faster. Begins with an Envoy",
    "Halberdier (Stadswacht) and Ruyter (Carabineer)",
    "Merchant, Envoy, Ruyter, Fluyt",
    "Can build Banks to automatically produce coin"
  ),
  French: generateCivilizationData(
    "Descendants of the Franks who inhabited regions in France. They held large areas in the New World until the late 1700s. They famously supported the American revolution after the Battle of Saratoga in 1777",
    "The French civilization is known for its strong defensive playstyle and powerful artillery",
    "Begins with a Native Scout. Trains Coureurs des Bois instead of Settlers",
    "Skirmisher (Voltigeurs), Cuirassier (Gendarmes)",
    "Coureurs des Bois, Cuirassier",
    "None"
  ),
  Spanish: generateCivilizationData(
    "One of the greatest colonizers of North and South America was known for having acquired great wealth from the colonies during the 17th century. While Spain focused primarily on South America, developments in Europe often entangled it in the affairs of other colonizing nations",
    "The Spanish civilization is known for its strong military presence and powerful gunpowder units",
    "Faster shipments from home city/n Trains 20% faster. Unique units receive a 15% hit point bonus. Begins with a Ship-of-the-Line",
    "Pikeman (Tercios), Rodelero (Espadachins), Lancer (Garrochistas)",
    "War Dog, Missionary, Rodelero, Lancer",
    "Can build Missions that provide various bonuses"
  ),
  Portuguese: generateCivilizationData(
    "Portuguese Empire was a global empire originating from the European nation of Portugal that possessed multiple overseas colonies. In the New World, the Portuguese controlled a large amount of land in the eastern parts of South America until 1822 which is now known as Brazil",
    "The Portuguese civilization has an Economic versatility, naval dominance and Map control with their free Town Halls",
    "Receives a free Covered Wagon with every Age and starts with 7 Settlers",
    "Crossbowman (Ordinance Besteiro), Musketeer (Legionario), Dragoon (Legion Dragoon)",
    "Cassador and Organ Gun",
    "Town Hall"
  ),
  Germans: generateCivilizationData(
    "Germans ruled territories in South America in the 1500s, such as Venezuela. They were short lived until were able to successfully colonize in the late 1800s",
    "The German civilization in Age of Empires III excels in establishing a booming economy,utilizing their troops for early aggression",
    "Receives Uhlans with every home city shipment. Begins with three Settler Wagons",
    "Skirmisher (Prussian Needle Gun) and Uhlan (Czapka Uhlan)",
    "Settler Wagon, Doppelsoldner, Uhlan and War Wagon",
    "German Church , Towers"
  ),
  // Add data for other civilizations
  Aztecs: generateCivilizationData(
    "A powerful central American nation that was well known for its conquest of neighbors. Their power was centered in Tenochtitlan, present day Mexico city.",
    " ",
    "Warrior priests can occupy at the Community Plaza for greater effect",
    " ",
    "Arrow Knights, Coyote Runner, Eagle Runner Knight, Jaguar Prowl Knight, Otontin Slinger, Puma Spearman and Skull Knight",
    "Nobles Hut provides excellent defense and trains elite Aztec units",
    " ",
    " ",
    " ",
    " ",
    "Healing Ceremony and Garland War Ceremony"
  ),
  Ottoman: generateCivilizationData(
    "The Ottoman Empire, situated in a prime position between Europe and Asia, was the location of great technological and militarist improvements. They had heavy influence on Eastern Europe and possessed the main trade route to Asia until the path around Africa was discovered",
    " ",
    "Town Centers cannot train Settlers but produce Yörüks over time, villagers which do not cost resources. Has access to the most unique units compared to European civilizations",
    "Deli (Rumeliot) and Humbaraci (Bostanci)",
    "Yörük, Azap, Janissary, Imam, Bashibozuk, Spahi, Abus Gunner, Humbaraci, Great Bombard and Galley",
    "Has a Mosque to train healers, base and unit improvements",
    " ",
    " ",
    " ",
    " ",
    " "
  ),
  Russians: generateCivilizationData(
    "Known for its military accomplishments and rapid expansions, was a strong military oriented nation. Russia expanded from what is now Alaska down to northern California, but Spanish settlement in those locations forced the ill-supplied settlers back to Alaska",
    " ",
    "Settlers and Infantry train faster in groups at the expense of combat strength. Has a population limit of 210",
    "Cavalry Archer (Tatar Loyalists) and Grenadier (Pavlov Grenadiers)",
    "Strelet, Cossack and Oprichnik",
    "Blockhouses are a combination of Barracks and Outposts",
    " ",
    " ",
    " ",
    " ",
    " "
  ),
  Haudenosaunee: generateCivilizationData(
    "The Haudenosaunee was a Native American civilization that thrived in the northeastern part of North America. The rule of the Confederacy was to keep peace with all members, and against a foe, they were a strong united force",
    " ",
    "Begins with a Travois that constructs buildings for free",
    " ",
    "Aenna, Forest Prowler, Kanya Horseman, Light Cannon, Mantlet, Musket Rider, Ram and Tomahawk",
    "Longhouse supports up to 15 population and Siege Workshop trains and upgrades artillery",
    " ",
    " ",
    " ",
    " ",
    "Founder Ceremony and Earth Mother Ceremony"
  ),
  Lakota: generateCivilizationData(
    "The Lakota occupied large territories in North America, and also absorbed the “Great Plains” culture of their neighbors by becoming skilled buffalo hunters",
    " ",
    "Begins with 200 population and Huntable Animals last longer, but cannot build Walls until the Industrial Age",
    " ",
    "Axe Rider, Bow Rider, Cetan Bowman, Rifle Rider, Tokala Soldier, Tashunke Prowler, Wakina Rifle and Club Warrior",
    "Teepee provides small hitpoint bonus to nearby units",
    " ",
    " ",
    " ",
    " ",
    "Call the People Ceremony and Tokala Ceremony"
  ),
  Chinese: generateCivilizationData(
    "The Qing dynasty was known to be the 5th largest empire of world history. The Chinese had organized “banners”, military social units that included Manchu, Han and Mongol units",
    " ",
    "Can reach population of 220. Trains banner armies in War Academy",
    " ",
    "Arquebusier, Changdao Swordsmen, Chu Ko Nu, Disciple, Fire Junk, Flamethrower, Flying Crow, Fuchuan, Hand Mortar, Iron Flail, Keshik, Meteor Hammer, Qiang Pikemen, Shaolin Master, Steppe Rider and War Junk",
    "War Academy is a combination of barracks and stables. Village supports 20 population and also fattens livestock",
    " ",
    " ",
    "Confucian Academy, Porcelain Tower, Summer Palace, Temple of Heaven and White Pagoda",
    " ",
    " "
  ),
  Indians: generateCivilizationData(
    "The Mughal Empire was an early-modern empire in South Asia. It was known as one of the largest empires in the history of South Asia",
    " ",
    "Most shipments will give you additional villagers. Villagers cost wood instead of food, cannot gather food from livestock",
    " ",
    "Brahmin, Flail Elephant, Gurkha, Howdah, Mahout Lancer, Rajput, Siege Elephant, Sepoy, Sowar and Zamburak",
    "Sacred Field generates more exp when tasked with livestock and also trains cows. Mango Grove is a resource for wood. Caravanserai fulfils a similar role to stables",
    " ",
    " ",
    "Agra Fort, Charminar Gate, Karni Mata, Taj Mahal, Tower of Victory",
    " ",
    " "
  ),
  Japanese: generateCivilizationData(
    "Descendants of the Yamato civilization, who inhabited the island of Japan and other parts of Asia in the far-east. The Japanese civilization is now under the Tokugawa Shogunate, that unified the country",
    " ",
    "Villagers cannot hunt. Shrines attract animals to generate resources",
    " ",
    "Ashigaru Musketeer, Atakebune, Daimyo, Flaming Arrow, Fune, Sohei Archer, Morutaru, Naginata Rider, Tekkousen, Samurai, Yabusame Archer and Yumi Archer",
    "Cherry Orchard is a resource for food. Dojo generates armies automatically and Shrines are Japanese homes",
    " ",
    " ",
    "Golden Pavilion, Great Buddha, The Shogunate, Torii Gates and Toshogu Shrine",
    " ",
    " "
  ),
  Incas: generateCivilizationData(
    "A vast South American empire known for the power of its walls and smart administration",
    " ",
    "Kancha Houses produce food. Receives a free Chasqui with Exploration Age shipments and with each Age-up. Chasqui's can construct Tambos (powerful Trading Posts that can receive shipments and civilians can garrison in). Military units can garrison in Kallankas and Strongholds. Priestesses can convert enemies and work at the Community Plaza",
    " ",
    "Chasqui, Plumed Spearman, Chimu Runner, Jungle Bowman, Bolas Warrior, Huaraca, Maceman, Priestess and Chincha Raft",
    "Kallanka, Stronghold, Kancha House and Tambo",
    " ",
    " ",
    "Wonders",
    " ",
    "Moon Ceremony and Supay Ceremony"
  ),
  Swedes: generateCivilizationData(
    "The Swedish Empire became one of the greatest in Europe through innovation in military tactics and logistics. Its artillery and cavalry charges dominated the battlefields, particularly during the Thirty Years War. Despite a relatively small population, the Swedes fielded some of the largest armies in Europe, partly through the recruitment of mercenaries",
    " ",
    "Torps gather nearby resources. Jaeger and Black Rider mercenaries can always be recruited from the Tavern. Mercenary shipments are cheaper and arrive more quickly. Advanced improvements available at the Arsenal",
    "Pikeman (Dalkarl) and Hakkapelit (Drabant)",
    "Carolean, Leather Cannon and Hakkapelit",
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ),

  "United States": generateCivilizationData(
    "The land of opportunity provided a new world for people from many nations, creating the famous melting pot of cultures. Expanding from militia forces skilled in skirmishing tactics and marksmanship to a professional army, the United States of America ensured its independence and impressive road to prosperity",
    " ",
    "Minutemen levies can be called repeatedly from Town Centers and Outposts. Unlocks two Factory cards in the Industrial Age",
    "State Militia (Volunteer)",
    "Carbine Cavalry, Minuteman, State Militia, Regular, Sharpshooter, Gatling Gun",
    "Can build a Meeting House and a State Capitol which may train Construction Wagons or research unique improvements",
    " ",
    "Starts with a General who can plant an Inspiring Flag and build Forts instead of Town Centers. Advances in Age by choosing a Federal State that unlocks two powerful unique cards. Has access to Saloons, Sloops, Steamers, and unique Outlaws",
    " ",
    " ",
    " "
  ),
  Mexicans: generateCivilizationData(
    "Born in fiery insurgency against Spanish colonial rule the young Mexican nation asserted itself against numerous revolutions and invasions",
    " ",
    "Livestock and Settlers may be tasked to Haciendas to produce resources or spawn units. Can revolt in earlier ages and return to Mexico afterwards. Gains an additional Padre hero early on",
    "Chinaco (Charro), Salteador (Vigilante)",
    "Padre, Insurgente, Salteador, Soldado, Chinaco",
    "Can build Haciendas and a Cathedral which may research unique improvements",
    " ",
    " ",
    " ",
    " ",
    " "
  ),
  Maltese: generateCivilizationData(
    "One of the Mediterranean’s epitomes of a melting pot, Malta was strategically and financially important, and thus most of the surrounding powers coveted it, becoming a stronghold of the Knights Hospitaller",
    " ",
    "Maltese units gain additional hitpoints with each shipment and heal over time when idle",
    "Crossbowman (Arbalesters) and Culverin (Basilisks)",
    "Fire Thrower, Grand Master, Hospitaller, Sentinel",
    "Hospital, Fixed Gun, Depot, Commandery",
    " ",
    " ",
    " ",
    " ",
    " "
  ),
  Hausa: generateCivilizationData(
    "The wealthy Hausa kingdoms were magnets for merchants, intellectuals, and enemies. Their extensive trade relations and diplomacy enabled them to exert powerful influence over vast stretches of West Africa. The Hausa kings and emirs deployed powerful cavalry armies to compete with each other or conquer neighboring empires",
    " ",
    "Gets a free Sanga Cattle with all shipments. Universities generate Influence, especially when built in a Kingdom (nearby one Town Center, Palace and Trading Post)",
    " ",
    "Maigadi, Griot, Fulani Archers, Raider and Lifidi Knight",
    " ",
    "Influence is a powerful resource spent primarily at the Palace on Native Warriors and Mercenaries. All unlocked features cost Influence. Generate it with Universities, Trading Posts and by controlling large herds of Livestock",
    " ",
    " ",
    "Two new technologies at the University. Units/Builders at the Palace or Town Center",
    " "
  ),
  Ethiopians: generateCivilizationData(
    "Placed on the “Roof of Africa” Ethiopia was able to assert its influence over the surrounding lowlands, thriving in the safety of its mountains. A high ground badly needed against hostile attempts to take the empire down. Ethiopia and its King of kings defied not just its African neighbors but also European colonization attempts rendering it as one of the few African regions that eluded the talons of European imperial colonialism",
    " ",
    "Gets a free Mountain Monastery Builder with each Age-Up that can be built on top of Mines to gather Influence and Coin",
    " ",
    "Sebastopol Mortar, Abun, Gascenya, Shotel Warrior, Neftenya and Oromo Warrior",
    " ",
    "Influence is a powerful resource spent primarily at the Palace on Native Warriors and Mercenaries. All unlocked features cost Influence. Generate it with Mountain Monasteries, Trading Posts and by controlling large herds of Livestock.",
    " ",
    " ",
    "Two new technologies at the Mountain Monastary. Units/Builders at the Palace or Town Center",
    " "
  ),
  Italians: generateCivilizationData(
    "Fabulously wealthy merchant republics, kingdoms, duchies, and even the Papacy had driven the Renaissance and dominated the trade networks of the Mediterranean. However, when the Italian polities were not engaged in conflicts abroad, they fought each other nearly incessantly, until the Risorgimento gave rise to the new Kingdom of Italy",
    " ",
    "Gets a free Settler with every technology and may research those at Economic Buildings in any age",
    "Mortars (Galilean Mortars) and Culverins (Spingardes)",
    "Architect, Bersagliere, Galleass, Pavisier",
    "Basilica, Lombard",
    " ",
    " ",
    " ",
    " ",
    " "
  ),
};

// Main Part

const CivilizationInfo: React.FC<{ civilization: string }> = ({
  civilization,
}) => {
  const data = civilizationData[civilization];

  return (
    <Box padding="30px" ml="100px" mr="80px" color="whiteAlpha.800">
      {data && Object.keys(data).length > 0 ? (
        <>
          <Heading
            display="flex"
            alignItems="center"
            fontFamily="TrajanPro"
            bg={`url(${woodImage})`}
            borderBottom="1px solid rgb(235, 200, 55)"
            borderTop="1px solid rgb(235, 200, 55)"
            className="bordercolor"
          >
            <Box textAlign="left">
              <Image
                src={`../src/assets/Images/Flags/${civilization}.png`}
                alt="Civ Flag"
                boxSize="130px"
                width="200px"
                objectFit="cover"
                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.4)"
              />
            </Box>

            <Box flex="1" mr="50px" textAlign="right">
              <Text as="h1" fontSize="5xl">
                {""}
                {civilization}
              </Text>
            </Box>
          </Heading>

          {/* Body text */}
          <Box
            textAlign="left"
            maxWidth="980px"
            padding="20px"
            bg={`url(${woodImage})`}
            borderBottom="1px solid rgb(235, 200, 55)"
            borderTop="1px solid rgb(235, 200, 55)"
            className="bordercolor"
          >
            {Object.entries(data).map(([key, value]) => (
              <React.Fragment key={key}>
                <Text
                  fontSize="16px"
                  lineHeight="1.5"
                  display="inline"
                  color="#ebc837"
                >
                  {key
                    .split(/(?=[A-Z])/)
                    .join(" ")
                    .trim()}{" "}
                  :
                </Text>
                <Text fontSize="16px" lineHeight="1.5">
                  {value}
                </Text>
              </React.Fragment>
            ))}
          </Box>
        </>
      ) : (
        <Text fontSize="16px" lineHeight="1.5">
          No information available for this civilization.
        </Text>
      )}
    </Box>
  );
};

export default CivilizationInfo;
