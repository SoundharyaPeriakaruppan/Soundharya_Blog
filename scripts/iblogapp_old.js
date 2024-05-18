// window.onload=function(){

//   const content=fetch("https://jsonplaceholder.typicode.com/posts").then((response=> {
//     // Check if response is successful
//     // if (!response.ok) {
//     //   throw new Error('Network response was not ok');
//     // }
//     // Parse response as JSON
//     // console.log(response);
//     // return response.json();
//     processBlogResponse(response.json());
//   })).catch(e=>{
//     console.log(e)
//   });
//   //   const content=[
//   //   {
//   //     "userId": 1,
//   //     "id": 1,
//   //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   //   },
//   //   {
//   //     "userId": 1,
//   //     "id": 2,
//   //     "title": "qui est esse",
//   //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   //   },
//   //   {
//   //       "userId": 1,
//   //       "id": 3,
//   //       "title": "qui est esse",
//   //       "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   //     },
//   //     {
//   //       "userId": 1,
//   //       "id": 4,
//   //       "title": "qui est esse",
//   //       "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   //     },
//   //     {
//   //       "userId": 1,
//   //       "id": 5,
//   //       "title": "qui est esse",
//   //       "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   //     },
//   //     {
//   //       "userId": 1,
//   //       "id": 6,
//   //       "title": "qui est esse",
//   //       "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   //     }

//   // //...
//   // ];
//     console.log(content);
//     let getHtml=document.getElementById("blog");
//     let finalHtml = '';
//     for(let i=0;i<content.length;i++)
//     {
//       let htmlContent='<div>';
//       htmlContent="<div class='card-container'>";
//       htmlContent ="<div class='card'>";
//       htmlContent+="<h3>"+content[i].title+"</h3>"+"<br>";
//       htmlContent+="<div class='card-content'>"+content[i].body+"</div>"+"</div>"+"</div>"+"</div>";
//       finalHtml+=htmlContent;
//     }
//     getHtml.innerHTML=finalHtml;
  
// }