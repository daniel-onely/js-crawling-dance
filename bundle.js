!function (e) {
  function t(i) {
    if (a[i])
      return a[i].exports;
    var o = a[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, t),
      o.l = !0,
      o.exports
  }
  var a = {};
  t.m = e,
    t.c = a,
    t.d = function (e, a, i) {
      t.o(e, a) || Object.defineProperty(e, a, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }
    ,
    t.n = function (e) {
      var a = e && e.__esModule ? function () {
        return e.default
      }
        : function () {
          return e
        }
        ;
      return t.d(a, "a", a),
        a
    }
    ,
    t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 0)
}([function (e, t, a) {
  "use strict";
  var i = a(1)
    , o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  if (window.tplIndex) {
    var n = function (e) {
      var t = o.default[e];
      return t ? "\n    <h2>" + t.title + "</h2>\n    " + t.paragraphs.map(function (e) {
        return "<p>" + e + "</p>"
      }).join("\n") + "\n  " : "No data for this id! :("
    }(window.tplIndex - 1);
    document.getElementById("app-root").innerHTML = n
  }
}
  , function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = [
      {
        title: "Samba Dance",
        paragraphs: ["All eyes are on Brazil and its vibrant culture, with the FIFA World Cup now into its 3rd week and Rio de Janeiro set to host the 2016 Olympics. But while football is undoubtedly Brazil's most popular sport, its national rhythm is samba. When she walks shes like a samba - That swings so cool and sways so sweet - That whenever she passes, every one she passes - Goes Ahhhhh. The Girl from Ipanema, Stan Getz and Joo Gilberto, 1964 - Samba is a genre that encompasses a wide array of dance and music styles with complex lineage. When samba spread south to urban centers in the late nineteenth century, other forms of the dance started to emerge.", "First, there's the samba of the carnaval parades. The samba in this context is danced individually as a part of a very large group, and is conducted to complex percussion music played by a large marching band. Carnaval is, as London based arts author Ian Driver writes: partly a modern manifestation of middle ages Christian festivals that marked the advent of Lent with subversive and anti authoritarian festivities and partly a descendant of the African coronation traditions. Originally, African Brazilian people used the Christian event as a way to practice government repressed facets of their culture including their dance and music.", "The original carnaval groups first appeared in approximately 1917 in Rio de Janeiro, and the first government sanctioned, and re named, escola de samba was founded in 1928. In the 30s and 40s carnaval samba was harnessed for nationalist political purposes under Getlio Vargas rule, promoting celebration of the <a href='page-"+(window.tplIndex+1)+".html'>African heritage</a> in Brazils mixed race culture. The Rio de Janeiro samba schools now participating in annual competitions in a purpose built venue that was first utilized in the year 1984. The sambodromo is a road like structure flanked by seating on both sides, with a capacity of 90, 000 people.", "Whilst the celebrations in Rio de Janeiro are perhaps the most well known outside of Brazil, carnaval is celebrated all over Brazil, usually in February. With regards to the music, samba involves a syncopation that creates a sense of suspension, and this, as described by American cultural critic Barbara Browning: leaves the body with a hunger that may only be satisfied by filling the silence with motion. As can be seen below, whilst the dancers Brenda Carvalho and Anderson Mendez da Rocha don't step on count four, the hips continue to move and for that reason fill that count.", "The following is one version of the footwork for samba no p, which is samba danced individually. There are various versions of the footwork. Here it's shown with a back accent, and not travelling. The hips fall on the side of the functioning leg, which is achieved by calming the corresponding knee. In the 30s another type of samba emerged in Rio de Janeiro and became a popular social dance in the 40s samba de gafieira, frequently referred to as simply samba."]
      },
      {
        title: "Rumba Dance",
        paragraphs: ["The term black dance refers to a wide range of styles whose roots comprise the tribal dances of Africa, the servant dances of the West Indies as well as the American Deep South, the Harlem social dances of the 1920 and the jazz dancing of Broadway musicals. Dance has been bound up with rights and social problems. The history of black dancing in Britain is comparatively young and the very first black British dance company, Ballet Ngres, has been formed in 1946. Yet, black dancers from america happen to be touring to England since the early twentieth century as well as black musicals from the States were widely popular on the British stage from the late 19th as well as early 20th centuries.", "Africa and the West Indies - black dance's two sources are African American dancing and the servant dances from the plantations of the West Indies. Groups from each nation or tribes have their own individual dances. Dance has a social and ceremonial role, marking and observing <a href='page-"+(window.tplIndex+1)+".html'>rites of sex</a>, passage, the seasons, weddings and diversion. The dancer can be a tutor, commentator, spiritual medium, healer or story teller. In the Caribbean every island has its own customs that come from its African American roots and the islands special colonial past French, British, Dutch or Spanish. Eighteenth century dances such as Chica and the Calenda were slave dances which attracted rhythms and customs.", "The Calenda was probably the most famous slave dances in the Carribean. The dancing gets faster as well as faster as well as the movement increasingly more sexual. Records show them appearing at Vauxhall Gardens as well as in London theatres in the mid nineteenth century. Black minstrel Billy Kersands perform for Queen Victoria, who had been said to have a lot admired him. The first minstrel performers from the United States were white performers, who smeared their faces from burnt cork as well as danced as well as sang in imitation of black people. The dance they performed most widely was a mixture of an African American ring dance and an Irish jig.", "Two stereotypical minstrels developed the Clown as well as the Dandy. These comic caricatures ridiculed black people, but black performers too started to black up as minstrels. Famous black minstrels who performed from Britain including the Bohee Brothers, Billy Kersands as well as Juba. Billy Kersands specializing in the soft shoe dancing and another dancing called the Buck and Wing. His comic talent lay from the fact that he has been a big man yet danced with an extremely light step. The Bohee Brothers, who also danced the soft shoe dance, played the banjo in the same time. They were said to have taught the Prince of Wales how to play the banjo. The song Oh England Is de Grand Place, or the Real Jim Crow Written by Alfred Bunn as well as sung by the comedian as well as singer Paul Bedford has been performed from the pantomime Harlequin Gammer Gurton in Drury Lane. The song has been a parody of Jump Jim Crow a song that became a big-nineteenth century hit in the US."]
      },
      {
        title: "Lambada Dance",
        paragraphs: ["Zouk is a fun, modern dance appropriate for all ages. For many from the dance audience that was younger, an interest in partner dancing has rekindled. For other conventional dances being danced by those who have experience, a lot of the moves, techniques or theories from these dances could be imported making it simple to adapt to the dance. Zouk is a type of music and both a dance. This sensual and filled with energy dance has roots in Samba and Lambada, whilst the music has French roots. Characteristic Movements of Zouk Dance - Zouk includes a wave like motion, elongated hair moves that were striking and measures.", "The motions are a side to side and a rippling wave like movement forwards and rear. While hip grinds are reminiscent of the Lambada body rolls are reminiscent of the Samba. Accomplished dancers roll their mind and also from side to side keeping to their music's rhythm, and developing a quality to their dance. They projecting back of the mind and punctuate the end of a step or sequence blueprint with an arch. This is spectacular to watch and is the heart of the Lambada! - The adopt when dancing Zouk Lambada is close. The follower dances on their balls of her feet with a twisting motion in order that her measures appear to grind the floor.", "This in turn which highlights her hip movements. Dance Embrace \/ Hold - Zouk can be danced in open or close embrace or hold. <a href='page-"+(window.tplIndex+1)+".html'>The open embrace</a> is much like the Salsa open embrace dance hold. The close embrace hold is comparable to a Bachata hold. The choice of hold depends upon their comfort level of both partners and their kind of audio and dance patterns being used. Open holds are appropriate when dancing with a stranger and once dance a fast paced Zouk using underarm turns along with other patterns that require an open adopt. Close embrace holds are appropriate for partners who know each other, who're comfortable using the hold and for slower Zouklove or Zouk Lambada audio. Men should never assume that females are mechanically comfortable with a close hold. When dancing with someone for the very first time, their leader should ask their follower if they're comfortable dancing in close embrace. Dance Space - Samba de Gafieira is a spot dancing that's danced in an elongated slot."]
      },
      { 
        title: "Tango Dance Of Love",
        paragraphs: ["You think of Tango, what comes to mind? Passion? Drama? Violence? Romance? Sex? Whatever it is, it is primal, <a href='page-"+(window.tplIndex+1)+".html'>usually emotional</a> in nature and stirring of your senses. Tango don't ever elicits a ho hum response, since there's nothing mundane or humdrum about it is a living and breathing sense deux that's danced. Tango invites you. Tango is language evolved. Tango, the songs and the dance, has a complicated history, the details of that vary based on who you listen or read to. Its evolution parallels the social and financial growth of Argentina and Uruguay, especially the region of Rio de la Plata along with its triangle of Buenos Aires, Rosario along with Montevideo.", "During that time, Tango was raw and sensual in its kind, borrowing its style from the position of also the compadritos and their deft use of also the knife and also the gaucho of also the pampa, and also the entanglement of limbs representing the sensual experience. The dance itself began between men and after that moved into brothels. The European authorities wave to Argentina from the 1880 and the creation they spawned changed Tango to a dance which was smoother, retaining its sensuality and including a nostalgia sensibility. The immigrants were largely men who'd come to seek their fortune alone along with without family.", "They came from Italy, Spain, Germany, Poland along with Greece, along with settled in the orillas or suburbs of Buenos Aires. A lot of also the early songs reflect their nostalgia talking about love, loneliness, hardship and unfulfilled dreams. The songs was based on also the movable instruments brought by them violin, guitar, harp along with flute along with the later incorporation of the piano along with also the Argentine bandoneon when also the musical genre becomes known as La Guardia Vieja. Despite its growing popularity, Tango remained controversial among Argentine society, where it continued into be seen as the prohibited dance.", "The music of tango transformed with La Guardia Nueva, incorporating a poetic sensibility, along with ushering in a brand new sound Tango Triste that spoke of unrequited love. In its heyday, Tango became the main way of socializing and getting along with also the opposite sex, a form of societal entertainment that frequently led to individuals coupling up. Argentina was prospering economically along with industrially, along with this was evident from the mood of the country. People wanted to dance. Orchestras along with milongas, or dances, sprung up through the city and its outskirts. Two styles about Tango emerged from this period: The downtown, or milonguero style, that evolved inside the rich culture of Buenos Aires, where individuals danced nightly and with various partners, adapting to the little spaces by tightening and closing the adopt, focusing on musicality along with bodily communication, along with the salon style, that was danced in the outskirts of also the city, and was a weekend affair danced in larger spaces, and attended by couples this danced largely with one another and focused on choreography."]
      },
      {
        title: "Charleston Dance",
        paragraphs: ["What Makes a Song Swing? We realize it whenever we listen to it. Our legs tap along, our hips might proceed in side to side, and also our fingers snap with the beat. As the song progresses soloists can select the baton up and pass it on, but you will find 3 or two band members. Swing bands have a propensity full of energy structures in addition to be bigger than jazz bands, necessitating a thorough and more coordinated composition, notation. Swing bands prevent chaos that could arise from the improvisation of twelve by having a structure.", "History - Swing evolved around America, and developed as a mixture of European and African rhythms - from jazz experimentations from New Orleans to NY and Kansas City. While swing is a decidedly American style of music, the forerunners of swing developed in areas like Cuba, Haiti, Puerto Rico, and also Brazil by the servant populations, even though they often get no credit in the genre due to an inability to record music and historic racism. Swing is known as the music of the 30s and 1940 s. Though swing finds its roots in the 1920 Throughout the 1920 s, African Americans played and enjoyed swing.", "As the audience grew, musicians and leading bands were under pressure to develop softer music for much more conservative Anglo American listeners. <a href='page-"+(window.tplIndex+1)+".html'>White listeners</a> found African American swing to be vulgar and also low class, even though this was due to racism more so than officially offensive content. Nevertheless, By 1939, the immunity against swing music in America had disappeared, and America was a proudly swing nation. The Swing Kids - Similar conflicts arose when swing became much more popular in the nations. Swing music in Germany was often performed by most African immigrants as well as Jew musicians.", "The Nazi party labeled swing as Negermusik and entartete musik. Therefore, the Swing Kids arrived. Mainly concentrated in big cities like Berlin, the Swing Children used music as a political tool against the Nazi party. The name of the movement itself poked fun at Nazis. Swing Children Or coded Youth was a parody on the many youth groups encouraged by the Nazi government. They also used their greeting coded Heil, as a parody of Sieg Heil, the Nazi salute. Probably the most surprising info regarding the Swing Children is popularly the fact that they were literally children. The Swing Children were composed of 14 to 18 years old who usually still attended school. They were largely members of the upper class since they needed to have access to records and also music which wasn't played on German radio. They were against Nazism, particularly the Hitler Youth plus they found themselves longing for the American and also British way of life, and also therefore defined themselves through swing music."]
      },
      {
        title: "Dancing Bachata",
        paragraphs: ["It danced? If you are in the bachata dance Earth, youd notice that there's been discussions and debates about arrangement and the origin of bachata dancing. Some say Bachata is a sense a dance that is simple thats simpler than salsa, but they never defined the arrangement of bachata in a specific way. It's been years since the first bachata festival on earth was celebrated from Sydney, Australia, followed by that the initial bachata festival in the Reno in the year 2009, nonetheless, to the day, you can't find concrete and certain descriptions on what bachata dance construction is. Bachata is a type of partner dance which originated from the Dominican Republic inlfuenced Merengue, Son and by Bolero.", "So the dancer can permit the hips to move 16, the knees should be slightly bent. The leader can choose whether or not to dance in closed or open position. Measure variety, or dance moves, during dancing is dependent on the music. Unlike salsa, Bachata dance does include turn or spin patterns, but they're used more as the dance fusionized and evolves. The command is done just like in most other partner dances, with a push\/pull or swing hand and arm communication. Hand and arm communication is better transmitted when that the movements are applied by that the shoulders and footwork.", "The way they dancing in Dominican Republic is a basic dancing sequence in a complete 8 count moving within a sq or small circle. Dancers in Europe and United States later began developing a more very simple movement and added dance components from other dances as well, and somewhat changing that the construction. The fundamental is also in a complete 8 count, but using a side-to side motion. The Original Structure of Bachata Dance - Front Steps - <a href='page-"+(window.tplIndex+1)+".html'>A measure that starts using a tap in a forward motion.</a> - Side Steps - A measure that starts using a tap in a sideward motion.", "- Back Steps - A measure that starts using a tap in a backward motion. - Note: These steps aren't traveling steps. Forward\/Backward Steps - Steps that start with a Left foot by the chief from linear direction - Double Steps - The double measures happens on the fourth beat using a half second pause followed from a measure and quick measure from the other foot. - Box Steps - A measure that starts using that the left foot to that the side, right foot."]
      },
      {
        title: "Twist Dance",
        paragraphs: ["An enjoyable little jig with simple motions which may be learned from under a minute, The Chicken Dance is a staple in faculty parties, bar mitzvahs, and Oktoberfest celebrations. The narrative of the avian shimmy started with its melody, which was penned over sixty years ago by a Swiss artist called Werner Thomas. Back in the 50s, Thomas earned his everyday bread playing the accordion in Swiss vacation resorts. As he revealed in this German speech interview, the melody first popped to his head in 1955 or so. Thomas spent the next few years reviewing his melodyand thinking up a dance to go with it.", "The quirky routine he devised was motivated not by chickens, but instead by skiers. Even back in the 50s, Switzerland was world renowned for its skiing resorts, many of which Thomas frequented. While viewing vacationers zip down that the slopes with wild abandon, Thomas couldnt aid, but notice their similarity to a specific water bird. Skiers, he said, utilize specific hand motions thatat least for him the beak of a duck. Other expressions used by the winter sports fans reminded Thomas of wavy wings and waddling feet. He then adapted these to a playful series of moves he predicted Der Ententanz or The Duck Dance.", "The next significant development in the songs history came from the early 70s, when Belgian music manufacturer Louis Julien van Rijmenant heard Thomas playing with it in a hotel in Davos, Switzerland. Titled Tchip, Tchip, this variant of the tune was created through synthesizera fact that caught Thomas completely off guard when he first heard their cover. The synthesizer was a completely new tool for me, Thomas said. Even though he originally didnt approve of this electronic version of his song, he soon arrived around to liking it. And he wasnt alone: Within a year, Rijmenants Tchip, Tchip record sold more than one million copies in Europe.", "Regardless of that the tunes popularity, Thomass accompanying dance wouldnt become widely known till that the Dutch band De Electronica released a brand new cover of Tchip, Tchip from 1980. Their versionwhich the group predicted De Vogeltjesdans, or Dance Little Birdspent a commendable 29 weeks on that the Dutch charts, where it peaked at number eight. At concerts and in Television appearances, De Electronica reunited that the melody with that the original, duck like motions that Thomas had devised over 2 decades earlier. By then, that the melody had already crossed that the Atlantic. Credit for bring it stateside belongs to music manufacturer Stanley Mills.", "His first exposure to Thomass masterpiece arrived in a 1972 convention in Cannes, France. Mills instantly liked the song and purchased its American distribution rights. Like De Electronica, he called his variant Dance Little Bird. Even though the song is now a ubiquitous force at dance parties throughout nation, with it didnt find its American audience right away."]
      }
    ];
    t.default = i
  }
]);
