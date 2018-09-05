const Thing = require('./models/thing');
const Comment = require('./models/comment');

const ThingsData = [{
  name: 'Iguana desert',
  image: 'https://images.unsplash.com/photo-1485343034225-9e5b5cb88c6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a28fc68742556a682ecac876ab4b9c2c&auto=format&fit=crop&w=1350&q=80',
  description: 'Leberkas tenderloin boudin pig bacon, flank filet mignon beef ribs meatloaf shankle drumstick. Jerky landjaeger pork brisket rump. Tri-tip beef ribs turducken hamburger rump, jowl capicola short ribs. Cupim turducken cow short loin ground round ham drumstick venison. Swine ham landjaeger bacon frankfurter shankle t-bone. Turkey pancetta ball tip shoulder, hamburger filet mignon drumstick frankfurter short loin pork chicken tail buffalo boudin. Shank brisket frankfurter boudin beef fatback, meatball salami bacon.',
},
{
  name: 'Kanikaczuloki floor',
  image: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1350&q=80',
  description: 'Bacon ipsum dolor amet salami alcatra strip steak short ribs, kielbasa sirloin burgdoggen ground round leberkas sausage drumstick andouille biltong tongue. Turkey drumstick buffalo, salami swine rump shoulder pork. Rump short ribs hamburger jowl bacon. Spare ribs buffalo t-bone tri-tip beef ribs chicken jerky meatloaf. Shank drumstick short loin, leberkas filet mignon chuck frankfurter. Filet mignon beef shank bacon tongue, venison boudin pork loin brisket pork sausage short loin prosciutto kielbasa. Shank pancetta bacon short ribs corned beef venison t-bone boudin.',
},
{
  name: 'Red carpet',
  image: 'https://images.unsplash.com/photo-1460458248189-2cb101df4e67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef0ed70802c5c63761e094167567d2fe&auto=format&fit=crop&w=1420&q=80',
  description: 'Meatloaf pork chop hamburger, tenderloin doner kevin leberkas drumstick pastrami tri-tip landjaeger salami strip steak. Boudin spare ribs ground round strip steak fatback, ribeye shank. Meatball tail bresaola landjaeger burgdoggen turducken doner meatloaf pork chop andouille brisket beef ribs alcatra. Sausage alcatra cupim venison ribeye andouille pig chicken buffalo burgdoggen. Rump cow bacon jowl, salami buffalo pancetta swine sausage fatback doner pork pork loin.',
},
{
  name: 'Devils Thing',
  image: 'https://images.unsplash.com/photo-1496080174650-637e3f22fa03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ca353cfcc4299e6c3d431ff862e1cf&auto=format&fit=crop&w=1306&q=80',
  description: 'Ball tip short loin boudin porchetta cupim, tenderloin meatloaf beef ribs chicken pastrami swine pork chop ground round turkey burgdoggen. Pork andouille brisket, shank strip steak kielbasa turducken bresaola salami tail rump. Pork belly bresaola spare ribs short loin jowl. Filet mignon boudin bacon turkey tongue porchetta pig meatloaf short ribs cupim venison beef ribs corned beef kielbasa ribeye.',
},
{
  name: 'Łąka',
  image: 'https://images.unsplash.com/photo-1465695954255-a262b0f57b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06d92f647a2937af54f658e199c3d990&auto=format&fit=crop&w=1350&q=80',
  description: 'Biltong meatball filet mignon salami flank, doner t-bone fatback landjaeger beef ribs turducken buffalo. Ham hock spare ribs bacon, capicola doner alcatra tenderloin short ribs jowl boudin chicken t-bone bresaola. Ham hock pastrami flank, pork kielbasa pork belly ground round fatback shank swine kevin. Chicken t-bone turducken ham shank rump. Boudin tongue pancetta, doner andouille beef pork belly tri-tip shoulder ground round.',
},
{
  name: 'Kanikaczuloki floor',
  image: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1350&q=80',
  description: 'Bacon ipsum dolor amet salami alcatra strip steak short ribs, kielbasa sirloin burgdoggen ground round leberkas sausage drumstick andouille biltong tongue. Turkey drumstick buffalo, salami swine rump shoulder pork. Rump short ribs hamburger jowl bacon. Spare ribs buffalo t-bone tri-tip beef ribs chicken jerky meatloaf. Shank drumstick short loin, leberkas filet mignon chuck frankfurter. Filet mignon beef shank bacon tongue, venison boudin pork loin brisket pork sausage short loin prosciutto kielbasa. Shank pancetta bacon short ribs corned beef venison t-bone boudin.',
},
{
  name: 'Red carpet',
  image: 'https://images.unsplash.com/photo-1460458248189-2cb101df4e67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef0ed70802c5c63761e094167567d2fe&auto=format&fit=crop&w=1420&q=80',
  description: 'Meatloaf pork chop hamburger, tenderloin doner kevin leberkas drumstick pastrami tri-tip landjaeger salami strip steak. Boudin spare ribs ground round strip steak fatback, ribeye shank. Meatball tail bresaola landjaeger burgdoggen turducken doner meatloaf pork chop andouille brisket beef ribs alcatra. Sausage alcatra cupim venison ribeye andouille pig chicken buffalo burgdoggen. Rump cow bacon jowl, salami buffalo pancetta swine sausage fatback doner pork pork loin.',
},
{
  name: 'Iguana desert',
  image: 'https://images.unsplash.com/photo-1485343034225-9e5b5cb88c6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a28fc68742556a682ecac876ab4b9c2c&auto=format&fit=crop&w=1350&q=80',
  description: 'Leberkas tenderloin boudin pig bacon, flank filet mignon beef ribs meatloaf shankle drumstick. Jerky landjaeger pork brisket rump. Tri-tip beef ribs turducken hamburger rump, jowl capicola short ribs. Cupim turducken cow short loin ground round ham drumstick venison. Swine ham landjaeger bacon frankfurter shankle t-bone. Turkey pancetta ball tip shoulder, hamburger filet mignon drumstick frankfurter short loin pork chicken tail buffalo boudin. Shank brisket frankfurter boudin beef fatback, meatball salami bacon.',
},
{
  name: 'Łąka',
  image: 'https://images.unsplash.com/photo-1465695954255-a262b0f57b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06d92f647a2937af54f658e199c3d990&auto=format&fit=crop&w=1350&q=80',
  description: 'Biltong meatball filet mignon salami flank, doner t-bone fatback landjaeger beef ribs turducken buffalo. Ham hock spare ribs bacon, capicola doner alcatra tenderloin short ribs jowl boudin chicken t-bone bresaola. Ham hock pastrami flank, pork kielbasa pork belly ground round fatback shank swine kevin. Chicken t-bone turducken ham shank rump. Boudin tongue pancetta, doner andouille beef pork belly tri-tip shoulder ground round.',
},
{
  name: 'Devils Thing',
  image: 'https://images.unsplash.com/photo-1496080174650-637e3f22fa03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ca353cfcc4299e6c3d431ff862e1cf&auto=format&fit=crop&w=1306&q=80',
  description: 'Ball tip short loin boudin porchetta cupim, tenderloin meatloaf beef ribs chicken pastrami swine pork chop ground round turkey burgdoggen. Pork andouille brisket, shank strip steak kielbasa turducken bresaola salami tail rump. Pork belly bresaola spare ribs short loin jowl. Filet mignon boudin bacon turkey tongue porchetta pig meatloaf short ribs cupim venison beef ribs corned beef kielbasa ribeye.',
},
];

