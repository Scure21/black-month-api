var router = require('express').Router();

router.get('/', function(req, res, next){
    var query = req.query.title;
        res.json([
            { 
                name: "Pamela Sutton-Wallace",
                description: 'CEO UVA Medical Center Pamela Sutton-Wallace has been recognized for the UVA Medical Center’s handling of August’s white supremacist rallies, and for her leadership in improving quality and safety outcomes and helping establish a statewide pediatric care network.',
                image: "./public/images/pamela_sutton-wallace_jackson_smith_photography_header_3-2.jpg"
            },
            {
                name: "Voltaire Wade-Green",
                description: "Voltaire was the Dance Captain for Hamilton on Broadway. Instead of using traditional western classical music, Hamilton was built on the tenets of hip hop and rap through rhythm and flow.",
                image: "./public/images/Voltaire-Wade-Greene.jpg"
            },
            {
                name: "Uzo Njoku",
                description: "Uzo looked for an adult coloring book with people who inspired her and couldn't find one, so she created it. It has now sold over 1,500 copies.",
                image : "./public/images/uzo_njoku_da_inline_01.jpg"
            },
            {
                name: "Nikuyah Walker",
                description: "Political activist Nikuyah Walker was critical of Charlottesville leadership and challenged City Council during an offical meeting about the town's handlling of August's rallies. She consequently stepped up and was elected Mayor of Charlottesville in 2017.",
                image: "./public/images/Nikuyah_Walker.jpg"
            },
            {
                name : "Zyahna Bryant",
                description: "Zyahna Bryant was 15 years old when she started a petition calling on City Council to rename Lee Park and to remove its monument.",
                image: "./public/images/Zyahna_Bryant.webp"
            },
            {
                name: "Wes Bellamy",
                description: "Vice Mayor of C'ville, City Council Member.",
                image: "./public/images/wes-bellamy.jpg"
            },
            {
                name: "Eboni Bugg",
                description: "Director of Programs CACF.",
                image: "./public/images/Eboni_Bugg.jpg"
            },
            {
                name: "Kelli Palmer",
                description: "Director, Corporate Citizenship CFA.",
                image: "./public/images/Kelli_Parlmer.jpg"
            },
            {
                name: "Jocelyn Johnson",
                description: "Writer",
                image: "./public/images/Jocelyn_Johnson.jpg"
            },
            {
                name: "Tobiah Mundt",
                description: "Textile Artist, opened the Hive",
                image: "./public/images/Tobiah_Mundt.webp"
            },
            {
                name: "Kwamina Williford",
                description: "Attorney",
                image: "./public/images/Kwamina_Williford.jpg"
            },
            {
                name: "Demetia Hopkins Green",
                description: "Professional dancer w/ Alvin Ailey",
                image: "./public/images/Demetia_Hopkins_Green.jpg"
            },
            {
                name: "Ben Allen",
                description: "Assistant Principal of Cale, pressing for more minority teachers",
                image: "./public/images/Ben_Allen.jpg"
            },
            {
                name: "Alan Emtage",
                description: "Working as a systems administrator, Alan was responsible for locating software for the students and faculty. He decided to develop a set of programs, that would go out and look through the repositories of software and build a searchable database. That was the beginning of the search engine.",
                image: "./public/images/Alan_Emtage.png"
            },
            {
                name: "Tarana Burke",
                description: "In 2006, she wrote the words “Me Too” on a piece of paper as a way of starting an action plan to do something about the sexual violence she saw in her community.. The phrase became a globally used hashtag last year that played a significant part in awareness. “My vision for the Me Too movement is part of a collective vision to see a world free of sexual violence.",
                image: "./public/images/Tarana_Burke.jpg"
            },
            {
                name: "Shirley Ann Jackson",
                description: "First woman to get a doctorate in any field at MIT.",
                image: "./public/images/Shirley_Ann_Jackson.jpg"
            },
            {
                name: "Mark Dean",
                description: "Color Monitor, first gigahertz chip.",
                image: "./public/images/Mark_Dean.jpg"
            },
            {
                name: "Guion Bluford",
                description: "NASA",
                image: "./public/images/Guion_Bluford.webp"
            },
            {
                name: "Kimberly Bryant",
                description: "Black Girls Code Founder",
                image: "./public/images/Kimberly_Bryant.png"
            },
            {
                name: "Dr. Dre",
                description: "Sick and tired of the low-quality sound delivered by iPod’s cheap earbuds, Dr. Dre aimed to revolutionize the industry with a brand of headphones that could provide the best sound quality with personality. It allowed wearers to hear more sounds recorded in the studio.",
                image: "./public/Dr_Dre.jpg"
            },
            {
                name: "Kendrick Lamar",
                description: "First non-jazz, non-classical Pulitzer for Music.",
                image: "./public/Kendrick_Lamar.jpg"
            },
            {
                name: "Quincy Jones",
                description: "Music Impresario",
                image: "./public/Quincy_Jones.jpg"
            }
        ])
        res.send().status(200)
  });
  

  module.exports = router;