exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Ferrell",
          email: "gallowayzamora@extragene.com",
          password:
            "Eu aute nulla et deserunt laboris officia cupidatat fugiat cillum."
        },
        {
          name: "Lawrence",
          email: "patriciacampbell@zboo.com",
          password: "Id ut officia fugiat cillum nulla labore voluptate."
        },
        {
          name: "Fowler",
          email: "montgomerywagner@billmed.com",
          password:
            "Est ipsum adipisicing aute qui ipsum aute nulla ipsum duis culpa Lorem adipisicing ipsum."
        },
        {
          name: "Tucker",
          email: "ruthchen@remotion.com",
          password:
            "Irure proident excepteur commodo ad sunt velit non veniam do sit cillum qui qui."
        },
        {
          name: "Patti",
          email: "villarrealclemons@jimbies.com",
          password:
            "Incididunt excepteur est officia esse non in sit deserunt ullamco voluptate excepteur veniam occaecat."
        },
        {
          name: "Murphy",
          email: "rosariofloyd@pharmacon.com",
          password: "Eiusmod fugiat aliquip cupidatat dolor."
        },
        {
          name: "Charlene",
          email: "irenenieves@zilencio.com",
          password:
            "Aliquip irure cupidatat nulla amet proident irure est fugiat exercitation velit non."
        },
        {
          name: "Ortega",
          email: "karlarussell@ronelon.com",
          password: "Do id labore culpa nulla exercitation eu cillum."
        },
        {
          name: "Elena",
          email: "sharlenecash@inrt.com",
          password:
            "Labore occaecat enim labore dolore eiusmod officia eu incididunt commodo reprehenderit."
        },
        {
          name: "Josefa",
          email: "estellebush@opticall.com",
          password: "Dolore occaecat laboris amet ex magna."
        },
        {
          name: "Peters",
          email: "ramirezware@zosis.com",
          password:
            "Et ullamco Lorem culpa cillum occaecat veniam voluptate eiusmod ex."
        },
        {
          name: "Mallory",
          email: "williamconrad@firewax.com",
          password:
            "Enim consectetur sit proident tempor ad quis qui sint sit in nulla qui anim."
        },
        {
          name: "Allison",
          email: "ermacontreras@musaphics.com",
          password:
            "Magna Lorem reprehenderit sint ullamco nisi irure qui proident proident enim."
        },
        {
          name: "Tammy",
          email: "kristinerich@zeam.com",
          password: "Voluptate est laborum consectetur laborum."
        },
        {
          name: "Leach",
          email: "powersvazquez@bovis.com",
          password:
            "Anim ad cupidatat id incididunt ad laborum laborum elit consequat eu esse laboris."
        },
        {
          name: "Ophelia",
          email: "wallbutler@eplosion.com",
          password:
            "Cupidatat labore voluptate velit mollit culpa elit excepteur nostrud exercitation."
        },
        {
          name: "Wilma",
          email: "janebird@digiprint.com",
          password: "Eiusmod aute et anim non."
        },
        {
          name: "Clarissa",
          email: "craighuff@artiq.com",
          password: "Cupidatat nulla magna commodo pariatur ex nisi labore."
        },
        {
          name: "Dora",
          email: "schmidtwashington@microluxe.com",
          password: "Velit exercitation est voluptate proident."
        },
        {
          name: "Amie",
          email: "rowenatrevino@geoforma.com",
          password: "Non aliqua qui qui sunt esse ut sint eu."
        },
        {
          name: "Mollie",
          email: "hestercruz@zensor.com",
          password: "Cillum adipisicing sunt eu tempor."
        },
        {
          name: "Newton",
          email: "kramernicholson@inventure.com",
          password: "Quis laborum occaecat dolor ipsum duis veniam ex."
        },
        {
          name: "Kelli",
          email: "noelleroach@netplode.com",
          password: "Mollit eiusmod in sint esse mollit consectetur cillum."
        },
        {
          name: "Deanna",
          email: "dorseywatkins@exospace.com",
          password: "Consequat amet velit qui dolor commodo."
        },
        {
          name: "Le",
          email: "susannemaddox@cuizine.com",
          password:
            "Excepteur cupidatat proident ex quis velit reprehenderit nostrud."
        },
        {
          name: "Kristin",
          email: "lorenepark@melbacor.com",
          password:
            "Laborum ullamco voluptate excepteur veniam laboris deserunt minim irure occaecat commodo ad."
        },
        {
          name: "Amalia",
          email: "josephinebean@plasmos.com",
          password: "Pariatur est voluptate qui ex."
        },
        {
          name: "Hubbard",
          email: "parkerfisher@zensus.com",
          password:
            "Cupidatat Lorem aliqua occaecat sint cillum nulla aliqua ex occaecat elit."
        },
        {
          name: "Hensley",
          email: "bakerkaufman@kindaloo.com",
          password:
            "Adipisicing elit sunt qui eu culpa cupidatat aute est consectetur laboris incididunt."
        },
        {
          name: "Sullivan",
          email: "tracimason@oronoko.com",
          password:
            "Est aliqua anim officia nisi veniam adipisicing ullamco quis aliquip non."
        },
        {
          name: "Navarro",
          email: "ilasnider@baluba.com",
          password:
            "Dolor incididunt aliquip cillum occaecat non ipsum do veniam magna sunt laborum consectetur velit sunt."
        },
        {
          name: "Greene",
          email: "fayebarron@accusage.com",
          password: "Id excepteur nulla dolore ex reprehenderit."
        },
        {
          name: "Jones",
          email: "levybowman@futurity.com",
          password: "Ullamco mollit sunt excepteur laboris."
        },
        {
          name: "Dickson",
          email: "mavissweeney@ecraze.com",
          password:
            "Commodo sint laborum ea Lorem esse sint laboris quis et eu nostrud."
        },
        {
          name: "Rogers",
          email: "cobbpeters@verbus.com",
          password:
            "Esse velit ad non consequat officia sint qui laboris pariatur magna."
        },
        {
          name: "Mcleod",
          email: "jocabrera@syntac.com",
          password:
            "Amet occaecat irure deserunt commodo amet et sint ullamco veniam elit minim Lorem deserunt."
        },
        {
          name: "Peterson",
          email: "rosalesschmidt@uniworld.com",
          password:
            "Elit sint exercitation elit id sunt est consequat laborum in minim."
        },
        {
          name: "Kane",
          email: "banksquinn@musix.com",
          password:
            "Enim eiusmod consequat sit elit laboris voluptate adipisicing."
        },
        {
          name: "Ingram",
          email: "alexandermoss@sulfax.com",
          password: "Dolor enim dolor nisi minim in nulla excepteur ullamco."
        },
        {
          name: "Angelica",
          email: "georginaclay@twiggery.com",
          password: "Lorem labore sit elit qui qui."
        },
        {
          name: "Helena",
          email: "conwayscott@volax.com",
          password:
            "Sint ullamco voluptate duis est laborum occaecat nostrud veniam amet sit do nulla aute veniam."
        },
        {
          name: "Hoover",
          email: "rosalynjames@geekfarm.com",
          password:
            "Cupidatat elit irure anim minim non ex excepteur enim amet nulla."
        },
        {
          name: "Lorena",
          email: "rosemaryrosario@geekko.com",
          password:
            "Labore nisi dolor officia nisi in velit do laborum nostrud ipsum et culpa eu cillum."
        },
        {
          name: "Rosanne",
          email: "kenyagarner@orbalix.com",
          password: "Non eu ipsum id quis do cillum."
        },
        {
          name: "Craft",
          email: "kayeolson@elpro.com",
          password:
            "Quis est nostrud ipsum ipsum dolor Lorem dolore sint eu pariatur."
        },
        {
          name: "Kimberley",
          email: "hydebrock@prosure.com",
          password: "Proident consectetur tempor sit aliqua ea commodo."
        },
        {
          name: "Shawna",
          email: "gonzalezirwin@namebox.com",
          password: "Aliqua nostrud qui cupidatat cupidatat nisi eu."
        },
        {
          name: "Deann",
          email: "tasharyan@tingles.com",
          password:
            "Anim dolore voluptate excepteur adipisicing proident aute commodo."
        },
        {
          name: "French",
          email: "kirbypeterson@furnigeer.com",
          password: "In consectetur velit dolore cillum eiusmod id cillum ut."
        },
        {
          name: "Walter",
          email: "fosterbauer@mantro.com",
          password:
            "Deserunt duis duis nulla sint exercitation ullamco mollit amet ullamco ad anim non."
        },
        {
          name: "Socorro",
          email: "linaholman@tropolis.com",
          password:
            "Elit fugiat reprehenderit veniam irure consequat ad nostrud ut quis laboris qui excepteur."
        },
        {
          name: "White",
          email: "rayvargas@qualitern.com",
          password: "In ad aute in nostrud aliquip ex dolor tempor id."
        },
        {
          name: "Riddle",
          email: "edwardsburgess@genmex.com",
          password:
            "Anim pariatur tempor elit magna aute aliquip culpa do labore eu eu esse."
        },
        {
          name: "Gregory",
          email: "andreaingram@comtours.com",
          password: "Excepteur ut nulla dolore nulla."
        },
        {
          name: "Pearlie",
          email: "jimenezpowers@comveyer.com",
          password:
            "Pariatur eiusmod minim mollit irure elit minim ea ad consequat Lorem ad."
        },
        {
          name: "Nannie",
          email: "yvettelevy@andryx.com",
          password: "Esse dolor Lorem consectetur proident."
        },
        {
          name: "June",
          email: "hollymurphy@velity.com",
          password:
            "Est velit id ea ea veniam culpa tempor do duis commodo amet."
        },
        {
          name: "Bette",
          email: "bertiewilkins@pheast.com",
          password:
            "Lorem reprehenderit cupidatat dolore in sunt fugiat nulla deserunt nostrud reprehenderit enim amet."
        },
        {
          name: "Noble",
          email: "barrcameron@netropic.com",
          password:
            "Consectetur occaecat sint anim officia adipisicing officia non eiusmod officia ipsum in."
        },
        {
          name: "Staci",
          email: "bergerbonner@niquent.com",
          password: "In ullamco sit ea incididunt nisi adipisicing."
        },
        {
          name: "Barnett",
          email: "lewisholland@extremo.com",
          password:
            "Nulla do adipisicing ullamco et quis ipsum voluptate eu ipsum velit."
        },
        {
          name: "Britney",
          email: "andrewscarson@corporana.com",
          password:
            "Consectetur ullamco mollit labore cillum sit do Lorem aliquip elit."
        },
        {
          name: "Greta",
          email: "maricelachan@junipoor.com",
          password:
            "Veniam dolor proident eiusmod minim deserunt occaecat voluptate deserunt."
        },
        {
          name: "Flynn",
          email: "juanasexton@rooforia.com",
          password:
            "Aliqua culpa do qui Lorem consectetur occaecat culpa minim occaecat eu cillum tempor."
        },
        {
          name: "Berta",
          email: "russorosales@ewaves.com",
          password: "Dolore labore ut occaecat adipisicing."
        },
        {
          name: "Opal",
          email: "hodgehobbs@zoxy.com",
          password:
            "Aute nostrud adipisicing ipsum anim mollit pariatur irure non voluptate enim qui velit nisi."
        },
        {
          name: "Bowman",
          email: "angelashaffer@cytrex.com",
          password:
            "Est eu duis dolor tempor sint minim esse deserunt amet laboris nostrud ea sunt duis."
        },
        {
          name: "Boyle",
          email: "goffcleveland@talendula.com",
          password: "Nostrud minim sit adipisicing cupidatat quis."
        },
        {
          name: "Mcintyre",
          email: "romantodd@visualix.com",
          password:
            "Voluptate non ipsum Lorem enim sint velit laboris in ea et ex."
        },
        {
          name: "Elba",
          email: "brucecastaneda@netur.com",
          password:
            "Eu adipisicing non eu culpa do amet consequat velit tempor labore minim mollit."
        },
        {
          name: "Fields",
          email: "blackwellwatson@nurplex.com",
          password:
            "Laboris incididunt id tempor aliqua ut in voluptate reprehenderit veniam."
        },
        {
          name: "Dunn",
          email: "merlejackson@mobildata.com",
          password: "Quis minim laborum nisi aliqua."
        },
        {
          name: "Helen",
          email: "prestonsandoval@colaire.com",
          password:
            "Aliqua adipisicing pariatur proident reprehenderit aute exercitation quis ullamco eu veniam."
        },
        {
          name: "Noreen",
          email: "gloriarocha@zomboid.com",
          password: "Consectetur dolor ipsum labore aliquip consectetur."
        },
        {
          name: "Corina",
          email: "workmanchurch@quonk.com",
          password:
            "Sint incididunt non exercitation elit dolore pariatur eiusmod proident."
        },
        {
          name: "Elvira",
          email: "hollandfernandez@rugstars.com",
          password:
            "Laborum irure ea sit excepteur nostrud nisi irure et Lorem laboris officia ad."
        },
        {
          name: "Ashley",
          email: "brittholcomb@portaline.com",
          password:
            "In qui laborum consectetur laboris quis exercitation dolore elit ipsum incididunt."
        },
        {
          name: "Kay",
          email: "alicehardy@quarex.com",
          password:
            "Irure nisi laboris voluptate est culpa qui minim aliqua culpa cillum commodo et occaecat anim."
        },
        {
          name: "Anastasia",
          email: "constancejohnston@comverges.com",
          password: "Cillum deserunt sunt labore nostrud."
        },
        {
          name: "Jessica",
          email: "marjorieparks@realmo.com",
          password: "Duis aute cillum Lorem ad sint consectetur occaecat."
        },
        {
          name: "Kathie",
          email: "corinerios@hyplex.com",
          password:
            "Velit quis in ad elit dolore ullamco duis nostrud sunt aliqua incididunt proident."
        },
        {
          name: "David",
          email: "westrowland@turnabout.com",
          password: "Aliqua amet elit cupidatat culpa duis non ut."
        },
        {
          name: "Myrtle",
          email: "josiehughes@diginetic.com",
          password:
            "Cillum commodo ad excepteur eu dolor reprehenderit dolor commodo ea velit non veniam cillum irure."
        },
        {
          name: "Stone",
          email: "tabathadudley@arctiq.com",
          password: "Est nisi amet cupidatat et deserunt do mollit."
        },
        {
          name: "Moran",
          email: "adeladowns@futurize.com",
          password:
            "Quis ipsum cillum irure enim aute eu velit eu eiusmod esse eu."
        },
        {
          name: "Lilia",
          email: "imogenegraham@cincyr.com",
          password: "Nulla officia ex eu amet commodo eiusmod qui."
        },
        {
          name: "Sheryl",
          email: "lindsayblackburn@phormula.com",
          password:
            "Proident magna quis qui incididunt cupidatat duis ex sunt aute sint."
        },
        {
          name: "Middleton",
          email: "deboraburt@fiberox.com",
          password: "Mollit exercitation aliquip ut labore aliqua."
        },
        {
          name: "Marquita",
          email: "alycepearson@dancerity.com",
          password:
            "Est aliquip non enim aliquip officia ullamco dolor reprehenderit occaecat."
        },
        {
          name: "Stacy",
          email: "angeliagriffith@xth.com",
          password:
            "Irure pariatur mollit ex nostrud aliquip reprehenderit esse pariatur duis pariatur nostrud excepteur do."
        },
        {
          name: "Kris",
          email: "rowlandmaldonado@newcube.com",
          password: "Est amet officia non aute ullamco."
        },
        {
          name: "Yvonne",
          email: "marleneadkins@zytrax.com",
          password:
            "Labore elit irure aliquip dolor laboris ut est laborum aliquip adipisicing culpa commodo."
        },
        {
          name: "Amanda",
          email: "maramadden@vortexaco.com",
          password: "Eu amet cupidatat et aliquip tempor laborum aliqua esse."
        },
        {
          name: "Rasmussen",
          email: "maxwellhammond@ozean.com",
          password: "In amet velit eiusmod veniam ut ullamco."
        },
        {
          name: "Hall",
          email: "rachaeldejesus@conjurica.com",
          password:
            "Dolore culpa anim commodo ullamco est proident dolor qui veniam."
        },
        {
          name: "Golden",
          email: "barrettmorrow@bytrex.com",
          password:
            "Esse ipsum duis deserunt laborum ut adipisicing reprehenderit amet sint magna consequat ullamco veniam."
        },
        {
          name: "Alma",
          email: "franciscamiller@stralum.com",
          password: "Cupidatat aliqua labore veniam eiusmod."
        },
        {
          name: "Pace",
          email: "pottsfrederick@kidgrease.com",
          password: "Ex consectetur ad eu sunt fugiat minim."
        },
        {
          name: "Freeman",
          email: "owensrollins@zentia.com",
          password:
            "Culpa esse nisi consectetur ex proident minim commodo duis id qui."
        },
        {
          name: "Jacqueline",
          email: "deegamble@bostonic.com",
          password:
            "Proident sint laborum cupidatat laboris mollit qui eu pariatur cillum irure Lorem anim."
        }
      ]);
    });
};
