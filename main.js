$(document).ready(
  $.ajax({
    method: "GET",
    url: "https://api.github.com/users/yeamin21/repos?id=254310907",
    success: (res) => {
      res
        .filter((r) => r.default_branch === "top")
        .map(
          (res) =>
            $(".projects").append(
              `<div class='project'>
              <div class="title">${res.name}</div>
              <div class="description">${res.description}</div>
              </div>`
            ) && console.log(res)
        );
    },
  })
);
