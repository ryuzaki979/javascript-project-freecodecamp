// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
  //selectors
  const personImage= document.getElementById('person__image');
  const personName= document.getElementById('person__name');
  const personProfession= document.getElementById('person__profession');
  const personAbout= document.getElementById('person__about');
  let count= 0;
  window.addEventListener('DOMContentLoaded', function(){
      initialContent(); //calling initial content
      
  });
  
  //intializing content
  function initialContent(){
    personImage.src= reviews[count].img;
    personName.textContent= reviews[count].name;
    personProfession.textContent= reviews[count].job;
    personAbout.textContent= reviews[count].text;
  }

  //changing content

  const arrows = document.querySelectorAll('.arrow');
  arrows.forEach(function(arrow){
      arrow.addEventListener('click',function change(e){
          if(e.target===arrows[1]){
              if(count<reviews.length-1){
                count++
              }else{
                  count=0;
              }
              initialContent();
          }else{
            count--;
            if(count<0){
                count= reviews.length-1;
            }
            initialContent();
          }
      });
  })

  //surprise me.
  const button= document.getElementById('btn')
  button.addEventListener('click',function(){
      count= Math.floor(Math.random()*reviews.length)
      initialContent();
  })

  