const commentsData = [{
  author: 'John Wick',
  text: 'Shankle drumstick capicola, landjaeger bresaola swine short ribs bacon cupim spare ribs.',
},
{
  author: 'Paul Fucker',
  text: 'Cow corned beef t-bone biltong. Pork belly kielbasa porchetta strip steak.',
},
{
  author: 'Penny Brown',
  text: 'Bresaola kevin t-bone jerky shoulder cupim turducken swine leberkas ball tip ribeye shank frankfurter landjaeger.',
},
{
  author: 'Lech Łagocki',
  text: 'Fajnie w chuj.',
},
{
  author: 'Piter Pan',
  text: 'Ribeye salami filet mignon, turducken tenderloin biltong leberkas kielbasa porchetta venison.',
},
];

function addComments() {
  Thing.find({}, (errThing, Things) => {
    if (errThing) {
      console.log(errThing);
    } else {
      Comment.find({}, (errComm, comments) => {
        Things.forEach((Thing) => {
          if (errComm) {
            console.log(errComm);
          } else {
            comments.forEach((comment) => {
              Thing.comments.push(comment);
            });
          }
          Thing.save();
        });
      });
    }
  });
}

const seedDB = function () {
  Thing.remove({}, (errThingRem) => {
    if (errThingRem) {
      console.log(errThingRem);
    } else {
      Comment.remove({}, (errCommRem) => {
        if (errCommRem) {
          console.log(errCommRem);
        } else {
          ThingsData.forEach((Thing, ThingNum) => {
            console.log(`forEach na kampingu ${ThingNum}`);
            Thing.create(Thing, (errThing) => {
              if (errThing) {
                console.log(errThing);
              } else {
                console.log('Thing created');
              }
            });
          });
          commentsData.forEach((comment, commNum) => {
            console.log(`forEach na komentarzu ${commNum}`);
            Comment.create(comment, (errComm) => {
              if (errComm) {
                console.log(errComm);
              } else {
                console.log(`Comment added nr: ${commNum}`);
                if (commNum === 4) {
                  addComments();
                }
              }
            });
          });
        }
      });
    }
  });
};

module.exports = seedDB;
