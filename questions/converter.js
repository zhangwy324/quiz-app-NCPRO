const questions = [
  {
    "Question ID": 1,
    "Your Full Name": "Yongjun Lei",
    "Question Description": "What is the most visited tourist attraction in the world?",
    "Multiple-Choice A": "Eiffel Tower",
    "Multiple-Choice B": "Statue of Liberty",
    "Multiple-Choice C": "Great Wall of China",
    "Multiple-Choice D": "Colosseum",
    "Correct Answer": "A",
    "Explanation of Correct Answer": "The Eiffel Tower is one of the most visited monuments in the world, welcoming almost seven million visitors a year and over 300 million people since its debut.",
  },
  {
    "Question ID": 2,
    "Your Full Name": "Brenda Smith",
    "Question Description": "What small rural town is home to breeding populations of some of the world’s rarest and largest waterfowl, featuring over 2,500 birds from around the world in large walk-through aviaries.?",
    "Multiple-Choice A": "Duck",
    "Multiple-Choice B": "Scotland Neck",
    "Multiple-Choice C": "Swansboro",
    "Multiple-Choice D": "Bald Head Island",
    "Correct Answer": "B",
    "Explanation of Correct Answer": "Located in Halifax County, NC and featuring 18 acres of walk-through aviaries and natural wetlands habitats, Sylvan Heights Bird Park offers an interactive and memorable experience with 200 species of rare waterfowl and exotic birds.",
  },
  {
    "Question ID": 3,
    "Your Full Name": "Brenda Smith",
    "Question Description": "As of August 2022, what was the most popular database management system in the world? The name may even be someone who is wise, insightful, and prophetic.",
    "Multiple-Choice A": "SQL",
    "Multiple-Choice B": "Pangram",
    "Multiple-Choice C": "Oracle",
    "Multiple-Choice D": "CSV",
    "Correct Answer": "C",
    "Explanation of Correct Answer": "Oracle Database is a multi-model database management system commonly used for running online transaction processing (OLTP), data warehousing (DW) and mixed (OLTP & DW) database workloads.",
  },
  {
    "Question ID": 4,
    "Your Full Name": "Hank Yang",
    "Question Description": "What is the smallest National Park in U.S.?",
    "Multiple-Choice A": "Zion",
    "Multiple-Choice B": "Hot Springs",
    "Multiple-Choice C": "Yellowstone",
    "Multiple-Choice D": "Grand Canyon",
    "Correct Answer": "B",
    "Explanation of Correct Answer": "This park is in Arkansas and just 5,550 acres. It could fit into Grand Canyon near 220 times",
  },
  {
    "Question ID": 5,
    "Your Full Name": "Mikey Bennett",
    "Question Description": "Which SFRF project has the highest total adopted budget?",
    "Multiple-Choice A": "DOR-275",
    "Multiple-Choice B": "DEQ-147",
    "Multiple-Choice C": "DIT-06",
    "Multiple-Choice D": "DEQ-148",
    "Correct Answer": "D",
  },
  {
    "Question ID": 6,
    "Your Full Name": "Jessie Holmes",
    "Question Description": 'One of the many grants NCPRO oversees includes "GEER" (gear), G-E-E-R. What does it stand for?',
    "Multiple-Choice A": "Grants for Effective Education Relief",
    "Multiple-Choice B": "Governor's Early Education Relief",
    "Multiple-Choice C": "Governor's Emergency Education Relief",
    "Multiple-Choice D": "Governor's Emergency Economic Relief",
    "Correct Answer": "C",
  },
  {
    "Question ID": 7,
    "Your Full Name": "John Leskovec",
    "Question Description": "What month and year did the North Carolina General Assembly authorize the establishment of the NCPRO?",
    "Multiple-Choice A": "March 2020",
    "Multiple-Choice B": "April 2020",
    "Multiple-Choice C": "May 2020",
    "Multiple-Choice D": "None of the above",
    "Correct Answer": "C",
    "Explanation of Correct Answer": "Session Law 2020-4 was approved 11:45 a.m. this 4th day of May, 2020",
  },
  {
    "Question ID": 8,
    "Your Full Name": "Jessie Holmes",
    "Question Description": "What was the last dry county in North Carolina, until 2021?",
    "Multiple-Choice A": "Camden County",
    "Multiple-Choice B": "Graham County",
    "Multiple-Choice C": "Lincoln County",
    "Multiple-Choice D": "Transylvania County",
    "Correct Answer": "B",
    "Explanation of Correct Answer": "Since 1948, Graham County did not allow alcohol sales until voters in the town of Robbinsville passed a series of referendums in 2021, finally allowing the sale of beer and wine.",
  },
  {
    "Question ID": 9,
    "Your Full Name": "John Leskovec",
    "Question Description": "How many miles is it from our office to the largest natural lake in North Carolina? (looking for closest estimate)",
    "Multiple-Choice A": 240,
    "Multiple-Choice B": 180,
    "Multiple-Choice C": 300,
    "Multiple-Choice D": 150,
    "Correct Answer": "B",
    "Explanation of Correct Answer": "googlemaps shows 181 miles from Dobbs building to Lake Mattamuskeet, NC",
  },
  {
    "Question ID": 10,
    "Your Full Name": "Jessie Holmes",
    "Question Description": "When was the very first COVID-19 case reported in North Carolina?",
    "Multiple-Choice A": "March 1st, 2020",
    "Multiple-Choice B": "March 13th, 2020",
    "Multiple-Choice C": "March 5th, 2020",
    "Multiple-Choice D": "March 3rd, 2020",
    "Correct Answer": "D",
    "Explanation of Correct Answer": "The first case of COVID-19 was announced on March 3rd, 2020, after a person from Wake County was exposed to the virus traveling to a Washington State long-term care facility.",
  },
  {
    "Question ID": 11,
    "Your Full Name": "Shudy Du",
    "Question Description": "What is the largest organ in the human body?",
    "Multiple-Choice A": "Liver",
    "Multiple-Choice B": "Brain",
    "Multiple-Choice C": "Heart",
    "Multiple-Choice D": "Skin",
    "Correct Answer": "D",
  },
  {
    "Question ID": 12,
    "Your Full Name": "Tommy Clark",
    "Question Description": "How many NC college baseball teams have won a College World Series?",
    "Multiple-Choice A": 0,
    "Multiple-Choice B": 1,
    "Multiple-Choice C": 2,
    "Multiple-Choice D": 3,
    "Correct Answer": "B",
    "Explanation of Correct Answer": "Wake forest won in 1955",
  },
  {
    "Question ID": 13,
    "Your Full Name": "Tommy Clark",
    "Question Description": "How many lighthouses are currently located in NC",
    "Multiple-Choice A": 3,
    "Multiple-Choice B": 5,
    "Multiple-Choice C": 7,
    "Multiple-Choice D": 10,
    "Correct Answer": "C",
    "Explanation of Correct Answer": "The seven standing North Carolina Lighthouses: Currituck. Bodie Island. Hatteras. Ocracoke. Cape Lookout. Oak Island. Bald Head Island. Jan 1, 2012",
  },
  {
    "Question ID": 14,
    "Your Full Name": "Yeiney Luna",
    "Question Description": "What is the first sign of the Zodiac.",
    "Multiple-Choice A": "Capricorn",
    "Multiple-Choice B": "Gemini",
    "Multiple-Choice C": "Aries",
    "Multiple-Choice D": "Virgo",
    "Correct Answer": "C",
    "Explanation of Correct Answer":
      'Aries (♈︎) (Greek: Κριός, romanized: Kriós, Latin for "ram") is the first astrological sign in the zodiac, spanning the first 30 degrees of celestial longitude (0°≤ λ <30°), and originates from the Aries constellation. Under the tropical zodiac, the Sun transits this sign from approximately March 21 to April 19 each year.[2] This time duration is exactly the first month of the Solar Hijri calendar (Arabic Hamal/Persian Farvardin/Pashto Wray).[3]',
  },
  {
    "Question ID": 15,
    "Your Full Name": "Yeiney Luna",
    "Question Description": "What Zodiac Sign is represented by the Twins?",
    "Multiple-Choice A": "Aquarius",
    "Multiple-Choice B": "Gemini",
    "Multiple-Choice C": "Scorpio",
    "Multiple-Choice D": "Libra",
    "Correct Answer": "B",
    "Explanation of Correct Answer":
      'In Latin the twins are also known as the Gemini[e] (literally "twins") or Castores,[f] as well as the Tyndaridae[g] or Tyndarids.[h] Pollux asked Zeus to let him share his own immortality with his twin to keep them together, and they were transformed into the constellation Gemini.',
  },
  {
    "Question ID": 16,
    "Your Full Name": "Yeiney Luna",
    "Question Description": "What group of Zodiac Signs belong to the Fire element?",
    "Multiple-Choice A": "Virgo-Capricorn-Taurus",
    "Multiple-Choice B": "Gemini-Libra-Aquarius",
    "Multiple-Choice C": "Scorpio -Cancer-Pieces",
    "Multiple-Choice D": "Aries-Sagittarius- Leo",
    "Correct Answer": "D",
    "Explanation of Correct Answer": "Fire — Aries– Leo – Sagittarius",
  },
  {
    "Question ID": 17,
    "Your Full Name": "Yongjun Lei",
    "Question Description": "Which one of the following item IDs is in a payment request type in PANGRAM?",
    "Multiple-Choice A": 2000052726,
    "Multiple-Choice B": 3000255710,
    "Multiple-Choice C": 8000015006,
    "Multiple-Choice D": 4000036839,
    "Correct Answer": "B",
    "Explanation of Correct Answer": "All payment request IDs are 10-digit IDs which start with 3000.",
  },
  {
    "Question ID": 18,
    "Your Full Name": "Mikey Bennett",
    "Question Description": "Jim Hunt served how many terms as Governor of North Carolina?",
    "Multiple-Choice A": "One",
    "Multiple-Choice B": "Two",
    "Multiple-Choice C": "Three",
    "Multiple-Choice D": "Four",
    "Correct Answer": "D",
  },
  {
    "Question ID": 19,
    "Your Full Name": "Erik Miller",
    "Question Description": "Which is the tallest building piercing the Raleigh skyline?",
    "Multiple-Choice A": "BB&T (Two Hanover Square)",
    "Multiple-Choice B": "Wells Fargo Capital Center",
    "Multiple-Choice C": "PNC Plaza",
    "Multiple-Choice D": "Archdale Building",
    "Correct Answer": "C",
    "Explanation of Correct Answer": "PNC Plaza built in 2008 reaches 538' tall, over 100' taller then its closest competitor the BB&T Building (431').",
  },
  {
    "Question ID": 20,
    "Your Full Name": "Erik Miller",
    "Question Description": "A Raleigh establishment hosts a Guinness Book of World Record for having the most beer on tap, how many do they have? world record",
    "Multiple-Choice A": 97,
    "Multiple-Choice B": 198,
    "Multiple-Choice C": 255,
    "Multiple-Choice D": 350,
    "Correct Answer": "D",
    "Explanation of Correct Answer":
      "Raleigh Beer Garden offers the world’s largest selection of beers on tap, 350+ beers, even made official by the folks from the Guinness Book of Records.    This massive 8,500 square foot venue over 3 levels has tons of outdoor space, a back garden patio and a rooftop bar and an ever changing selection of beers!",
  },
  {
    "Question ID": 21,
    "Your Full Name": "Heather Laffler",
    "Question Description": "What is the oldest town in NC",
    "Multiple-Choice A": "Archers Lodge",
    "Multiple-Choice B": "New Bern",
    "Multiple-Choice C": "Bath",
    "Multiple-Choice D": "Washington",
    "Correct Answer": "C",
    "Explanation of Correct Answer": "North Carolina's First Town. European settlement near the Pamlico River in the 1690s led to the creation of Bath, North Carolina's first town, in 1705.",
  },
  {
    "Question ID": 22,
    "Your Full Name": "Mikey Bennett",
    "Question Description": 'The four colleges of the "Tobacco Road Rivalry" have how may combined men\'s NCAA Division I college basketball championships?',
    "Multiple-Choice A": 15,
    "Multiple-Choice B": 13,
    "Multiple-Choice C": 18,
    "Multiple-Choice D": 11,
    "Correct Answer": "B",
    "Explanation of Correct Answer": "6- UNC 5-Duke 2- NC State 0- Wake",
  },
  {
    "Question ID": 23,
    "Your Full Name": "Jamilla Hawkins",
    "Question Description": "Although many slaves were freed after President Lincoln's Emancipation Proclamation, slaves in which state had to wait two more years, until June 19, 1865 to receive the news?",
    "Multiple-Choice A": "Georgia",
    "Multiple-Choice B": "Louisiana",
    "Multiple-Choice C": "Texas",
    "Multiple-Choice D": "Florida",
    "Correct Answer": "C",
    "Explanation of Correct Answer": "2,000 Union Troops arrived in Galveston Bay Texas on June 19, 1865 to free more than 250,000 enslaved black people",
  },
  {
    "Question ID": 24,
    "Your Full Name": "Erik Miller",
    "Question Description": "Which Guiness Book of World Records can be claimed by North Carolina?",
    "Multiple-Choice A": "Hottest Chili Pepper",
    "Multiple-Choice B": "Largest Iced Tea",
    "Multiple-Choice C": "Largest Gathering of Elvis Impersonators",
    "Multiple-Choice D": "Largest Gathering of People Wearing Swim Caps",
    "Correct Answer": "C",
    "Explanation of Correct Answer":
      "2014, NC's Harrah's Cherokee Casino Resort hosted 895 Elvis impersonators.  Hottest Chili Pepper (Smokin Eds Carolina Reaper), Largest collection of swim cap wearers (2049), and largest Iced Tea (2,524 gallons) belong to our neighbor in the south, South Carolina.",
  },
  {
    "Question ID": 25,
    "Your Full Name": "Tara Fikes",
    "Question Description": "The Durham Bulls is the minor league baseball team of what major league team?",
    "Multiple-Choice A": "Atlanta Braves",
    "Multiple-Choice B": "Washington Nationals",
    "Multiple-Choice C": "Tampa Bay Rays",
    "Multiple-Choice D": "Texas Rangers",
    "Correct Answer": "C",
    "Explanation of Correct Answer": "Although previously affliated with the Atlanta Braves, the team has been affliated with Tampa Bay since 1998.",
  },
  {
    "Question ID": 26,
    "Your Full Name": "Tara Fikes",
    "Question Description": "How many Historically Black Colleges and Universities (HBCUs) in North Carolina?",
    "Multiple-Choice A": 14,
    "Multiple-Choice B": 10,
    "Multiple-Choice C": 8,
    "Multiple-Choice D": 6,
    "Correct Answer": "B",
    "Explanation of Correct Answer": "The state ranks second in the country with 10 in the state - just behind Alabama who has 14.",
  },
  {
    "Question ID": 27,
    "Your Full Name": "Neil L. Coles",
    "Question Description": "What year did NC recognize Juneteenth as a state holiday?",
    "Multiple-Choice A": 2000,
    "Multiple-Choice B": 2020,
    "Multiple-Choice C": 2007,
    "Multiple-Choice D": 2021,
    "Correct Answer": "C",
  },
  {
    "Question ID": 28,
    "Your Full Name": "Joy Darden",
    "Question Description": "What NC Governor served the longest number of years?",
    "Multiple-Choice A": "Zebulon Baird Vance",
    "Multiple-Choice B": "Alexander Martin",
    "Multiple-Choice C": "James (Jim) Hunt",
    "Multiple-Choice D": "James Martin",
    "Correct Answer": "C",
    "Explanation of Correct Answer": "James (Jim) Hunt served a record 4 terms as governor of NC from 1977-1985 and 1993 to 2001.",
  },
  {
    "Question ID": 29,
    "Your Full Name": "Joy Darden",
    "Question Description": "Which of the following is an unallowable activity of SFRF?",
    "Multiple-Choice A": "Replace lost public sector revenue",
    "Multiple-Choice B": "Provide premium pay for essential workers",
    "Multiple-Choice C": "Invest in water, sewer, and broadband infrastructure",
    "Multiple-Choice D": "Deposits into pension funds",
    "Correct Answer": "D",
    "Explanation of Correct Answer": "Deposits into pension funds are not an allowable use of SFRF. The other three are allowable uses.",
  },
  {
    "Question ID": 30,
    "Your Full Name": "Joy Darden",
    "Question Description": "North Carolina is the birthplace of the following soft drink.",
    "Multiple-Choice A": "Coca-Cola",
    "Multiple-Choice B": "Pepsi-Cola",
    "Multiple-Choice C": "Mountain Dew",
    "Multiple-Choice D": "NuGrape",
    "Correct Answer": "B",
    "Explanation of Correct Answer": "Pepsi-Cola was created in 1893 by a New Bern pharmacist named Caleb Bradham and was originally named Brad's Drink.",
  },
  {
    "Question ID": 31,
    "Your Full Name": "Yongjun Lei",
    "Question Description": "Which one of the following agreements does NOT belong to SFRF Revenue Replacement program?",
    "Multiple-Choice A": "OSBM-MONTREAT-171",
    "Multiple-Choice B": "HHS-175",
    "Multiple-Choice C": "YMCA-COOP-001",
    "Multiple-Choice D": "DIT-10",
    "Correct Answer": "D",
    "Explanation of Correct Answer": "DIT-10 agreement belongs to SFRF_INFRASTRUCTURE program.",
  },
  {
    "Question ID": 32,
    "Your Full Name": "Collin Harris",
    "Question Description": "How much in funds from the US Treasury is NCPRO tasked with overseeing?",
    "Multiple-Choice A": "$2 billion",
    "Multiple-Choice B": "$2.8 billion",
    "Multiple-Choice C": "$3.6 billion",
    "Multiple-Choice D": "$1.7 billion",
    "Correct Answer": "C",
  },
  {
    "Question ID": 33,
    "Your Full Name": "Stephanie McG",
    "Question Description": "What is North Carolina’s state seashell?",
    "Multiple-Choice A": "Whelk",
    "Multiple-Choice B": "Scotch bonnet",
    "Multiple-Choice C": "Sand dollar",
    "Multiple-Choice D": "Limpet",
    "Correct Answer": "B",
  },
  {
    "Question ID": 34,
    "Your Full Name": "Stephanie McG",
    "Question Description": "What is the westernmost county in NC?",
    "Multiple-Choice A": "Cherokee",
    "Multiple-Choice B": "Swain",
    "Multiple-Choice C": "McDowell",
    "Multiple-Choice D": "Buncombe",
    "Correct Answer": "A",
  },
  {
    "Question ID": 35,
    "Your Full Name": "Stephanie McG",
    "Question Description": "What is the easternmost county in NC?",
    "Multiple-Choice A": "Hyde",
    "Multiple-Choice B": "Carteret",
    "Multiple-Choice C": "Currituck",
    "Multiple-Choice D": "Dare",
    "Correct Answer": "D",
  },
  {
    "Question ID": 36,
    "Your Full Name": "Collin Harris , Madison Huff, Candace Rheaume, Rita Wortham",
    "Question Description": "When was ARPA signed into law?",
    "Multiple-Choice A": "April, 11 2021",
    "Multiple-Choice B": "February, 11 2021",
    "Multiple-Choice C": "March, 11 2021",
    "Multiple-Choice D": "January, 11 2021",
    "Correct Answer": "C",
  },
  {
    "Question ID": 37,
    "Your Full Name": "Collin Harris",
    "Question Description": "How many recipients are there for North Carolina Coronavirus Relief Funds?",
    "Multiple-Choice A": "Over 2,000",
    "Multiple-Choice B": "Over 3,000",
    "Multiple-Choice C": "Over 5,000",
    "Multiple-Choice D": "Over 7,000",
    "Correct Answer": "A",
  },
  {
    "Question ID": 38,
    "Your Full Name": "Collin Harris, Rita Wortham, Madison Huff, Candace Rheaume",
    "Question Description": "What is the largest County in NC?",
    "Multiple-Choice A": "Mecklenberg",
    "Multiple-Choice B": "Wake",
    "Multiple-Choice C": "Guilford",
    "Multiple-Choice D": "Alamance",
    "Correct Answer": "A",
  },
  {
    "Question ID": 39,
    "Your Full Name": "Collin Harris , Madison Huff, Candace Rheaume, Rita Wortham",
    "Question Description": "How many counties are there in NC?",
    "Multiple-Choice A": 150,
    "Multiple-Choice B": 100,
    "Multiple-Choice C": 50,
    "Multiple-Choice D": 99,
    "Correct Answer": "B",
  },
  {
    "Question ID": 40,
    "Your Full Name": "Collin Harris, Rita Wortham, Candace Rheaume, Madison Huff",
    "Question Description": "What position did Governor Cooper hold prior to office?",
    "Multiple-Choice A": "Lieutenant Governor",
    "Multiple-Choice B": "Secretary of State",
    "Multiple-Choice C": "Attorney General",
    "Multiple-Choice D": "Fighter Pilot",
    "Correct Answer": "C",
  },
  {
    "Question ID": 41,
    "Your Full Name": "Yongjun Lei",
    "Question Description": "NCPRO is collecting KPI data for SFRF projects? Which measure type is NOT regular type of KPI measures?",
    "Multiple-Choice A": "Finance Measure",
    "Multiple-Choice B": "Output Measure",
    "Multiple-Choice C": "Outcome Measure",
    "Multiple-Choice D": "Tracking Measure",
    "Correct Answer": "A",
    "Explanation of Correct Answer": "The regular KPI measure types are: Tracking Measure; Output Measure; Outcome Measure.",
  },
  {
    "Question ID": 42,
    "Your Full Name": "Natalie Garrett",
    "Question Description": "How many films and television programs have been filmed in NC?",
    "Multiple-Choice A": "0-1000",
    "Multiple-Choice B": "1001-2000",
    "Multiple-Choice C": "2001-3000",
    "Multiple-Choice D": "3001-4000",
    "Correct Answer": "D",
    "Explanation of Correct Answer":
      "Some 3,000 films and television programs have been made here, beginning in the early 1900s with silent movies that were shot in western North Carolina.. Some well known examples include Forrest Gump, Last of the Mohicans, The Color Purple, Dirty Dancing, Last of the Mohicans, and The Hunger Games",
  },
];

const convertedQuestions = questions.map((object) => {
  q = {
    question: object["Question Description"],
    choices: [object["Multiple-Choice A"], object["Multiple-Choice B"], object["Multiple-Choice C"], object["Multiple-Choice D"]],
    answer: object["Correct Answer"],
    explanation: object["Explanation of Correct Answer"],
    author: object["Your Full Name"],
  };
  return q;
});

console.log(convertedQuestions);